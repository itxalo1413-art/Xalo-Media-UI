import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/common/Container';
import { KOLS } from '@/data/kols';
import { Users, Heart, Eye, CheckCircle, Tv, Tag, Star, ChevronLeft } from 'lucide-react';

export async function generateStaticParams() {
    return KOLS.map((kol) => ({
        slug: kol.slug,
    }));
}

export default async function KolDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const kol = KOLS.find((k) => k.slug === slug);

    if (!kol) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50/50 pt-24 pb-16">
            <Container>
                {/* Back Button */}
                <Link
                    href="/kols"
                    className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-digital-blue transition-colors mb-8 group"
                >
                    <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                    Quay lại danh sách
                </Link>

                {/* Main Profile Card */}
                <div className="bg-white/60 backdrop-blur-xl rounded-[40px] shadow-2xl shadow-gray-200/50 overflow-hidden border border-white/40">
                    <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* Left Column: Avatar & Basic Info */}
                        <div className="md:col-span-1 flex flex-col items-center text-center">
                            <div className="relative mb-8">
                                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                    <img
                                        src={kol.img}
                                        alt={kol.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute top-4 -right-2 bg-digital-blue text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xl">
                                    Verified
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
                                {kol.name}
                            </h1>
                            <p className="text-xl font-bold text-digital-blue mb-6 tracking-wide">
                                {kol.niche}
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500 text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-500/20">
                                    Nổi bật
                                </div>
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-600 text-sm font-black border border-yellow-200 shadow-sm">
                                    <Star className="w-4 h-4 mr-1.5 fill-yellow-500 text-yellow-500" />
                                    {kol.rating} / 5.0
                                </div>
                            </div>

                            <div className="mt-12 w-full pt-8 border-t border-gray-100 flex flex-col gap-4">
                                <button className="w-full py-4 bg-digital-blue text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest">
                                    Liên hệ hợp tác
                                </button>
                                <button className="w-full py-4 bg-white text-gray-900 border border-gray-100 font-black rounded-2xl shadow-sm hover:bg-gray-50 transition-all text-sm uppercase tracking-widest">
                                    Tải Media Kit
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Details & Stats */}
                        <div className="md:col-span-2 space-y-12">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight flex items-center">
                                    <span className="w-8 h-1 bg-digital-blue rounded-full mr-3"></span>
                                    Giới thiệu
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    {kol.description}
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight flex items-center">
                                    <span className="w-8 h-1 bg-digital-blue rounded-full mr-3"></span>
                                    Chỉ số nổi bật
                                </h2>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                    {[
                                        { icon: Users, label: 'Followers', value: kol.followers },
                                        { icon: Heart, label: 'Engagement', value: kol.engagement },
                                        { icon: Eye, label: 'Avg. Views', value: kol.views },
                                        { icon: CheckCircle, label: 'Success Rate', value: kol.success },
                                    ].map((stat, sIdx) => (
                                        <div key={sIdx} className="p-6 bg-white/40 rounded-[32px] border border-white/60 shadow-sm hover:shadow-md transition-all group text-center">
                                            <stat.icon className="w-8 h-8 text-digital-blue mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                            <p className="text-2xl font-black text-gray-900 tracking-tight">{stat.value}</p>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Platforms & Tags Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-gray-100">
                                <div>
                                    <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center tracking-tight">
                                        <Tv className="w-6 h-6 mr-2 text-digital-blue" />
                                        Nền tảng
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {kol.platforms.map((platform, pIdx) => (
                                            <span
                                                key={pIdx}
                                                className="px-4 py-2 bg-blue-50/50 text-digital-blue text-xs font-black rounded-xl border border-blue-100 uppercase tracking-wider"
                                            >
                                                {platform}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center tracking-tight">
                                        <Tag className="w-6 h-6 mr-2 text-digital-blue" />
                                        Lĩnh vực
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {kol.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-4 py-2 bg-gray-100 text-gray-500 text-xs font-black rounded-xl border border-gray-200 uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Suggested KOLs Section */}
            <section className="mt-24">
                <Container>
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">KOLs liên quan</h2>
                        <Link href="/kols" className="text-digital-blue font-black text-sm uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center">
                            Xem tất cả
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {KOLS.filter(k => k.slug !== kol.slug).slice(0, 4).map((relatedKol, idx) => (
                            <Link
                                key={idx}
                                href={`/kols/${relatedKol.slug}`}
                                className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-xl transition-all text-center group"
                            >
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white shadow-lg group-hover:scale-105 transition-transform">
                                    <img src={relatedKol.img} alt={relatedKol.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-1">{relatedKol.name}</h3>
                                <p className="text-digital-blue font-bold text-[10px] uppercase tracking-widest">{relatedKol.niche}</p>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
