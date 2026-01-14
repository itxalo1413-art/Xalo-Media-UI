'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
    Plus, 
    Search, 
    Edit, 
    Trash2, 
    MoreVertical, 
    Briefcase,
    MapPin,
    DollarSign,
    Calendar
} from 'lucide-react';
import { toast } from 'sonner';
import { getAccessToken } from '@/lib/auth';

interface IRecruitment {
    _id: string;
    title: string;
    slug: string;
    department: string;
    location: string;
    jobType: string;    // Updated from type
    salaryRange: string;// Updated from salary
    type?: string;      // Legacy support
    salary?: string;    // Legacy support
    deadline: string;
    isActive: boolean;
}

export default function AdminRecruitmentPage() {
    const [recruitments, setRecruitments] = useState<IRecruitment[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchRecruitments = async () => {
        try {
            const token = getAccessToken();
            const res = await fetch(`/api/v1/admin/recruitment?limit=100&search=${searchTerm}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                setRecruitments(data.data);
            }
        } catch (error) {
            console.error(error);
            toast.error('Không thể tải danh sách tin tuyển dụng');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecruitments();
    }, [searchTerm]);

    const handleDelete = async (id: string) => {
        if (!confirm('Bạn có chắc chắn muốn xóa tin tuyển dụng này?')) return;

        try {
            const token = getAccessToken();
            const res = await fetch(`/api/v1/admin/recruitment/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if (res.ok) {
                toast.success('Đã xóa tin tuyển dụng');
                fetchRecruitments();
            } else {
                toast.error('Lỗi khi xóa');
            }
        } catch (error) {
            toast.error('Lỗi kết nối');
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Tuyển dụng</h2>
                    <p className="text-gray-500 mt-1 font-bold">Quản lý các tin đăng tuyển dụng.</p>
                </div>
                <Link
                    href="/admin/recruitment/new"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-digital-blue text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
                >
                    <Plus className="w-5 h-5" />
                    Đăng tin mới
                </Link>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm tin tuyển dụng..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-digital-blue focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-gray-900 placeholder:text-gray-400"
                    />
                </div>
            </div>

            {/* List */}
            {loading ? (
                <div className="text-center py-20 text-gray-500 font-bold">Đang tải...</div>
            ) : recruitments.length === 0 ? (
                <div className="text-center py-20 text-gray-500 font-bold">Chưa có tin tuyển dụng nào.</div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {recruitments.map((job) => (
                        <div key={job._id} className="bg-white p-6 rounded-[24px] border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-lg transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-digital-blue shrink-0">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-black text-gray-900">{job.title}</h3>
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase ${
                                            job.isActive ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                                        }`}>
                                            {job.isActive ? 'Active' : 'Hidden'}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 font-bold">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Briefcase className="w-4 h-4" />
                                            {job.department} • {job.jobType || job.type}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <DollarSign className="w-4 h-4" />
                                            {job.salaryRange || job.salary}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            Deadline: {job.deadline ? new Date(job.deadline).toLocaleDateString('vi-VN') : 'Không thời hạn'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 sm:self-center self-end">
                                <Link
                                    href={`/admin/recruitment/${job._id}`}
                                    className="p-2 text-gray-400 hover:text-digital-blue hover:bg-blue-50 rounded-xl transition-all"
                                >
                                    <Edit className="w-5 h-5" />
                                </Link>
                                <button
                                    onClick={() => handleDelete(job._id)}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
