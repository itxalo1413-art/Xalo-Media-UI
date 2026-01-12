'use client';

import {
    ArrowLeft,
    Save,
    Upload,
    PenLine,
    Layout
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { getAccessToken } from '@/lib/auth';
import ImageUpload from '@/components/admin/ImageUpload';
import dynamic from 'next/dynamic';

// Import CKEditor dynamically to avoid SSR issues
const CKEditor = dynamic(() => import('@/components/admin/CKEditor'), { ssr: false });

export default function EditArticlePage() {
    const router = useRouter();
    const params = useParams();
    const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        tags: '',
        featuredImageUrl: '',
        contentHtml: '', // Used for CKEditor
        source: 'manual',
        status: 'draft'
    });

    useEffect(() => {
        if (id) {
            fetchArticle(id);
        }
    }, [id]);

    const fetchArticle = async (articleId: string) => {
        try {
            const res = await fetch(`/api/v1/admin/articles/${articleId}`, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            });
            const data = await res.json();
            if (data.success) {
                const article = data.data.article;
                setFormData({
                    title: article.title,
                    slug: article.slug,
                    excerpt: article.excerpt || '',
                    tags: article.tags?.join(', ') || '',
                    featuredImageUrl: article.featuredImageUrl || '',
                    contentHtml: article.contentHtml || '',
                    source: article.source,
                    status: article.status
                });
            } else {
                toast.error('Không tìm thấy bài viết');
                router.push('/admin/articles');
            }
        } catch (error) {
            toast.error('Lỗi khi tải dữ liệu bài viết');
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const tagsArray = formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : [];

            const res = await fetch(`/api/v1/admin/articles/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getAccessToken()}`
                },
                body: JSON.stringify({
                    ...formData,
                    tags: tagsArray
                })
            });

            const data = await res.json();
            
            if (data.success) {
                toast.success('Cập nhật bài viết thành công');
                router.push('/admin/articles');
            } else {
                toast.error(data.error?.message || 'Có lỗi xảy ra');
            }
        } catch (error) {
            toast.error('Có lỗi xảy ra khi kết nối server');
        } finally {
            setLoading(false);
        }
    };
    
    // Auto-generate slug from title if empty
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        const slug = title
            .toLowerCase()
            .normalize('NFD') // Decompose combined graphemes into combination of simple ones
            .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
            .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
            .trim()
            .replace(/\s+/g, '-'); // Replace spaces with hyphens
        
        setFormData(prev => ({ 
            ...prev, 
            title, 
            slug: prev.slug || slug // Only update slug if it's empty
        }));
    };

    if (fetching) return <div className="text-center py-20">Đang tải dữ liệu...</div>;

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/articles"
                    className="p-3 bg-white rounded-xl border border-gray-100 text-gray-400 hover:text-digital-blue hover:border-digital-blue transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Cập nhật Bài viết</h2>
                    <p className="text-gray-500 mt-1 font-bold">Chỉnh sửa nội dung bài viết: <span className="text-digital-blue">{formData.title}</span></p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* General Info */}
                    <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 pb-6 border-b border-gray-50">
                            <div className="p-2 bg-blue-50 text-digital-blue rounded-lg">
                                <PenLine className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900">Nội dung chính</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Tiêu đề bài viết <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    value={formData.title}
                                    onChange={handleTitleChange}
                                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium placeholder-gray-400"
                                    placeholder="Nhập tiêu đề bài viết..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Slug (URL)</label>
                                <div className="flex gap-2 items-center px-4 py-3 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-digital-blue">
                                    <span className="text-gray-400 text-sm font-medium">/blog/</span>
                                    <input
                                        type="text"
                                        value={formData.slug}
                                        onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                        className="flex-1 bg-transparent border-none p-0 focus:ring-0 font-medium text-gray-900"
                                        placeholder="url-bai-viet"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Mô tả ngắn (Excerpt)</label>
                                <textarea
                                    rows={3}
                                    value={formData.excerpt}
                                    onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium placeholder-gray-400 resize-none"
                                    placeholder="Tóm tắt nội dung bài viết..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Nội dung chi tiết</label>
                                <div className="max-w-full prose prose-lg">
                                    <CKEditor
                                        value={formData.contentHtml}
                                        onChange={(data) => setFormData(prev => ({ ...prev, contentHtml: data }))}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                     {/* Publish Status */}
                     <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <Save className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-black text-gray-900">Xuất bản</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Trạng thái</label>
                                <select 
                                    value={formData.status}
                                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border-none font-bold text-gray-900 focus:ring-2 focus:ring-digital-blue cursor-pointer"
                                >
                                    <option value="draft">Bản nháp (Draft)</option>
                                    <option value="published">Công khai (Published)</option>
                                </select>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nguồn bài viết</label>
                                <select 
                                    value={formData.source}
                                    onChange={(e) => setFormData({...formData, source: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border-none font-bold text-gray-900 focus:ring-2 focus:ring-digital-blue cursor-pointer"
                                    disabled
                                >
                                    <option value="manual">Thủ công</option>
                                    <option value="ai">AI Generated</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-digital-blue text-white font-black rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-2 mt-4"
                            >
                                {loading ? 'Đang xử lý...' : (
                                    <>
                                        <Save className="w-5 h-5" />
                                        Lưu thay đổi
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                <Layout className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-black text-gray-900">Ảnh đại diện</h3>
                        </div>
                        
                        <div className="space-y-4">
                             <ImageUpload
                                value={formData.featuredImageUrl}
                                onChange={(url) => setFormData({ ...formData, featuredImageUrl: url })}
                                folder="xalomedia/articles"
                            />
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                        <h3 className="text-lg font-black text-gray-900">Phân loại</h3>
                        <div className="space-y-4">
                             <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Tags</label>
                                <input
                                    type="text"
                                    value={formData.tags}
                                    onChange={e => setFormData({ ...formData, tags: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium text-sm"
                                    placeholder="Marketing, Tips, SEO..."
                                />
                                <p className="text-xs text-gray-400 font-medium">Ngăn cách bởi dấu phẩy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
