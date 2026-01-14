import Link from 'next/link';
import Container from '@/components/common/Container';

async function getArticles() {
    try {
        const res = await fetch('http://localhost:8081/api/v1/articles?limit=50', {
            cache: 'no-store' // Disable cache for real-time updates
        });
        if (!res.ok) {
            console.error(`[Blog] Fetch failed: ${res.status} ${res.statusText}`);
            return [];
        }
        const data = await res.json();
        const items = Array.isArray(data.data) ? data.data : (data.data?.items || data.data || []);
        console.log(`[Blog] Fetched ${items.length} articles`);
        return items;
    } catch (error) {
        console.error('Failed to fetch Articles:', error);
        return [];
    }
}

export default async function Blog() {
    const articles = await getArticles();
    
    const posts = articles.map((article: any) => ({
        title: article.title,
        category: article.tags?.[0] || 'Tin tức', // Use first tag or default
        date: new Date(article.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        summary: article.excerpt || '',
        image: article.featuredImageUrl || 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop', // Fallback
        slug: article.slug
    }));

    return (
        <div className="py-24 min-h-screen">
            <Container>
                <div className="text-center mb-20 space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">Blog</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Cập nhật những tin tức, xu hướng và kiến thức mới nhất về marketing để tối ưu hóa chiến lược kinh doanh của bạn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {posts.length === 0 ? (
                         <div className="col-span-full text-center py-20 text-gray-500 font-bold">Đang cập nhật bài viết...</div>
                    ) : (
                        posts.map((post: any, idx: number) => (
                        <Link href={`/blog/${post.slug}`} key={idx} className="group flex flex-col h-full bg-white/60 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-grow p-6">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase mb-4 self-start">
                                    {post.category}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-digital-blue transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-3 mb-6">
                                    {post.summary}
                                </p>

                                {/* Meta Section */}
                                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                                        <svg className="w-4 h-4 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {post.date}
                                    </div>
                                    <div className="text-digital-blue font-bold text-sm flex items-center group/link">
                                        Đọc thêm
                                        <svg className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
                </div>
            </Container>
        </div>
    );
}