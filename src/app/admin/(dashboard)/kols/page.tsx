'use client';

import { Plus, Search, Edit2, Trash2, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { getAccessToken } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface Kol {
    _id: string;
    name: string;
    slug: string;
    niche: string;
    img: string;
    followers: string;
    isActive: boolean;
    order: number;
}

export default function AdminKolsPage() {
    const [kols, setKols] = useState<Kol[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

    const fetchKols = async () => {
        try {
            setLoading(true);
            const res = await fetch(`/api/v1/admin/kol?q=${query}&limit=100`, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            });
            const data = await res.json();
            if (data.success) {
                setKols(data.data);
            }
        } catch (error) {
            toast.error('Không thể tải danh sách KOLs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchKols();
    }, [query]);

    const handleDelete = async (id: string) => {
        if (!confirm('Bạn có chắc chắn muốn xóa KOL này?')) return;
        try {
            const res = await fetch(`/api/v1/admin/kol/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Đã xóa KOL thành công');
                fetchKols();
            }
        } catch (error) {
            toast.error('Lỗi khi xóa KOL');
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Quản lý KOLs</h2>
                    <p className="text-gray-500 mt-1 font-bold">Danh sách các KOLs/KOCs trong mạng lưới.</p>
                </div>
                <Link
                    href="/admin/kols/new"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-digital-blue text-white font-black rounded-2xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest"
                >
                    <Plus className="w-5 h-5" />
                    Thêm KOL mới
                </Link>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-[16px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm KOLs..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-gray-50 border-none rounded-2xl py-3 pl-11 pr-4 text-sm font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                    />
                </div>
            </div>

            {/* Kols Table */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Avatar</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">KOL</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Lĩnh vực</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Followers</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Trạng thái</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="px-8 py-6 text-center text-gray-500">Đang tải...</td>
                                </tr>
                            ) : kols.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-8 py-6 text-center text-gray-500">Chưa có KOL nào.</td>
                                </tr>
                            ) : kols.map((kol) => (
                                <tr key={kol._id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                                            <img src={kol.img} alt={kol.name} className="w-full h-full object-cover" />
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div>
                                            <p className="font-black text-gray-900 group-hover:text-digital-blue transition-colors">
                                                {kol.name}
                                            </p>
                                            <p className="text-xs font-bold text-gray-400">/{kol.slug}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-bold text-gray-600 px-2 py-1 bg-gray-100 rounded-lg">
                                            {kol.niche}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-sm font-bold text-gray-900">{kol.followers}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${kol.isActive
                                            ? 'bg-green-100 text-green-600 border-green-200'
                                            : 'bg-gray-100 text-gray-400 border-gray-200'
                                            }`}>
                                            {kol.isActive ? 'Hoạt động' : 'Ẩn'}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center gap-2">
                                            <Link href={`/admin/kols/${kol._id}`} className="p-2 hover:bg-blue-50 text-gray-400 hover:text-digital-blue rounded-xl transition-all">
                                                <Edit2 className="w-4 h-4" />
                                            </Link>
                                            <button onClick={() => handleDelete(kol._id)} className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
