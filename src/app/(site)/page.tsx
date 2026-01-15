import Link from 'next/link';
import Container from '@/components/common/Container';
import FAQ from '@/components/home/FAQ';
import ContactSection from '@/components/home/ContactSection';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import Partners from '@/components/home/Partners';

// Define Interface
interface KOL {
  _id: string;
  slug: string;
  name: string;
  img: string;
  niche: string;
  rating: number;
  followers: string;
  engagement: string;
  views: string;
  success: string;
  platforms: string[];
  tags: string[];
}

import { env } from '@/lib/config';

async function getFeaturedKols() {
  try {
    const res = await fetch(`${env.API_URL}/api/v1/kol?limit=4`, {
      cache: 'no-store'
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.data) ? data.data : (data.data?.items || []);
  } catch (error) {
    console.error('Failed to fetch KOLs:', error);
    return [];
  }
}

export default async function Home() {
  const kols = await getFeaturedKols();

  return (
    <div className="flex flex-col gap-0 pb-20">
      <Hero />
      <Stats />
      <Services />

      {/* KOL Team Section */}
      <section className="py-24 bg-blue-50/30">
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Đội ngũ KOLs hàng đầu
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Hợp tác với những người có ảnh hưởng hàng đầu để đưa thương hiệu của bạn đến gần hơn với khách hàng mục tiêu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {kols.map((kol: KOL, idx: number) => (
              <div key={idx} className="bg-white rounded-[40px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col items-center hover:shadow-xl hover:shadow-blue-500/5 transition-all text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-110">
                    <img src={kol.img} alt={kol.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-0 -right-4 bg-digital-blue text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Nổi bật
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
                  <div className="text-left space-y-1">
                    <div className="flex items-center text-digital-blue">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      <span className="text-xs font-black text-gray-900">{kol.views}</span>
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 ml-6">Views</p>
                  </div>
                  <div className="text-left space-y-1">
                    <div className="flex items-center text-digital-blue">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-xs font-black text-gray-900">{kol.success}</span>
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 ml-6">Success Rate</p>
                  </div>
                </div>

                <div className="w-full space-y-4">
                  <div className="flex items-center justify-center gap-4 text-gray-400">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Platforms:</span>
                    <div className="flex gap-2">
                       {kol.platforms.map((p, pIdx) => (
                        <div key={pIdx} className="w-6 h-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 cursor-pointer">
                          {p === 'facebook' && <svg className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>}
                          {p === 'youtube' && <svg className="w-full h-full text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-3.897 3.82-.384 10.12 1.402 2.515 2.513 4.218 4.218 4.218.455 0 .81-.36.81-.82 0-.306-.168-.57-.423-.7l-2.023-1.02a.81.81 0 0 1-.41-.703v-4.66a.81.81 0 0 1 .81-.81h1.61a.81.81 0 0 1 .81.81v4.66c0 .324-.194.62-.493.743l-2.12 1.07c-1.282.646-1.5 2.12-.416 3.104 2.106 1.906 6.146 1.906 8.252 0 1.083-.984.866-2.458-.417-3.104l-2.12-1.07a.81.81 0 0 1-.493-.743v-4.66a.81.81 0 0 1 .81-.81h1.61c.447 0 .81.363.81.81v4.66c0 .327-.197.624-.498.745l-2.016 1.016a.81.81 0 0 1-.41.71v3.076l.163.163c.53.53 1.39.53 1.92 0 2.227-2.227 4.093-6.136 4.093-10.12 0-3.376-.005-4.102-.385-4.364z" /></svg>}
                          {p === 'instagram' && <svg className="w-full h-full text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.57 1.644-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>}
                          {p === 'tiktok' && <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-.99 0-1.49.18-2.3 1.6-4.47 3.65-5.61 1.33-.76 2.9-.93 4.4-.7v4.07c-.43-.07-.88-.07-1.31-.04-.54.04-1.09.2-1.58.44-.66.33-1.14.93-1.39 1.58-.29.77-.25 1.65.12 2.37.52.89 1.54 1.46 2.56 1.35.91-.04 1.75-.61 2.21-1.41.4-.73.49-1.58.47-2.4-.01-4.52.01-9.04-.01-13.56z" /></svg>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {kol.tags.slice(0, 3).map((tag, tIdx) => (
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
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/kols" className="px-10 py-5 bg-digital-blue text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest inline-flex items-center justify-center mx-auto">
              Xem tất cả KOLs
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* KOL Network Banner */}
      <section className="py-12">
        <Container>
          <div className="bg-digital-blue rounded-[32px] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-blue-500/20 overflow-hidden relative">
            <div className="relative z-10 max-w-2xl space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                Mạng lưới KOLs lớn nhất Việt Nam
              </h2>
              <p className="text-blue-50 text-lg md:text-xl leading-relaxed opacity-90">
                Với hơn 2000 KOLs/KOCs được verify kỹ lưỡng, chúng tôi có thể kết nối thương hiệu của bạn với đúng target audience trên mọi nền tảng.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-4xl md:text-6xl font-black tracking-tighter mb-2">2000+</p>
                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest opacity-80">Verified KOLs</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-6xl font-black tracking-tighter mb-2">50M+</p>
                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest opacity-80">Total Reach</p>
              </div>
            </div>

            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full -ml-32 -mb-32" />
          </div>
        </Container>
      </section>

      <Partners />
      <FAQ />
      <ContactSection />
    </div>
  );
}
