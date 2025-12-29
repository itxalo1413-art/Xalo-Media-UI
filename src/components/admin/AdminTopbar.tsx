'use client';

import { Search, Bell, User, Menu } from 'lucide-react';

export default function AdminTopbar() {
    return (
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-30">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-md group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-digital-blue transition-colors" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm nhanh..."
                        className="w-full bg-gray-50 border-none rounded-2xl py-2.5 pl-11 pr-4 text-sm font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                </button>

                <div className="h-8 w-px bg-gray-100" />

                <button className="flex items-center gap-3 pl-2 group">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-black text-gray-900 group-hover:text-digital-blue transition-colors">Admin User</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Quản trị viên</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border border-gray-100 shadow-sm group-hover:shadow-md transition-all">
                        <User className="w-5 h-5 text-gray-500" />
                    </div>
                </button>
            </div>
        </header>
    );
}
