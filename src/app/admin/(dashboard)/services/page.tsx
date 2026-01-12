'use client';

import { Plus, Search, Edit2, Trash2, Eye, MoreVertical } from 'lucide-react';
import Link from 'next/link';

// ... imports
import { useState, useEffect } from 'react';
import { getAccessToken } from '@/lib/auth';
import { toast } from 'sonner';

export default function AdminServicesPage() {
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all"); // all, active, inactive

    const fetchServices = async () => {
        try {
            setLoading(true);
            const token = getAccessToken();
            const params = new URLSearchParams({ limit: "100" });
            
            if (searchTerm) params.append("q", searchTerm);
            if (statusFilter === "active") params.append("isActive", "true");
            if (statusFilter === "inactive") params.append("isActive", "false");

            const res = await fetch(`/api/v1/admin/services?${params.toString()}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.ok) {
                const data = await res.json();
                setServices(data.data.items || []);
            } else {
                console.error("Failed to fetch services", res.status);
                toast.error("Không thể tải danh sách dịch vụ");
            }
        } catch (error) {
            console.error("Error fetching services", error);
            toast.error("Lỗi kết nối");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, [searchTerm, statusFilter]);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Cấu hình dịch vụ</h2>
                    <p className="text-gray-500 mt-1 font-bold">Quản lý các gói dịch vụ hiển thị trên trang chủ.</p>
                </div>
                <Link
                    href="/admin/services/new"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-digital-blue text-white font-black rounded-2xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest"
                >
                    <Plus className="w-5 h-5" />
                    Thêm dịch vụ
                </Link>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-4 rounded-[16px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm dịch vụ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-50 border-none rounded-2xl py-3 pl-11 pr-4 text-sm font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <select 
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-gray-50 border-none rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none flex-1 md:flex-none"
                    >
                        <option value="all">Tất cả trạng thái</option>
                        <option value="active">Đang hoạt động</option>
                        <option value="inactive">Tạm dừng</option>
                    </select>
                </div>
            </div>

            {/* Services Table */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Thứ tự</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Dịch vụ</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Slug</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Trạng thái</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="text-center py-8 text-gray-500">Đang tải dữ liệu...</td>
                                </tr>
                            ) : services.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="text-center py-8 text-gray-500">Không tìm thấy dịch vụ nào</td>
                                </tr>
                            ) : (
                                services.map((service: any) => (
                                    <tr key={service._id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-8 py-6">
                                            <span className="font-black text-gray-900">{service.order ?? 0}</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div>
                                                <p className="font-black text-gray-900 group-hover:text-digital-blue transition-colors">
                                                    {service.title}
                                                </p>
                                                <p className="text-sm font-bold text-gray-500 line-clamp-1 max-w-xs">
                                                    {service.shortDescription}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <code className="text-[10px] font-black bg-gray-100 text-gray-500 px-2 py-1 rounded-lg">
                                                /{service.slug}
                                            </code>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${service.isActive
                                                ? 'bg-green-100 text-green-600 border-green-200'
                                                : 'bg-gray-100 text-gray-400 border-gray-200'
                                                }`}>
                                                {service.isActive ? 'Hoạt động' : 'Tạm dừng'}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center gap-2">
                                                <Link href={`/admin/services/${service._id}`} className="p-2 hover:bg-blue-50 text-gray-400 hover:text-digital-blue rounded-xl transition-all">
                                                    <Edit2 className="w-4 h-4" />
                                                </Link>
                                                <button className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 hover:bg-gray-100 text-gray-400 hover:text-gray-900 rounded-xl transition-all">
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
