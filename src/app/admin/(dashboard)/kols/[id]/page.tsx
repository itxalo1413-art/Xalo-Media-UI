'use client';

import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getAccessToken } from '@/lib/auth';
import ImageUpload from '@/components/admin/ImageUpload';

export default function EditKolPage() {
    const router = useRouter();
    const params = useParams(); // params.id is string | string[]
    const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        niche: '',
        avatar: '',
        followers: '',
        engagement: '',
        rating: 5,
        isActive: true,
        tags: '',
        slug: ''
    });

    useEffect(() => {
        if (id) {
            fetchKol(id);
        }
    }, [id]);

    const fetchKol = async (kolId: string) => {
        try {
            const res = await fetch(`/api/v1/admin/kol/${kolId}`, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            });
            const data = await res.json();
            if (data.success) {
                const kol = data.data;
                setFormData({
                    name: kol.name,
                    niche: kol.niche,
                    avatar: kol.img || kol.avatar || '',
                    followers: kol.followers,
                    engagement: kol.engagement,
                    rating: kol.rating,
                    isActive: kol.isActive,
                    tags: kol.tags.join(', '),
                    slug: kol.slug
                });
            } else {
                toast.error('Không tìm thấy KOL');
                router.push('/admin/kols');
            }
        } catch (error) {
            toast.error('Lỗi khi tải dữ liệu');
        } finally {
            setFetching(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const tagsArray = formData.tags.split(',').map(t => t.trim()).filter(Boolean);
            
            const res = await fetch(`/api/v1/admin/kol/${id}`, {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getAccessToken()}`
                },
                body: JSON.stringify({
                    ...formData,
                    img: formData.avatar,
                    tags: tagsArray,
                    rating: Number(formData.rating)
                })
            });

            const data = await res.json();
            
            if (data.success) {
                toast.success('Cập nhật KOL thành công');
                router.push('/admin/kols');
            } else {
                toast.error(data.error?.message || 'Có lỗi xảy ra');
            }
        } catch (error) {
            toast.error('Có lỗi xảy ra khi kết nối server');
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return <div className="text-center py-20">Đang tải dữ liệu...</div>;

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/kols"
                    className="p-3 bg-white rounded-xl border border-gray-100 text-gray-400 hover:text-digital-blue hover:border-digital-blue transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Cập nhật KOL</h2>
                    <p className="text-gray-500 mt-1 font-bold">Chỉnh sửa thông tin: <span className="text-digital-blue">{formData.name}</span></p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* General Info */}
                    <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                        <h3 className="text-xl font-black text-gray-900">Thông tin chung</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Tên KOL <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Slug (URL)</label>
                                <input
                                    type="text"
                                    value={formData.slug}
                                    onChange={e => setFormData({ ...formData, slug: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium"
                                    placeholder="Leave empty to auto-generate"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Lĩnh vực (Niche) <span className="text-red-500">*</span></label>
                            <input
                                required
                                type="text"
                                value={formData.niche}
                                onChange={e => setFormData({ ...formData, niche: e.target.value })}
                                className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Avatar <span className="text-red-500">*</span></label>
                            <ImageUpload
                                value={formData.avatar}
                                onChange={(url) => setFormData({ ...formData, avatar: url })}
                                folder="xalomedia/kols"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Followers <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    value={formData.followers}
                                    onChange={e => setFormData({ ...formData, followers: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium"
                                />
                            </div>
                             <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Engagement <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    value={formData.engagement}
                                    onChange={e => setFormData({ ...formData, engagement: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium"
                                />
                            </div>
                             <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Rating</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="5"
                                    value={formData.rating}
                                    onChange={e => setFormData({ ...formData, rating: Number(e.target.value) })}
                                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Tags (ngăn cách bởi dấu phẩy)</label>
                                <input
                                    type="text"
                                    value={formData.tags}
                                    onChange={e => setFormData({ ...formData, tags: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl border-none focus:ring-2 focus:ring-digital-blue font-medium"
                                />
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
                </div>
            </form>
        </div>
    );
}
