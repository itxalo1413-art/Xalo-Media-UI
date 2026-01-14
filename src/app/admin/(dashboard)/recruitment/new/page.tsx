'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Save, Briefcase, MapPin, DollarSign, Calendar, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { getAccessToken } from '@/lib/auth';

export default function NewRecruitmentPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    
    // Initial state matching the schema
    const [formData, setFormData] = useState({
        title: '',
        department: '',
        location: '',
        jobType: 'Full-time', // Default
        salaryRange: '',
        deadline: '',
        description: '',
        requirements: '',
        benefits: '',
        isActive: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleToggleActive = () => {
        setFormData(prev => ({ ...prev, isActive: !prev.isActive }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = getAccessToken();
            
            // Transform data for backend
            const payload = {
                ...formData,
                deadline: formData.deadline || undefined, // Send undefined if empty
                requirements: formData.requirements.split('\n').filter(line => line.trim() !== ''),
                benefits: formData.benefits.split('\n').filter(line => line.trim() !== '')
            };

            const res = await fetch('/api/v1/admin/recruitment', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success('Đã tạo tin tuyển dụng thành công');
                router.push('/admin/recruitment');
            } else {
                toast.error(data.error?.message || 'Có lỗi xảy ra');
            }
        } catch (error) {
            toast.error('Lỗi kết nối');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/recruitment"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm text-gray-400 hover:text-gray-900 hover:scale-105 transition-all"
                >
                    <ChevronLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Thêm tin tuyển dụng</h2>
                    <p className="text-gray-500 mt-1 font-bold">Tạo tin tuyển dụng mới cho hệ thống.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Basic Info */}
                    <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                        <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-digital-blue" />
                            Thông tin cơ bản
                        </h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Tiêu đề công việc</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Ví dụ: Senior React Native Developer"
                                    className="w-full bg-gray-50 border-none rounded-2xl p-4 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/10 outline-none"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Phòng ban</label>
                                    <input
                                        type="text"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        placeholder="Ví dụ: Tech, Marketing..."
                                        className="w-full bg-gray-50 border-none rounded-2xl p-4 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/10 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Loại hình</label>
                                    <select
                                        name="jobType"
                                        value={formData.jobType}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-none rounded-2xl p-4 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/10 outline-none appearance-none"
                                    >
                                        <option value="Full-time">Full-time</option>
                                        <option value="Part-time">Part-time</option>
                                        <option value="Freelance">Freelance</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Địa điểm</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="Hồ Chí Minh"
                                            className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/10 outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Mức lương</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="salaryRange"
                                            value={formData.salaryRange}
                                            onChange={handleChange}
                                            placeholder="Thỏa thuận / 1000$..."
                                            className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/10 outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                             <div>
                                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Hạn nộp hồ sơ</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="date"
                                        name="deadline"
                                        value={formData.deadline}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/10 outline-none"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Details */}
                    <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                         <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-digital-blue" />
                            Chi tiết công việc
                        </h3>
                        
                        <div>
                            <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Mô tả công việc</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={5}
                                className="w-full bg-gray-50 border-none rounded-2xl p-4 font-medium text-gray-700 focus:ring-4 focus:ring-blue-500/10 outline-none"
                                placeholder="Nhập mô tả công việc..."
                            />
                        </div>

                         <div>
                            <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Yêu cầu ứng viên</label>
                            <textarea
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                rows={5}
                                className="w-full bg-gray-50 border-none rounded-2xl p-4 font-medium text-gray-700 focus:ring-4 focus:ring-blue-500/10 outline-none"
                                placeholder="Nhập yêu cầu ứng viên..."
                            />
                        </div>

                         <div>
                            <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Quyền lợi</label>
                            <textarea
                                name="benefits"
                                value={formData.benefits}
                                onChange={handleChange}
                                rows={5}
                                className="w-full bg-gray-50 border-none rounded-2xl p-4 font-medium text-gray-700 focus:ring-4 focus:ring-blue-500/10 outline-none"
                                placeholder="Nhập quyền lợi được hưởng..."
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar Actions */}
                <div className="space-y-8">
                     <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm space-y-6 sticky top-8">
                        <div>
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Trạng thái</h3>
                            <div 
                                onClick={handleToggleActive}
                                className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                                    formData.isActive 
                                    ? 'border-green-500 bg-green-50' 
                                    : 'border-gray-200 bg-gray-50'
                                }`}
                            >
                                <div className={`w-10 h-6 rounded-full relative transition-colors ${
                                    formData.isActive ? 'bg-green-500' : 'bg-gray-300'
                                }`}>
                                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                        formData.isActive ? 'left-5' : 'left-1'
                                    }`} />
                                </div>
                                <span className={`font-bold ${formData.isActive ? 'text-green-700' : 'text-gray-500'}`}>
                                    {formData.isActive ? 'Đang hiển thị' : 'Đang ẩn'}
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-digital-blue text-white rounded-2xl font-black shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <Save className="w-5 h-5" />
                                    Lưu tin tuyển dụng
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
