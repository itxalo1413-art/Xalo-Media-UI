'use client';

import { useState } from 'react';
import {
    ChevronLeft,
    Save,
    Plus,
    Trash2,
    Layout,
    BarChart3,
    Search,
    Image as ImageIcon,
    Settings,
    Layers
} from 'lucide-react';
import Link from 'next/link';

export default function NewServicePage() {
    const [highlights, setHighlights] = useState([{ text: '', order: 0 }]);

    const addHighlight = () => setHighlights([...highlights, { text: '', order: highlights.length }]);
    const removeHighlight = (index: number) => setHighlights(highlights.filter((_, i) => i !== index));

    return (
        <div className="max-w-5xl mx-auto space-y-8 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/services"
                        className="p-2 hover:bg-white rounded-xl border border-transparent hover:border-gray-100 transition-all text-gray-400 hover:text-gray-900"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Link>
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Thêm dịch vụ mới</h2>
                        <p className="text-gray-500 font-bold text-sm">Điền thông tin chi tiết để thiết lập dịch vụ trên hệ thống.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-6 py-3 bg-white text-gray-900 font-black rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all text-sm uppercase tracking-widest">
                        Hủy bỏ
                    </button>
                    <button className="flex items-center gap-2 px-8 py-3 bg-digital-blue text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest">
                        <Save className="w-5 h-5" />
                        Lưu dịch vụ
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Form Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Basic Info Section */}
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-50 text-digital-blue rounded-xl">
                                <Layout className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Thông tin cơ bản</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Tên dịch vụ *</label>
                                <input
                                    type="text"
                                    placeholder="VD: Influencer Marketing"
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-digital-blue/30 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Đường dẫn (Slug) *</label>
                                <input
                                    type="text"
                                    placeholder="vd: influencer-marketing"
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-digital-blue/30 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Mô tả ngắn</label>
                            <textarea
                                placeholder="Tóm tắt về dịch vụ trong 1-2 câu..."
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-digital-blue/30 outline-none transition-all min-h-[100px] resize-none"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Icon Key (Lucide)</label>
                                <input
                                    type="text"
                                    placeholder="VD: users, trending-up..."
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-digital-blue/30 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Thứ tự hiển thị</label>
                                <input
                                    type="number"
                                    defaultValue={0}
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-digital-blue/30 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Highlights Dynamic Section */}
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                                    <Layers className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 tracking-tight">Điểm nổi bật (Highlights)</h3>
                            </div>
                            <button
                                onClick={addHighlight}
                                className="p-2.5 bg-gray-50 text-gray-500 hover:bg-digital-blue hover:text-white rounded-xl transition-all"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="flex gap-4 items-center animate-in fade-in slide-in-from-top-2">
                                    <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-black text-gray-400">
                                        {index + 1}
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Nhập thông tin nổi bật..."
                                        className="flex-1 bg-gray-50/50 border border-gray-100 rounded-2xl py-3 px-6 font-bold text-gray-900 focus:bg-white focus:border-digital-blue/30 outline-none transition-all"
                                        defaultValue={highlight.text}
                                    />
                                    <button
                                        onClick={() => removeHighlight(index)}
                                        className="p-3 text-gray-300 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Full Content Editor Placeholder */}
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
                                <FileTextIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 tracking-tight">Nội dung chi tiết (HTML)</h3>
                        </div>
                        <textarea
                            placeholder="Nhập nội dung HTML cho trang chi tiết dịch vụ..."
                            className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-6 font-mono text-sm text-gray-700 focus:bg-white focus:border-digital-blue/30 outline-none transition-all min-h-[300px]"
                        />
                    </div>
                </div>

                {/* Sidebar Info Area */}
                <div className="space-y-8">
                    {/* Status & Settings */}
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-6">
                        <h3 className="text-lg font-black text-gray-900 tracking-tight border-b border-gray-50 pb-4">Thiết lập</h3>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <p className="text-sm font-black text-gray-900">Trạng thái</p>
                                <p className="text-xs text-gray-500 font-bold tracking-tight">Kích hoạt hiển thị</p>
                            </div>
                            <div className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-digital-blue"></div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ảnh Cover (URL)</label>
                                <div className="relative group">
                                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="https://..."
                                        className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-3 pl-11 pr-4 text-xs font-bold text-gray-900 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 text-green-600 rounded-xl">
                                <BarChart3 className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 tracking-tight">Số liệu thống kê</h3>
                        </div>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Giá trị (vd: 10M+)"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-3 px-4 text-sm font-bold text-gray-900 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Nhãn (vd: Reach)"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-3 px-4 text-sm font-bold text-gray-900 outline-none"
                            />
                        </div>
                    </div>

                    {/* SEO Settings */}
                    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-50 text-gray-500 rounded-xl">
                                <Search className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 tracking-tight">Cấu hình SEO</h3>
                        </div>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Meta Title"
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 outline-none"
                            />
                            <textarea
                                placeholder="Meta Description"
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 outline-none min-h-[80px] resize-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FileTextIcon({ className }: { className?: string }) {
    return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    );
}
