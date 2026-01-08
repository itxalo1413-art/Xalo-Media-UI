'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Briefcase,
    MessageSquare,
    FileText,
    Settings,
    LogOut,
    ChevronRight,
    Users
} from 'lucide-react';

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Dịch vụ', href: '/admin/services', icon: Briefcase },
    { name: 'Yêu cầu tư vấn', href: '/admin/inquiries', icon: MessageSquare },
    { name: 'Bài viết (Blog)', href: '/admin/articles', icon: FileText },
    { name: 'KOLs', href: '/admin/kols', icon: Users },
    { name: 'Tuyển dụng', href: '/admin/recruitment', icon: Briefcase }, // Briefcase is already imported
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-72 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
            <div className="p-8">
                <Link href="/admin" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-digital-blue rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        <span className="text-white font-black text-xl">X</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-black text-gray-900 tracking-tight leading-none">Xalo Media</h1>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Admin Panel</p>
                    </div>
                </Link>
            </div>

            <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
                <p className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Quản lý nội dung</p>
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group ${isActive
                                    ? 'bg-blue-50 text-digital-blue'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon className={`w-5 h-5 ${isActive ? 'text-digital-blue' : 'text-gray-400 group-hover:text-gray-600'}`} />
                                <span className={`font-bold text-sm ${isActive ? 'font-black' : ''}`}>{item.name}</span>
                            </div>
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-digital-blue shadow-sm" />}
                            {!isActive && <ChevronRight className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-50 space-y-2">
                <Link
                    href="/admin/settings"
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all group"
                >
                    <Settings className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                    <span className="font-bold text-sm">Cài đặt</span>
                </Link>
                <button
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition-all group"
                >
                    <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-sm">Đăng xuất</span>
                </button>
            </div>
        </aside>
    );
}
