'use client';

import { Search, Filter, Mail, Phone, Calendar, CheckCircle, Clock, XCircle, MoreVertical } from 'lucide-react';

export default function AdminInquiriesPage() {
    // Mock data based on Inquiry model
    const inquiries = [
        {
            id: '1',
            fullName: 'Nguyễn Văn A',
            email: 'vana@gmail.com',
            phone: '0901234567',
            company: 'Công ty TNHH Giải pháp số',
            interestedServices: ['Influencer Marketing', 'TikTok Management'],
            budgetRange: '50 - 100 triệu',
            status: 'new',
            createdAt: '2025-12-29T10:00:00Z',
        },
        {
            id: '2',
            fullName: 'Trần Thị B',
            email: 'btran@yahoo.com',
            phone: '0912345678',
            company: 'Brand Fashion',
            interestedServices: ['Livestream Services'],
            budgetRange: 'Dưới 50 triệu',
            status: 'contacted',
            createdAt: '2025-12-28T14:30:00Z',
        },
        {
            id: '3',
            fullName: 'Lê Văn C',
            email: 'cle@company.com',
            phone: '0987654321',
            company: 'Startup Tech',
            interestedServices: ['Content Creation', 'Brand Partnership'],
            budgetRange: 'Trên 500 triệu',
            status: 'qualified',
            createdAt: '2025-12-27T09:15:00Z',
        },
    ];

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'new': return 'bg-orange-100 text-orange-600 border-orange-200';
            case 'contacted': return 'bg-blue-100 text-blue-600 border-blue-200';
            case 'qualified': return 'bg-green-100 text-green-600 border-green-200';
            case 'closed': return 'bg-gray-100 text-gray-600 border-gray-200';
            case 'spam': return 'bg-red-100 text-red-600 border-red-200';
            default: return 'bg-gray-100 text-gray-400 border-gray-200';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'new': return 'Mới';
            case 'contacted': return 'Đã liên hệ';
            case 'qualified': return 'Tiềm năng';
            case 'closed': return 'Đã chốt';
            case 'spam': return 'Spam';
            default: return status;
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Yêu cầu tư vấn</h2>
                <p className="text-gray-500 mt-1 font-bold">Quản lý và phản hồi các yêu cầu từ khách hàng tiềm năng.</p>
            </div>

            {/* Filters and Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 bg-white p-6 rounded-[16px] border border-gray-100 shadow-sm flex flex-col justify-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Tổng yêu cầu bài này</p>
                    <p className="text-3xl font-black text-gray-900">48</p>
                </div>
                <div className="md:col-span-3 bg-white p-4 rounded-[16px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm theo tên, email, công ty..."
                            className="w-full bg-gray-50 border-none rounded-2xl py-3 pl-11 pr-4 text-sm font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <button className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-900 font-black text-xs px-6 py-3 rounded-2xl transition-all uppercase tracking-widest whitespace-nowrap">
                            <Filter className="w-4 h-4" />
                            Bộ lọc
                        </button>
                    </div>
                </div>
            </div>

            {/* CRM Table */}
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Khách hàng</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Dịch vụ quan tâm</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Ngân sách</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Thời gian</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Trạng thái</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {inquiries.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div>
                                            <p className="font-black text-gray-900 group-hover:text-digital-blue transition-colors">
                                                {item.fullName}
                                            </p>
                                            <div className="flex flex-col gap-1 mt-1">
                                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                                                    <Mail className="w-3 h-3" /> {item.email}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                                                    <Phone className="w-3 h-3" /> {item.phone}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                                            {item.interestedServices.map((service, idx) => (
                                                <span key={idx} className="px-2 py-0.5 bg-blue-50 text-digital-blue text-[10px] font-black rounded-md">
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-sm font-black text-gray-900">{item.budgetRange}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {new Date(item.createdAt).toLocaleDateString('vi-VN')}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusStyle(item.status)}`}>
                                            {getStatusLabel(item.status)}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2 hover:bg-gray-100 text-gray-400 hover:text-gray-900 rounded-xl transition-all">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
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
