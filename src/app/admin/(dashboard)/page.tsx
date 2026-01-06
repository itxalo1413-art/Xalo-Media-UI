import {
    Users,
    Briefcase,
    FileText,
    TrendingUp,
    ArrowUpRight,
    MessageSquare,
    Clock
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
    // Mock data for initial design
    const stats = [
        { label: 'Yêu cầu mới', value: '12', change: '+20%', icon: MessageSquare, color: 'text-orange-600', bg: 'bg-orange-50' },
        { label: 'Dịch vụ', value: '6', change: '0%', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Bài viết', value: '24', change: '+4', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50' },
        { label: 'Lượt xem (Blog)', value: '1,284', change: '+12%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
    ];

    const recentInquiries = [
        { id: 1, name: 'Nguyễn Văn A', service: 'Influencer Marketing', date: '2 phút trước', status: 'new' },
        { id: 2, name: 'Trần Thị B', service: 'TikTok Management', date: '1 giờ trước', status: 'new' },
        { id: 3, name: 'Lê Văn C', service: 'Livestream Services', date: '3 giờ trước', status: 'new' },
    ];

    return (
        <div className="space-y-10">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Chào mừng trở lại, Admin!</h2>
                <p className="text-gray-500 mt-1 font-bold">Dưới đây là tổng quan về hoạt động của Xalo Media hôm nay.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="p-6 bg-white rounded-[16px] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="flex items-center text-xs font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                                {stat.change}
                                <ArrowUpRight className="ml-1 w-3 h-3" />
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                        <p className="text-3xl font-black text-gray-900 mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Inquiries List */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-black text-gray-900 tracking-tight">Yêu cầu tư vấn mới</h3>
                        <Link href="/admin/inquiries" className="text-sm font-black text-digital-blue hover:underline">
                            Xem tất cả
                        </Link>
                    </div>

                    <div className="bg-white rounded-[16px] border border-gray-100 shadow-sm overflow-hidden">
                        <div className="divide-y divide-gray-50">
                            {recentInquiries.map((inquiry) => (
                                <div key={inquiry.id} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center font-black text-gray-400">
                                            {inquiry.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-black text-gray-900">{inquiry.name}</p>
                                            <p className="text-sm font-bold text-gray-500">{inquiry.service}</p>
                                        </div>
                                    </div>
                                    <div className="text-right flex items-center gap-4">
                                        <div className="hidden sm:block">
                                            <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 uppercase tracking-widest px-2 py-1 bg-gray-100 rounded-lg">
                                                <Clock className="w-3 h-3" />
                                                {inquiry.date}
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-200">
                                            Mới
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">Thao tác nhanh</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <Link href="/admin/services/new" className="p-6 bg-gradient-to-br from-digital-blue to-blue-700 rounded-[16px] text-white shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all group">
                            <PlusCircle className="w-8 h-8 mb-4 opacity-80" />
                            <p className="font-black text-lg leading-tight">Thêm dịch vụ mới</p>
                            <p className="text-sm opacity-70 font-bold mt-1">Cập nhật danh mục sản phẩm</p>
                        </Link>

                        <Link href="/admin/articles/new" className="p-6 bg-white rounded-[16px] border border-gray-100 shadow-sm hover:border-digital-blue/30 transition-all group">
                            <PenLine className="w-8 h-8 text-digital-blue mb-4" />
                            <p className="font-black text-lg text-gray-900 leading-tight">Viết bài Blog</p>
                            <p className="text-sm text-gray-500 font-bold mt-1">Chia sẻ kiến thức marketing</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Inline icons for simplicity in this example
function PlusCircle({ className }: { className?: string }) {
    return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path d="M12 8v8M8 12h8" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function PenLine({ className }: { className?: string }) {
    return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
    );
}
