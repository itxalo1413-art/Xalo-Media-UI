import Link from 'next/link';
import Container from '@/components/common/Container';

// Fetch data directly from backend (SSR)
async function getKols() {
    try {
        console.log('[KOLs] Fetching data...');
        const res = await fetch('http://localhost:8081/api/v1/kol?limit=50', {
            cache: 'no-store'
        });
        if (!res.ok) {
            console.error(`[KOLs] Fetch failed: ${res.status} ${res.statusText}`);
            return [];
        }
        const data = await res.json();
        // Handle response structure (data.data can be array or object with items)
        const items = Array.isArray(data.data) ? data.data : (data.data?.items || []);
        console.log(`[KOLs] Fetched ${items.length} kols`);
        return items;
    } catch (error) {
        console.error('Failed to fetch KOLs:', error);
        return [];
    }
}

export const metadata = {
    title: 'Đội ngũ KOLs | Xa Lộ Media',
    description: 'Khám phá mạng lưới KOLs/KOCs hàng đầu tại Việt Nam hợp tác cùng Xa Lộ Media.',
};

export default async function KolsPage() {
    const kols = await getKols();

    return (
        <div className="flex flex-col gap-16 py-12 bg-gray-50/50">
            {/* Header Section */}
            <section className="pt-20 pb-12 bg-white border-b border-gray-100">
                <Container>
                    <div className="max-w-3xl space-y-4">
                        <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-digital-blue transition-colors mb-4">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Quay lại trang chủ
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            Mạng lưới <span className="text-digital-blue">KOLs & KOCs</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Xa Lộ Media tự hào sở hữu mạng lưới hơn 2000+ KOLs/KOCs đa dạng lĩnh vực, giúp thương hiệu kết nối đúng với khách hàng mục tiêu thông qua những gương mặt có tầm ảnh hưởng.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Filter Stats Section (Visual only for now) */}
            <section>
                <Container>
                    <div className="flex flex-wrap gap-4 mb-8">
                        {['Tất cả', 'Ẩm thực', 'Tech Reviewer', 'Travel', 'Lifestyle', 'Fashion', 'Comedy', 'Dancer'].map((item, idx) => (
                            <button
                                key={idx}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all border ${idx === 0
                                    ? 'bg-digital-blue text-white border-digital-blue shadow-lg shadow-blue-500/20'
                                    : 'bg-white text-gray-600 border-gray-100 hover:border-digital-blue/30 hover:bg-blue-50/30'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {kols.length === 0 ? (
                            <div className="col-span-full text-center py-20 text-gray-500 font-medium">
                                Đang cập nhật danh sách KOLs...
                            </div>
                        ) : (
                            kols.map((kol: any) => (
                                <div key={kol._id || kol.id} className="bg-white rounded-[40px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col items-center hover:shadow-xl hover:shadow-blue-500/10 transition-all text-center group">
                                    <div className="relative mb-6">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                                            <img src={kol.img} alt={kol.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute top-0 -right-4 bg-digital-blue text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                            Verify
                                        </div>
                                        <div className="absolute -bottom-2 -right-4 bg-white/95 backdrop-blur-md text-gray-900 text-xs font-black px-3 py-1 rounded-full shadow-lg border border-gray-100 flex items-center">
                                            <svg className="w-3 h-3 text-yellow-500 mr-1 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            {kol.rating}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black text-gray-900 mb-1">{kol.name}</h3>
                                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-8">{kol.niche}</p>

                                    <div className="grid grid-cols-2 gap-4 w-full mb-8 pt-6 border-t border-gray-50">
                                        <div className="text-left space-y-1">
                                            <div className="flex items-center text-digital-blue">
                                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                                <span className="text-xs font-black text-gray-900">{kol.followers}</span>
                                            </div>
                                            <p className="text-[10px] font-bold text-gray-400 ml-6">Followers</p>
                                        </div>
                                        <div className="text-left space-y-1">
                                            <div className="flex items-center text-digital-blue">
                                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                                <span className="text-xs font-black text-gray-900">{kol.engagement}</span>
                                            </div>
                                            <p className="text-[10px] font-bold text-gray-400 ml-6">Engagement</p>
                                        </div>
                                    </div>

                                    <div className="w-full space-y-4">
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {kol.tags && kol.tags.map((tag: string, tIdx: number) => (
                                                <span key={tIdx} className="px-3 py-1 bg-gray-50 text-gray-400 font-bold text-[10px] rounded-full uppercase border border-gray-100">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link href={`/kols/${kol.slug}`} className="w-full py-3 border border-gray-100 rounded-2xl text-xs font-black text-gray-900 flex items-center justify-center group/btn hover:bg-gray-50 transition-all mt-4">
                                            Xem profile đầy đủ
                                            <svg className="ml-2 w-3 h-3 translate-x-0 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="bg-digital-blue rounded-[32px] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-blue-500/20 overflow-hidden relative">
                        <div className="relative z-10 max-w-2xl space-y-6 text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                Gia nhập mạng lưới KOLs của chúng tôi
                            </h2>
                            <p className="text-blue-50 text-lg md:text-xl leading-relaxed opacity-90">
                                Hãy cùng Xa Lộ Media phát triển thương hiệu cá nhân và kết nối với những nhãn hàng hàng đầu.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-digital-blue font-black rounded-xl shadow-xl hover:bg-gray-50 transition-all text-base min-w-[200px]">
                                    Đăng ký ngay
                                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </Link>
                            </div>
                        </div>

                        {/* Abstract Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full -ml-32 -mb-32" />
                    </div>
                </Container>
            </section>
        </div>
    );
}
