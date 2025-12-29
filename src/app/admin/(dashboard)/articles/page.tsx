'use client';

import { Plus, Search, Edit2, Eye, Trash2, Bot, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';

export default function AdminArticlesPage() {
    // Mock data based on Article model
    const articles = [
        {
            id: '1',
            title: 'Cách tối ưu TikTok cho Doanh nghiệp 2024',
            slug: 'toi-uu-tiktok-doanh-nghiep-2024',
            status: 'published',
            publishedAt: '2025-12-25T08:00:00Z',
            viewCount: 452,
            source: 'manual',
            tags: ['TikTok', 'Marketing']
        },
        {
            id: '2',
            title: 'Tầm quan trọng của Influencer Marketing',
            slug: 'tam-quan-trong-influencer-marketing',
            status: 'published',
            publishedAt: '2025-12-20T10:00:00Z',
            viewCount: 128,
            source: 'ai',
            tags: ['KOL', 'Marketing']
        },
        {
            id: '3',
            title: 'Livestream bán hàng: Bí quyết nghìn đơn',
            slug: 'bi-quyet-livestream-nghin-don',
            status: 'draft',
            publishedAt: null,
            viewCount: 0,
            source: 'manual',
            tags: ['Livestream', 'Sales']
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Bài viết (Blog)</h2>
                    <p className="text-gray-500 mt-1 font-bold">Quản lý nội dung blog và tối ưu hóa SEO.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-purple-50 text-purple-600 font-black rounded-2xl hover:bg-purple-100 transition-all text-sm uppercase tracking-widest border border-purple-100">
                        <Bot className="w-5 h-5" />
                        Tạo bằng AI
                    </button>
                    <Link
                        href="/admin/articles/new"
                        className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-digital-blue text-white font-black rounded-2xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest"
                    >
                        <Plus className="w-5 h-5" />
                        Viết bài mới
                    </Link>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-[32px] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Tìm bài viết..."
                        className="w-full bg-gray-50 border-none rounded-2xl py-3 pl-11 pr-4 text-sm font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <select className="bg-gray-50 border-none rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none">
                        <option>Tất cả trạng thái</option>
                        <option>Đã xuất bản</option>
                        <option>Bản nháp</option>
                    </select>
                </div>
            </div>

            {/* Articles Table */}
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Bài viết</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Tags</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Số lượt xem</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Trạng thái</th>
                                <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {articles.map((article) => (
                                <tr key={article.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-6 max-w-sm">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <p className="font-black text-gray-900 group-hover:text-digital-blue transition-colors">
                                                    {article.title}
                                                </p>
                                                {article.source === 'ai' && (
                                                    <span className="p-1 bg-purple-50 text-purple-600 rounded-lg">
                                                        <Bot className="w-3 h-3" />
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                                                <span className="flex items-center gap-1.5 border-r pr-3">
                                                    <Calendar className="w-3 h-3" />
                                                    {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('vi-VN') : '---'}
                                                </span>
                                                <span className="bg-gray-100 px-2 py-0.5 rounded-lg text-[10px]">
                                                    /{article.slug}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-1.5">
                                            <Tag className="w-3 h-3 text-gray-400" />
                                            <div className="flex gap-1">
                                                {article.tags.map((tag, idx) => (
                                                    <span key={idx} className="text-xs font-bold text-gray-500">
                                                        #{tag}{idx < article.tags.length - 1 ? ',' : ''}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <Eye className="w-4 h-4 text-gray-300" />
                                            <span className="font-black text-gray-900">{article.viewCount}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${article.status === 'published'
                                                ? 'bg-green-100 text-green-600 border-green-200'
                                                : 'bg-orange-100 text-orange-600 border-orange-200'
                                            }`}>
                                            {article.status === 'published' ? 'Đã đăng' : 'Bản nháp'}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2 hover:bg-blue-50 text-gray-400 hover:text-digital-blue rounded-xl transition-all">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all">
                                            <Trash2 className="w-4 h-4" />
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
