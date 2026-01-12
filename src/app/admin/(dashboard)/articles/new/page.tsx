'use client';

import { useState, useEffect } from 'react';
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
    Settings,
    Trash2
} from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/lib/auth";
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
    const [loading, setLoading] = useState(false);
    const [generating, setGenerating] = useState(false);

    // Article Data
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [currentTag, setCurrentTag] = useState('');
    const [featuredImageUrl, setFeaturedImageUrl] = useState('');
    const [status, setStatus] = useState('draft');
    const [source, setSource] = useState('manual');

    // SEO Data
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');

    // AI Data
    const [aiTopic, setAiTopic] = useState('');
    const [aiKeywords, setAiKeywords] = useState('');
    const [aiTone, setAiTone] = useState('Professional');
    const [aiLength, setAiLength] = useState('Medium');
    const [aiTemp, setAiTemp] = useState(0.7);

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

    const handleSave = async (saveStatus: string) => {
        if (!title) return toast.error('Vui lòng nhập tiêu đề');

        setLoading(true);
        try {
            const payload = {
                title,
                slug,
                excerpt,
                contentHtml: content,
                tags,
                featuredImageUrl,
                status: saveStatus,
                source,
                seo: {
                    metaTitle,
                    metaDescription,
                    ogImageUrl: featuredImageUrl
                }
            };

            const token = getAccessToken();
            const res = await fetch("/api/v1/admin/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(saveStatus === 'published' ? 'Đã xuất bản bài viết!' : 'Đã lưu bản nháp!');
                // Redirect or reset? For now just stay.
                window.location.href = '/admin/articles';
            } else {
                toast.error(data.error?.message || 'Có lỗi xảy ra');
            }
        } catch (error) {
            toast.error('Lỗi kết nối');
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateAI = async () => {
        if (!aiTopic) return toast.error('Vui lòng nhập chủ đề');

        setGenerating(true);
        try {
            const payload = {
                topic: aiTopic,
                keywords: aiKeywords.split(',').map(k => k.trim()).filter(k => k),
                tags: tags,
                tone: aiTone,
                length: aiLength,
                language: 'vi',
                createDraft: false // Just generate data for form
            };

            const token = getAccessToken();
            const res = await fetch("/api/v1/ai/articles/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (res.ok && data.data.draft) {
                const draft = data.data.draft;
                setTitle(draft.title);
                setSlug(draft.slug);
                setExcerpt(draft.excerpt);
                setContent(draft.contentHtml);
                setTags(draft.tags || []);
                setMetaTitle(draft.seo?.metaTitle || '');
                setMetaDescription(draft.seo?.metaDescription || '');
                setSource('ai');
                
                toast.success('Đã tạo nội dung từ AI!');
            } else {
                toast.error(data.error?.message || 'Lỗi tạo bài viết');
            }
        } catch (error) {
            toast.error('Lỗi kết nối AI');
        } finally {
            setGenerating(false);
        }
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
                        onClick={() => handleSave('draft')}
                        disabled={loading}
                        className="px-6 py-3 bg-white text-gray-900 font-black rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all text-sm uppercase tracking-widest disabled:opacity-50"
                    >
                        {loading ? 'Đang lưu...' : 'Lưu nháp'}
                    </button>
                    <button
                        onClick={() => handleSave('published')}
                        disabled={loading}
                        className="flex items-center gap-2 px-8 py-3 bg-digital-blue text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest disabled:opacity-50"
                    >
                        <Save className="w-5 h-5" />
                        {loading ? 'Đang xử lý...' : 'Xuất bản bài viết'}
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
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
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
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">AI Prompt / Chủ đề</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập chủ đề muốn viết..."
                                        value={aiTopic}
                                        onChange={(e) => setAiTopic(e.target.value)}
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Keywords (phân cách dấu phẩy)</label>
                                    <input
                                        type="text"
                                        placeholder="VD: marketing, social, tiktok"
                                        value={aiKeywords}
                                        onChange={(e) => setAiKeywords(e.target.value)}
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
                                        value={aiTone}
                                        onChange={(e) => setAiTone(e.target.value)}
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Độ dài</label>
                                    <input
                                        type="text"
                                        placeholder="VD: Medium, Long"
                                        value={aiLength}
                                        onChange={(e) => setAiLength(e.target.value)}
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Nhiệt độ (Temp)</label>
                                    <input
                                        type="number"
                                        value={aiTemp}
                                        onChange={(e) => setAiTemp(parseFloat(e.target.value))}
                                        step={0.1}
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3 px-6 text-sm font-bold text-gray-900 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    onClick={handleGenerateAI}
                                    disabled={generating}
                                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black rounded-2xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all uppercase tracking-widest disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                                >
                                    {generating ? (
                                        <>
                                            <Sparkles className="w-5 h-5 animate-spin" />
                                            Đang sáng tạo nội dung...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="w-5 h-5" />
                                            Tạo nội dung bằng AI ngay
                                        </>
                                    )}
                                </button>
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
                            <select 
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl py-3 px-4 text-sm font-black text-gray-900 outline-none focus:ring-4 focus:ring-blue-500/5 transition-all"
                            >
                                <option value="draft">Bản nháp</option>
                                <option value="published">Xuất bản</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Nguồn bài viết</label>
                            <div className="flex bg-gray-50 p-1 rounded-2xl">
                                <button 
                                    onClick={() => setSource('manual')}
                                    className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${source === 'manual' ? 'bg-white shadow-sm border border-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    Manual
                                </button>
                                <button 
                                    onClick={() => setSource('ai')}
                                    className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${source === 'ai' ? 'bg-white shadow-sm border border-gray-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    AI Gen
                                </button>
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
                        {featuredImageUrl ? (
                            <div className="relative aspect-video rounded-2xl overflow-hidden group">
                                <img src={featuredImageUrl} alt="Featured" className="w-full h-full object-cover" />
                                <button 
                                    onClick={() => setFeaturedImageUrl('')}
                                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="aspect-video bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-digital-blue/30 transition-all p-4">
                                <input 
                                    type="text" 
                                    placeholder="Paste Image URL here..."
                                    className="w-full bg-transparent text-center text-xs font-bold outline-none"
                                    onPaste={(e) => {
                                        const text = e.clipboardData.getData('text');
                                        if (text) setFeaturedImageUrl(text);
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            setFeaturedImageUrl(e.currentTarget.value);
                                        }
                                    }}
                                />
                                <div className="pointer-events-none flex flex-col items-center gap-2">
                                    <ImageIcon className="w-8 h-8 text-gray-300 group-hover:text-digital-blue transition-colors" />
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Paste URL & Enter</p>
                                </div>
                            </div>
                        )}
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
                            value={metaTitle}
                            onChange={(e) => setMetaTitle(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 outline-none"
                        />
                        <textarea
                            placeholder="Meta Description"
                            value={metaDescription}
                            onChange={(e) => setMetaDescription(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-xs font-bold text-gray-900 outline-none min-h-[80px] resize-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
