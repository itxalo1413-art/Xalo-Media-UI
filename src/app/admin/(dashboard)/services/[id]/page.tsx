'use client';

import {
    ArrowLeft,
    Save,
    Upload,
    PenLine,
    Layout,
    Layers,
    Type,
    Image as ImageIcon
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

export default function EditServicePage() {
    const router = useRouter();
    const params = useParams();
    const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        shortDescription: '',
        contentHtml: '', // Used for CKEditor
        coverImageUrl: '',
        iconKey: 'star',
        order: 0,
        isActive: true,
        highlights: [] as any[], // Simplify type for now
        stat: null as any
    });

    useEffect(() => {
        if (id) {
            fetchService(id);
        }
    }, [id]);

    const fetchService = async (serviceId: string) => {
        try {
            const res = await fetch(`/api/v1/admin/services/${serviceId}`, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            });
            const data = await res.json();
            if (data.success) {
                const service = data.data.service;
                setFormData({
                    title: service.title,
                    slug: service.slug,
                    shortDescription: service.shortDescription || '',
                    contentHtml: service.contentHtml || '',
                    coverImageUrl: service.coverImageUrl || '',
                    iconKey: service.iconKey || 'star',
                    order: service.order || 0,
                    isActive: service.isActive,
                    highlights: service.highlights || [],
                    stat: service.stat || null
                });
            } else {
                toast.error('Không tìm thấy dịch vụ');
                router.push('/admin/services');
            }
        } catch (error) {
            toast.error('Lỗi khi tải dữ liệu dịch vụ');
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`/api/v1/admin/services/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getAccessToken()}`
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            
            if (data.success) {
                toast.success('Cập nhật dịch vụ thành công');
                router.push('/admin/services');
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
                    href="/admin/services"
                    className="p-3 bg-white rounded-xl border border-gray-100 text-gray-400 hover:text-digital-blue hover:border-digital-blue transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Cập nhật Dịch vụ</h2>
                    <p className="text-gray-500 mt-1 font-bold">Chỉnh sửa thông tin dịch vụ: <span className="text-digital-blue">{formData.title}</span></p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* General Info */}
                    <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 pb-6 border-b border-gray-50">
                            <div className="p-2 bg-blue-50 text-digital-blue rounded-lg">
                                <Layers className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900">Thông tin chung</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Tên dịch vụ <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    value={formData.title}
                                    onChange={handleTitleChange}
                                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium placeholder-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Slug (URL)</label>
                                <div className="flex gap-2 items-center px-4 py-3 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-digital-blue">
                                    <span className="text-gray-400 text-sm font-medium">/services/</span>
                                    <input
                                        type="text"
                                        value={formData.slug}
                                        onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                        className="flex-1 bg-transparent border-none p-0 focus:ring-0 font-medium text-gray-900"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Mô tả ngắn</label>
                                <textarea
                                    rows={3}
                                    value={formData.shortDescription}
                                    onChange={e => setFormData({ ...formData, shortDescription: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium placeholder-gray-400 resize-none"
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
                     {/* Status Panel */}
                     <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                        <h3 className="text-xl font-black text-gray-900">Trạng thái</h3>
                        
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <span className="font-bold text-gray-700">Hiển thị</span>
                            <div 
                                onClick={() => setFormData({ ...formData, isActive: !formData.isActive })}
                                className={`w-14 h-8 rounded-full p-1 cursor-pointer transition-colors ${formData.isActive ? 'bg-digital-blue' : 'bg-gray-300'}`}
                            >
                                <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${formData.isActive ? 'translate-x-6' : 'translate-x-0'}`} />
                            </div>
                        </div>

                         <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Thứ tự hiển thị</label>
                            <input
                                type="number"
                                value={formData.order}
                                onChange={e => setFormData({ ...formData, order: Number(e.target.value) })}
                                className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium"
                            />
                        </div>

                         <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Icon Key (Lucide)</label>
                            <input
                                type="text"
                                value={formData.iconKey}
                                onChange={e => setFormData({ ...formData, iconKey: e.target.value })}
                                className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-digital-blue text-white font-black rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                        >
                            {loading ? 'Đang xử lý...' : (
                                <>
                                    <Save className="w-5 h-5" />
                                    Lưu thay đổi
                                </>
                            )}
                        </button>
                    </div>

                     {/* Featured Image */}
                     <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                <ImageIcon className="w-4 h-4" />
                            </div>
                            <h3 className="text-lg font-black text-gray-900">Ảnh đại diện</h3>
                        </div>
                        
                        <div className="space-y-4">
                             <ImageUpload
                                value={formData.coverImageUrl}
                                onChange={(url) => setFormData({ ...formData, coverImageUrl: url })}
                                folder="xalomedia/services"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
