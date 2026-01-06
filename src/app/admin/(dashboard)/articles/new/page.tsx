'use client';

import { useState } from 'react';
import {
    ChevronLeft,
    Save,
    Bot,
    Tag as TagIcon,
    Search,
    Image as ImageIcon,
    FileText,
    TrendingUp,
    Sparkles,
    Settings
} from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const CKEditor = dynamic(() => import('@/components/admin/CKEditor'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[400px] bg-gray-50 rounded-3xl animate-pulse flex items-center justify-center text-gray-400 font-bold">
            Đang tải trình soạn thảo...
        </div>
    )
});

export default function NewArticlePage() {
    const [tags, setTags] = useState<string[]>(['TikTok', 'Marketing']);
    const [currentTag, setCurrentTag] = useState('');
    const [content, setContent] = useState('');
    const [excerpt, setExcerpt] = useState('');

    const addTag = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && currentTag.trim()) {
            if (!tags.includes(currentTag.trim())) {
                setTags([...tags, currentTag.trim()]);
            }
            setCurrentTag('');
            e.preventDefault();
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/articles"
                        className="p-2 hover:bg-white rounded-xl border border-transparent hover:border-gray-100 transition-all text-gray-400 hover:text-gray-900"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Link>
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Viết bài mới</h2>
                        <p className="text-gray-500 font-bold text-sm">Sáng tạo nội dung chất lượng cao cho blog Xalo Media.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => toast.info('Đã lưu bản nháp thành công!')}
                        className="px-6 py-3 bg-white text-gray-900 font-black rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all text-sm uppercase tracking-widest"
                    >
                        Lưu nháp
                    </button>
                    <button
                        onClick={() => toast.success('Đã xuất bản bài viết thành công!')}
                        className="flex items-center gap-2 px-8 py-3 bg-digital-blue text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest"
                    >
                        <Save className="w-5 h-5" />
                        Xuất bản bài viết
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Content Area */}
                <div className="lg:col-span-3 space-y-8">
                    {/* Editor Area */}
                    <div className="bg-white p-10 rounded-[20px] border border-gray-100 shadow-sm space-y-8">
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Tiêu đề bài viết..."
                                className="w-full text-4xl font-black text-gray-900 placeholder:text-gray-200 outline-none border-none bg-transparent"
                            />
                            <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 pb-6">
                                <span className="flex items-center gap-2">
                                    <ImageIcon className="w-4 h-4" />
                                    URL: xalo.media/blog/[slug]
                                </span>
                            </div>
                        </div>

                        {/* Rich Text Editor */}
                        <div className="min-h-[500px] space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Tóm tắt (Excerpt)</label>
                                <textarea
                                    value={excerpt}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    placeholder="Đoạn văn ngắn dẫn dắt cho bài viết..."
                                    className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-4 px-6 font-bold text-gray-900 focus:bg-white focus:border-digital-blue/30 outline-none transition-all min-h-[100px] resize-none"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Nội dung bài viết</label>
                                <CKEditor
                                    value={content}
                                    onChange={(data) => setContent(data)}
                                    placeholder="Bắt đầu viết nội dung ở đây..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* AI Generation Section (Article Specific) */}
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-10 rounded-[20px] border border-blue-100/50 shadow-sm space-y-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-blue-200 opacity-20 group-hover:scale-110 transition-transform">
                            <Bot className="w-32 h-32" />
                        </div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white text-purple-600 rounded-xl shadow-sm">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 tracking-tight">AI Content Meta</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">AI Prompt</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập prompt đã dùng..."
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Chủ đề (Topic)</label>
                                    <input
                                        type="text"
                                        placeholder="VD: Social Media Strategy"
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Giọng văn (Tone)</label>
                                    <input
                                        type="text"
                                        placeholder="VD: Professional"
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Độ dài</label>
                                    <input
                                        type="text"
                                        placeholder="VD: 1500 words"
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Nhiệt độ (Temp)</label>
                                    <input
                                        type="number"
                                        defaultValue={0.7}
                                        step={0.1}
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Publish Settings */}
                    <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm space-y-6">
                        <h3 className="text-lg font-black text-gray-900 tracking-tight border-b border-gray-50 pb-4">Cài đặt</h3>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Trạng thái</label>
                            <select className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-3 px-4 text-sm font-black text-gray-900 outline-none focus:ring-4 focus:ring-blue-500/5 transition-all">
                                <option value="draft">Bản nháp</option>
                                <option value="published">Xuất bản</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Nguồn bài viết</label>
                            <div className="flex bg-gray-50 p-1 rounded-2xl">
                                <button className="flex-1 py-2 text-[10px] font-black uppercase tracking-widest bg-white rounded-xl shadow-sm border border-gray-100 text-gray-900">Manual</button>
                                <button className="flex-1 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors">AI Gen</button>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 text-digital-blue rounded-xl">
                                <ImageIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 tracking-tight">Ảnh đại diện</h3>
                        </div>
                        <div className="aspect-video bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-digital-blue/30 transition-all">
                            <ImageIcon className="w-8 h-8 text-gray-300 group-hover:text-digital-blue transition-colors" />
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Upload or Paste URL</p>
                        </div>
                    </div>

                    {/* Tags Section */}
                    <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 text-green-600 rounded-xl">
                                <TagIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 tracking-tight">Thẻ (Tags)</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {tags.map(tag => (
                                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-lg text-[10px] font-black text-gray-500 uppercase tracking-widest border border-gray-100 group">
                                        {tag}
                                        <button onClick={() => removeTag(tag)} className="hover:text-red-500 transition-colors"><Settings className="w-3 h-3 rotate-45" /></button>
                                    </span>
                                ))}
                            </div>
                            <div className="relative">
                                <TagIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-300" />
                                <input
                                    type="text"
                                    value={currentTag}
                                    onChange={(e) => setCurrentTag(e.target.value)}
                                    onKeyDown={addTag}
                                    placeholder="Thêm thẻ (Enter)..."
                                    className="w-full bg-gray-50 border border-gray-50 rounded-xl py-3 pl-9 pr-4 text-xs font-bold text-gray-900 outline-none focus:bg-white transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SEO Quick Settings */}
                    <div className="bg-white p-8 rounded-[20px] border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-50 text-gray-500 rounded-xl">
                                <Search className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 tracking-tight">SEO Config</h3>
                        </div>
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
    );
}
