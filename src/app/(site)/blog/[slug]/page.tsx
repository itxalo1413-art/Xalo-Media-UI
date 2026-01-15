import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/common/Container';
import { env } from '@/lib/config';

// Define Interface
interface Article {
    _id: string;
    title: string;
    slug: string;
    contentHtml: string;
    excerpt: string;
    tags: string[];
    featuredImageUrl?: string;
    publishedAt: string;
    viewCount: number;
    seo?: {
        metaTitle: string;
        metaDescription: string;
        ogImageUrl: string;
    };
}

async function getArticle(slug: string): Promise<Article | null> {
    try {
        const res = await fetch(`${env.API_URL}/api/v1/articles/${slug}`, {
            cache: 'no-store'
        });
        
        if (!res.ok) return null;
        
        const data = await res.json();
        const article = data.data.article || null;
        if (article) {
             console.log(`[BlogDetail] Fetched: ${article.title}, Content Length: ${article.contentHtml?.length}`);
        } else {
             console.log(`[BlogDetail] Article not found for slug: ${slug}`);
        }
        return article;
    } catch (error) {
        console.error('Failed to fetch article:', error);
        return null;
    }
}

// Generate Metadata
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const article = await getArticle(params.slug);
    if (!article) return { title: 'Bài viết không tồn tại' };

    return {
        title: article.seo?.metaTitle || article.title,
        description: article.seo?.metaDescription || article.excerpt,
        openGraph: {
            images: [article.seo?.ogImageUrl || article.featuredImageUrl || ''],
        },
    };
}

export default async function ArticleDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const article = await getArticle(params.slug);

    if (!article) {
        notFound();
    }

    // Format date
    const date = new Date(article.publishedAt).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="py-24 min-h-screen bg-gray-50/50">
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": article.title,
                        "image": [article.featuredImageUrl],
                        "datePublished": article.publishedAt,
                        "dateModified": article.publishedAt, // If updatedAt is available use it
                        "author": [{
                            "@type": "Organization",
                            "name": "Xa Lộ Media",
                            "url": "https://xalomedia.vn"
                        }]
                    })
                }}
            />

            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb / Back */}
                    <Link href="/blog" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-digital-blue transition-colors mb-8 group">
                        <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Quay lại trang Blog
                    </Link>

                    <article className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden">
                         {/* Header */}
                        <header className="mb-10 text-center">
                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                {article.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-blue-50 text-digital-blue text-xs font-black uppercase tracking-widest rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                                {article.title}
                            </h1>
                            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm font-medium">
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    {date}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    {article.viewCount} lượt xem
                                </span>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {article.featuredImageUrl && (
                            <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
                                <img 
                                    src={article.featuredImageUrl} 
                                    alt={article.title} 
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div 
                            className="prose prose-lg prose-blue max-w-none prose-headings:font-black prose-p:text-gray-900 prose-li:text-gray-900 prose-strong:text-gray-900 text-gray-900 prose-img:rounded-2xl"
                            dangerouslySetInnerHTML={{ __html: article.contentHtml || '' }}
                        />
                    </article>
                </div>
            </Container>
        </div>
    );
}
