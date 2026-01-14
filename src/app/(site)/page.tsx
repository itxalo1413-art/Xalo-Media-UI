import Link from 'next/link';
import Container from '@/components/common/Container';
import FAQ from '@/components/home/FAQ';
import ContactSection from '@/components/home/ContactSection';

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

async function getFeaturedKols() {
  try {
    const res = await fetch('http://localhost:8081/api/v1/kol?limit=4', {
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
    <div className="flex flex-col gap-24 pb-20">
      {/* ... previous content ... */}
      {/* NOTE: I need to verify if the rest of the component structure remains intact. 
          Since I cannot replace the whole file easily due to size restrictions in context sometimes,
          I will target the specific import block first to change it, 
          then I will target the usage block.
          Wait, I can replace the logic at the top and the usage in the middle.
       */}

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20 pb-10">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-digital-blue/10 text-digital-blue text-sm font-bold tracking-tight mb-4 border border-digital-blue/10">
                #1 Digital Marketing Agency in Vietnam
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Deliver what you need,<br />
                <span className="text-digital-blue">Achieve what you want</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl lg:max-w-2xl leading-relaxed">
                Xa Lộ Media là đối tác tin cậy cung cấp các giải pháp marketing toàn diện, giúp thương hiệu của bạn tiếp cận đúng đối tượng khách hàng và đạt được mục tiêu kinh doanh.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-digital-blue text-white font-black rounded-xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all text-base min-w-[200px]">
                  Bắt đầu ngay hôm nay
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <Link href="/case-studies" className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 bg-white text-gray-900 font-black rounded-xl hover:bg-gray-50 transition-all text-base min-w-[160px] shadow-sm">
                  Xem dự án
                </Link>
              </div>
            </div>

            <div className="relative mt-12">
              <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-[40px] bg-gray-100 overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                  alt="Hero Banner"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Floating Cards - Adjusted for responsiveness */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-40 md:w-48 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-white/50 animate-float hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="p-2 md:p-3 bg-yellow-500/10 rounded-full">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div>
                    <p className="font-black text-lg md:text-xl text-gray-900">+250%</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">ROI Average</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-44 md:w-52 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-white/50 animate-float-delayed hidden sm:block">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <div>
                    <p className="font-black text-lg md:text-xl text-gray-900">4.9/5</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Client Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-10">
        <Container>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                number: "2000+",
                label: "KOLs/KOCs Network",
                bgColor: "bg-blue-50/50"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                number: "100+",
                label: "Talents",
                bgColor: "bg-blue-50/50"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                number: "500+",
                label: "Campaigns",
                bgColor: "bg-blue-50/50"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                number: "98%",
                label: "Success Rate",
                bgColor: "bg-blue-50/50"
              }
            ].map((stat, idx) => (
              <div key={idx} className={`p-6 md:p-8 lg:p-10 rounded-[32px] ${stat.bgColor} border border-blue-100/20 text-center space-y-4 hover:shadow-xl hover:shadow-blue-500/5 transition-all group`}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">{stat.number}</p>
                  <p className="text-sm font-bold text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Marketing Solutions Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20 space-y-4">
            <span className="inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-warning/10 text-warning px-3 py-1 rounded-full text-sm font-medium mb-4">Dịch vụ chuyên nghiệp</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Giải pháp <span className="text-digital-blue">Marketing</span> toàn diện
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Chúng tôi cung cấp các dịch vụ marketing chuyên nghiệp, giúp doanh nghiệp của bạn phát triển mạnh mẽ trên các nền tảng số.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Influencer Marketing",
                desc: "Kết nối với 2000+ KOLs/KOCs chất lượng cao trên mọi nền tảng",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                features: ["2000+ KOLs/KOCs verified", "Multi-platform campaigns", "Performance tracking", "Campaign optimization"],
                stats: "2000+ Active KOLs"
              },
              {
                title: "TikTok Management",
                desc: "Quản lý TikTok & TikTok Shop toàn diện từ content đến bán hàng",
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                features: ["Content strategy", "Video production", "Shop optimization", "Live streaming"],
                stats: "10M+ Total Views"
              },
              {
                title: "Livestream Services",
                desc: "Studio chuyên nghiệp với host tài năng và thiết bị hiện đại",
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                features: ["Professional studio", "Talented hosts", "HD equipment", "Real-time analytics"],
                stats: "24/7 Studio Ready"
              },
              {
                title: "Talent Booking",
                desc: "100+ MC/Host/Model/PG/PB chuyên nghiệp cho mọi sự kiện",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                features: ["100+ talents", "Event expertise", "Professional portfolio", "Flexible booking"],
                stats: "100+ Talents"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-digital-blue group-hover:text-white transition-colors">
                  <svg className="w-7 h-7 text-digital-blue group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">{service.desc}</p>

                <ul className="space-y-4 mb-10 border-t border-gray-50 pt-8 flex-1">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm font-bold text-gray-600">
                      <svg className="w-4 h-4 text-orange-400 mr-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-gray-50 text-center">
                  <p className="text-3xl font-black text-gray-900 tracking-tighter mb-4">{service.stats.split(' ')[0]}<span className="text-lg text-gray-400 font-bold ml-1">{service.stats.split(' ').slice(1).join(' ')}</span></p>
                  <Link href="/services" className="inline-flex items-center text-digital-blue font-black text-sm uppercase tracking-widest hover:translate-x-1 transition-transform">
                    Tìm hiểu thêm
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
              <div key={idx} className="bg-white rounded-[40px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col items-center hover:shadow-xl hover:shadow-blue-500/5 transition-all text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
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

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Đối tác đã hợp tác</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Chúng tôi tự hào đã đồng hành cùng nhiều thương hiệu lớn và nhỏ, giúp họ đạt được thành công trong các chiến dịch marketing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center opacity-70">
            {[
              { name: "VNG", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fnarcrmfhjtzhkasmgfkx.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fsite_assets%2Fpublic%2F0.024294494688215096.png%3Fwidth%3D200%26height%3D100%26resize%3Dcontain&w=3840&q=75" },
              { name: "Vinamilk", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fnarcrmfhjtzhkasmgfkx.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fsite_assets%2Fpublic%2F0.6822988743488436.png%3Fwidth%3D200%26height%3D100%26resize%3Dcontain&w=3840&q=75" },
              { name: "Viettel", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fnarcrmfhjtzhkasmgfkx.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fsite_assets%2F1756827894495.blob%3Fwidth%3D200%26height%3D100%26resize%3Dcontain&w=3840&q=75" },
              { name: "FPT", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F11%2FFPT_logo_2010.svg%2F1200px-FPT_logo_2010.svg.png&w=3840&q=75" },
              { name: "Shopee", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F0e%2FShopee_logo.svg%2F1200px-Shopee_logo.svg.png&w=3840&q=75" },
              { name: "Tiki", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fnarcrmfhjtzhkasmgfkx.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fsite_assets%2F1756827914088.blob%3Fwidth%3D200%26height%3D100%26resize%3Dcontain&w=3840&q=75" },
              { name: "Momo", url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjoAAAI6CAMAAAAZlhLyAAAAPFBMVEVHcEypC2ulAGSlAGSlAGSlAGSlAGT///+kAGKvHHXqwtrx2OjuzeHirc3KaaT89vrWi7nCUZW5N4X36PGiXuy1AAAABnRSTlMA/mnVM6qWpok5AAAdcElEQVR42uyd6ZLcKgyFQy82Xlhsv/+7Xts9mTtJphcLCUTP0a9UpYr2wMfREdjw61fWuFxOp9P1ej6fjWkQDGHM2pnX69qtl8uv94wVmg2Z38BYDDpr2J2hFaH3AmhVmusZIiNPz02GzqsEXd4Cm40aaEzmWAWoanwuEJuiLqhWfDZuMHzF1ac6ei6nLUshTamwz+d66Fn1BmlKV9ShPVuegtyoE581c6lPVBgmtb5HsfRcYIx1S4+5XpRmKjicGlyPPnDO2FyoJW+pAwcBeAAO4MnlcTAU1YU5XxRUVTDHdcJTuNq6nABOvfCUXOc5YeG45mWecpbnApNT/zLPBXUVoppaa5Uc5Kp3yFo2t/BAciA8cDmIjI4HkgPhIZKDtZw3XOOBP0YQ7bJ80rogWb1r0rrA5iA0Ji3YnLeOE2wOQlmVjtUcsAODjMhplkEO2AE5iJzsoCj/MWF5dyVQlGOBB+QgXshZJ5CDKKs7cMjwyiAHkZMdkPND66wLyEGU0R3sW/3cSNzPAjk/mZ2kshz995P9zgkLOghinGCREbQwF5CDyFpmwSIjaFYZFhlBszuwyIityjq+EwqjgyDaHRgdBM3uwOggaHYH6QpBTFlIVwhaykK6QvxRZp2QrhDCKQvpCkFLWUhXCFqVhXSFIKYsiA6CJjsX7F0hvimyXnh1Bx4ZQXPKEB3EnXgmO/DICJrswCMjiE4ZooO4X6BDdBACsgPRQdBkB6KDIMoORAdBkx2IDuJx3P08AgvJiCdxxUIyghgXiA6CUXbwng7iBaN8gUlG8NXnEB3E87BniA6CTXZgkhE0owyTjCAaZeQrxItu5wSTjCDKDlaSEbT469sI5CsEscZCvkLQMhbyFYKYsZCvEMSMhfVAxIG4alwPtH+FruZK9IDCx/56Q99JR481xnTdPE2T32Ka5rnr9v+htbcm5W6eP1vbmjOm0UvQrQu6/ZlvD/3x1N3tqRU99klLvlp7ZR3kyUc3DssSQnuLEJZldNGvI36s3/YR+GjuS2thGUbn4nS4vSw90Nx6oN+f+fdD70+9jP3aC6oe+6qiNN+wmaIblvZehGEd7655sdtu7fVLuNvesrdntAzDBvq89sD44JF/P/Y6jRoNz30uX5pvc+3hMH/BZ6PnBW629trn7S0uzqax5bm5gd6+GKsM++25Cz/4Z3l+KtZtcxzDq73WDnF6KBU3bl5vL4wrPSUHYXtg717G5hOfPr4yjbKYnWsZwZn9gXG+DXbv7/bZKmDHh2F50GCOidMf5uaT+qko9ddyVmfrN1K3DXH+bqxXEOPQMjYon6k9lZv/NbOc9JxLWR1rJkfutyH+IxQbOPRxWLKPwTZxhjY5FldMej5Wdk7ZZ9zsQkqXDb6zbODkh2ebOKFliVAs4Z5KoGNTB3qNcZ1unw126e1tUpZrBMxhi/d0HtlS6FzzarUfOKabmy1nexuNOabvqjis4BSD55rfJc+OrcNW4VlzVc81AkFeeCTA2bH3XW52zpld8ioRC1t/BddZjlz1h/Co9ngPov+awbMtCl7ykdPxdt3oe94BWKLgADBz/m8Gzys7l5wu2c59qz2clPLbZhplH33P4Hl9cjaXPA2t/uhnmf7vYpDnPqfwXDOi45e2hhgE2JGXnI+Em1F4rtkKLONDW0cM/GbZxEzTJrhspdY528ul1ZCzzl1mdizbgkT5KvGPrYgstbmpiJyNHdapm9fjZUpa2/1Ypxy/VBU5rH6HdSnrtci0p3LKUZvbaWnripGNHRPzz5o8hicHOnYe2tqi5+l927m6yX+Ijnhtbru+rS8ciwUs9acPGczyVR4d4yokpw2+6uXzZcqAjnhtXplF/uz8ZNG381jw8cXZOUujY+elrTNS7U5RcjKwI41OIZ/IU+TWTA776tQ36AivCPpqyUnrewXFgTA7RhadGuvyLynL1EyOzE7uV3RkRSe2NYendr3VUVbKru/IolOtR/6YtlSnbJRMmV5yXVkUHePauoPqlNUsSDhTJzp2CpWjQ5MdRXt2IdaJTvWiQ5MdVbVBkCuzJNGZQ/XoEGRH2VKWXJkliU79okMqspRVlWKvYMihYysvrz7q26Mdr8/gxepUx8Y3IOewV7DdqO1PkFpVlkPHjO+ATuvqXNFJUs7C6NRfmX/M2UM2U+dfHStTnbfIVweNssJ0dRz/0ujYbngTdA5tgkatf4OtCJ03yVfHpqzaotJXhM7b5Ksj3a53+XwQcMpS6LxJfXWsxlKstLEa1XmP9cBjM1b1V0MCTlkKHf825Ly8Kqj7b47VJKz3sTqvmh3uwjwE5bLzS5/VCcPY9+PC1XPpzbmsohOW7fqr/Ro1v12QNTB1hKtDdehWJ/Tb1WlrdNORW2tEm3tpIZ9HdJb9qq7/r3HcbxL0jgMfdtkRQodaa+yHuO5/4nY1X/Ixan801/lRsNMZRGdx/rub9rYb+iaXvsIa61AdWj/+c+p12uGNf51lu8JDbO4Vn2xSy6vhwe1cGz1+VCY7Ql6HtDa2+H+vnEl4QXz55uh+WnPRyunsJ+bP7gmxyfDEGtAhTcHvD5cgsxMmtuac1GT5fFY3v3I7ZeKh3cwvX4igQ9v7jLwvwES+vYLnO6BpS6DDi8f0p16JMVWADqUj780J4hb8na/XSJ8rPF9PTjLJB94etknuj/erLJmERfgWItxZeLPGc84wS3nv9anBTNmDCEcuplj9csKBqLxGWUZ1JsaZTct+d/M6RRHDU3To3w39Wxs8nZd0t+zVo0M5GiXyOlDe5p6aBPK+C+EEpYSTe3qjXnWO9+SDPUaKj2Buzj+rm8d85KSwEzgzlozqRM40TMkGywPnSWjuyYoIeVGHeNgl/dPkqB4dx2d1tjm9EKxOw9ncsx6PWclJOBCBM2OJoENYPHnwN1F88qMuIjQXZTYhEopl4kopZ40lg06vGB1Kc05kPTBldZf6GrQHOqrQoa08JR5zSbPKTnvCGt8NHSOwf5X4EgTNmjPuYwGdZHSIApA6iLSUxVieA510dGhLyamug+iwPNBRhA7J6jAcLhrLmh2gk+51KEMYGGY/SXb4VnaATjI6pFUdBrtqSa8yLWw+GeikokPb2eewHCSTxXekKdBJVh3KAPKs6pL0zgMdNapDeDmJyaySDDrbNzVAJxkdguMIPFOfVJ87oKMmYVHeWGXyqpSM9eClAqCTFx3Kqi7T++W0F625Siygk4wOYRuC640ryjtmbO9dAJ1EdCjNsRXIRX8c6KSiQ7CqfMtyFLMDdNSgczxnjHyveRLMjgc6StAh2A2+LUjKyk4EOlrQKTd4a1B+HcW5EnR8uZRBS5cO6AAdmkkHOhWjw3dYCeWjMqCjBR3Wj6QPB/vnHUBHNTozo+oQ+gboqEDH1ocOVAeqA9X5carTwusAnfIVFopzrOtgSRDoZN2IoOygYSOi4j2swtufQKfenXO+LzAtXrr4Wa96MV7i6oBOxS+YCpzD/Hptfryn8YKpHnSGchNf5PxwoJMJHdLrwVxOleKS8UWEGnQodoPtMzrCbw/4DksLOqQPh3lmPilZspV3QCcZnXJnBpBOicc353rQoYwfU8ainM0UcUiKlgqLdNwET4VMOhQKRzPpUR3KR+csaYOUKvmO+gc6yRUW6cRthhGkndc84CxBPehY0iG0kUF0SLcn4wRTReiQjtxPlh3ifaMRR24rQqcjHZueOv1pJ30zfsgDdNKHmXYdVuog0i7xXnC9iCZ0iJfwpZ26TbwQi/EaPqCTjg716s+YlK6Iv2mBjiZ0aLkjJWVRL47l/GYZ6HBYWuJtigO1yiJWV6zvJwIdDnSINziS7Q7tYhHOF4WADhc6xHtj14ZJ7JDJ4fzuFOjwrMG4Nh87q+aEtny+Ajos6JAzFoGdBHJY8xXQ4UGHWGPtj3rMK9uOnK1Y6yugw7VpQM5YaxaZmtdH1M49/ZfGDuioQ4e6KnjbHIivDqk1ni5vzPkK6DCpjkkQg/VxXxIe28wugVDGt7yADiM6CUb5JjzzM3is7ZIkh/OUBKDDqTpd2rDe4LEPFKfzY9ov8JpkoMP3bk1sE2NxU/ctPdZaM8chtX3GTXOgw4kOfUX5iy6McerMhor9hGb9ZzfHPqQ37i3Q0ak66bKzD/DQRz/NXWfW6LpunqIbAkfLvJU50OFEh0F2fvOzDOMewxK42my5RQfo8KHDIztSwS46QIcRHT7Z4Q92pwN0ONHRLDvc5RXQ4UWnG9SKzmSBjmZ0Gq8VHccvOkCHs+fJrwxLB/PuFdDhn7RJG+iCESVGGejw6r1Kp9x3FuhoR4d2cIl0uposVEe/6jQKU5ZIugI67OiY+DPSFdBhR0ddlSVSXQEdiWURq2s/IvimATp1oNM0XpPdkVgMBDpS/a/J7kgZHaAjgo4iuzPMYuQAHQnVt7OS1R2hFR2gI2gYdFhlOYsMdOS85qSBndgAnfrQ0VBmRQN0akSnPDvOWKBTJTpNLMuO62TJATqC62pF2REnB+jIoWNNwZwlTw7QkVzNN75UnRWNODlAR3YjqAw7IQc5QEcWHTsV+L5m8U0GcoCOMDpJZ/9Rdx+aLAF0hN9csJ3LS04/W6DzFuhs5xxnNDwhQ2kFdDKhs21ojflsjslFDtDJgU7TuZApWTX5AujkQKcxPkOlFWK2ZAV0sqHTJB55/NLfPDU5yQE6udCxwsKz5JUcoJMPnf1iELFSK7i5yUwO0MmHjmDW6ieTGxygkxedxkw9Pzyj7/KDA3Qyo7NaHm54hhWcEuQAnczo7MrDl7bCWAocoFMAnR0eFsMc3FQMHKBTBJ11uOc4pkrPEGdTDhygUwSdnZ5uigmXPyzOd01BboBOMXSa/coZIj3Dzk1ZcIBOMXQ+EtdKT3/oDpFlu/ioPDdS6DSTPxrTQ1dZujm5DemVAbPh84r6hKWPfjYquBFDxx6Pepvj6C7TzT66cbkjQGEZXfS3a9YaLfFLqDMa3sE52F7D3Jx87D+zArQqYozO9f12HVbfO+fif+2d6XaruBKFke2AmISA93/XBjsncSceoAYNZO9fd91eC5/AR9VWSVR9jlYrbULYKKIDMQhacuqXvv4/m9y/FehAQAcCOhDQgYAOBAEdCOhAQAcCOhDQgSCgAwEdCOhAQAcCOhAEdCCgAwEdCOhAENCBgA4EdCCgAwEdCAI6ENCBgA4EdCCgk4D+dZW4+1Sf1Wbix6f/3z+Qrn7dgn/tCizQeX7L1g4h0/jdIWRtEOKdm0jdQb46jtxfbb3cOCXYbeSLczRJ2X3Tro2JmvZRX6K1KZHb1QHter1x7XP08HLt2hmrNik9B4vWTKS7tnbT69+0Qxva3m1r9LqtO99yvVQa8qEhHJkb12/s4Tk3bnp301Zutl5vwWeM3T4WbSiJ9+36nPf1Cn7VnHyJ+jt7ya70RGxajea31PtG6Ve+jkR4HCnWAEaY2zE0kTpXo+U29caZiTolofUPbtkKInXG3ezDTyGTaPQ/HLLR//sbx5nN0v4cVbg+CM64jtDwWIwXoYPDvHHd/TTvJVWxByOGHJxpJYcaVUcbavTyzklMwLwbdWlrkXGsbaDZ8hilRg85YyM5YFfselcaMwTnaAMcX4UcsTvXrGUewetVs3bgsRgbS9fUCN6v5VGPoqPDh1717cWwasZL52Rv3SAe/LtRMVe5tlJUSKcfGh1r/FClrtmpBdxe+69vxrCBJxg6tu6rDDR4DdegHXL+/duDBp4iGDlNVf1VdpbXJkzAbaYDopMLOeu0RvF3d+zCJdxwS60CMefBpE8rmqz0FlZBwI+LTlbkVJVkzgru8ZrJHgedTBzyPTtyf/sU/K1px+OgY3xm5FSD1Brdjm2Uf709CDrZkbPYzVHm5rs5Cvk+hFkOgM445IdO1Yo4hjjkCLu1aOjYqa1ylMAyy7h4L02AhZY6Oqav8hTfKkfdeNFnRx0dlyk5fLsTectOnZ1CO13NuaJTNax7HzNb3bxyr+x3CqQrnZTl4i8OvMkZnSxXV18pi7HKGufc2Y+Ljq27Kmf1Ju88Pbh8o47LmpxqIDplOyXyykhVNoOjY+s2b3SIYSehcwKt4l6oKjo+c3KIYSelPbtGb4leIOiIhx03ZB84Y0cdlz05pLCTVilLzyoromOa/NGp+oyNDr/EEAkdm3VNh3zj0zucpGV3FKNOXx1B3mb/wvjMok7Ou1f/f2d3/dkpFkGVqjt66LhDkLPXKPs08bc5oWOOka/2hftU/Z3PKeocJV9VVbv9lU32czOVVVaBfCWYsZL9ozUKg2oJ6yj5ascaK+Hy+aDglJXQOcImxJfJNFl75L1/RHR0DlEP3GcUkrZ3g7O5oOOr42hjsE/7I9dOfIFewOoILW0Fg84wt91V7SwXvF0e6HCsTrtOflqHoMk8CYHLbfMJMkFnWOd1XUenLarreno/8ilW2FFCZyL+tbdxH/Y6Z6Z27CrJ5+VsuU6dctQ9gk2VHYmgM6wDi8zd2Mpba+h68hINN10e6BALHGvP9LsW/jXzm22hyw2bfDI76Mz9k0FX65Q++vgUtUWWkteh3cefXYUsrztNP/0aQ9Jpva/sasR1xsmr36FHTaXajhI6JJf8aJeOUdp/8OUs8VOFLT6ZV0geNgzHYU/D6HOIOobyhB77OHKjjIeXo/Xd2HDPeUcit7U85g4KEN7J0kGHEr2fxFNLPCQ+C16ue+sSWCXQzY3WLbP/sk8/6pAWWF729Ibk5TYssRh1rHZ7l3XLc3+y63MddAjv4NNoSnuhRS/3PtIzTPK+jqPrMJ5EjLIOOgTP+PxYAMlGPLcnhCOgb28544jJ7jY4nFkbPvmERVluPF8Ak/bDXqynvejVmEciCQ2UGOy0khlLB539T+dF2Y2SYl5eThwdeiWZ2HrLp5CxdNDpJd8HyoMRvtyb017kfEX0rZa8X+bL46HT1aKF2hfLaVuLo0NdX5H7UJAPQUtmLBV0CKm/MaLoCF/Oq2xC0NOHpbYUlsxYOug0B0OnV6kHcrIHtVLqU0en+1vo+JBGh5ckBbfPgQ6v6ETfv2LmDmKWnOXMDtDho1OTlubcT6OMi2x2gA77MQvvlCivsjzQSQYdS7M67AqLpTllue9AgQ7/fvcxgk5JbMgiV9kBOmx0SOfaJE7skYrYcue9gA47YVE2sETcKm2RNQKdRNCxJJfc1SI3mpIqPdBJJupQ0obMNiSJWrHD7UCHjQ5hgTXIGA5SxhKrJwMdtk3uo+Ur0m+LLbGADhcdyjaE1LEZSrIUW2IBHa5NpiQNqc+/Kau7AeikEnXqiE/PapzRBzqhoo7s8dcAZscBnUTQISyQ5Q7NWA90MkYnYmmF5JOlPDrQ4aJDeXhi+YoS84BOxujI9deifN3fA51EVlgEdEZBdGagk23U8VHRET+jD3RCoUM5IzgItkii3Bugk23UEUQHUQdRJyA6iDoZRx14HaATfYVF2UEDOqjrYHEOdFASxB5WhI0I7GH9qZ1zwbbpEXfQgA77vM5+dDq5TiU4dPG3jnrJdSqhHIwGOqmgQ7icWGEn6o8DHW5dh/LJuZTd0Gk9D3RCoUM4HizVqYSybT/jO6xU0LF9vMdHsTpinw8CHTY6wnMIlGvJ+OY8IXQIVTmh5xexUwLQkUCHMvxLxquSWqc6NElJBR3aLCyRB0iBdkBrpnTQIb37IgPxSE0M0UswHXRII4YGftihjVJq0ME0HXRoI40a/ttParort/UKdPjoTKRJH9ywQ5zf5tByOyF0SP2L2W6HNjRS8Eg90BHYOJAdp71RtElKHcaLpIQOcX7jzFkmE0Od5CkzoCOADnFqLCsCEGdGOoxSSyphGeIkTsYGOnEI3zwBnaTQoQ6PHhw1XY3E6diCQ/iAjgQ61OGfVHaoQ2NFR38CHRF0iJ51tcokcqg/J9ljA+jImBLqyHoKO3RyRPMV0JFBZxrI7LhyZySgkyO5vgI6QujUDflxDt7seKC2HFvyT0mur4CO1CraVXR2+u31HVv7gf5LvWS+Ajoy95xaFbypHbcFHltODeNnBPv6AB3B17WvOA+1n947HruEHA6gkvtXQEcOHXJp558N8fVreBZwXMf6CdGiDtCRQ8c0vOdatX4y1j7jpmSDI2ySgY5YwrKu4mruXb3QY39is3Az9i378l74KQMdKXTqrqoE6PFjba683FSaenJ9OwhcWjjoAB2xVa1A2LlZ5rnpvXNuHEfnfN9IYCN8UgfoCKMjEnbuEBpELycedICOXC1NKuzoyJeIOumiUzfpkiMfdICOYAWfW9vJK+gAHcnNH9OnSk5bW6CTMjq8nSxNOYuokzQ6jCNfumoM0EkcHekFeroeGehIR50ySafsNR4y0BFGxySYsrraAp3k0bEmvZQ1jxZRJ4Ook2BxRyddAR1xdJJbZfU66QroyKNj66QKg+1kEXVyQYf+Wa+ChlGLHKAjn7DozQQyMjpARwWd0rhUrLLsl1dARx2dZKo7TW2BTl7oJLKH3k2K5JSFAToacT+FY1+tKjkG6ChZhvjszKMmOQs6Z6Cj4zan7tDklGego4WOjcsOqV8Y0EkCnbjsqJOzoPMBdLTKI3ZqjktO+QF0FCtr0T6vafXJWdA5AR29omykrVDdes6nTkBHtZ5vjQ+/J9HXAcgBOupbQcaF3gv1Qcgxp+JigI7uLuIY9AzG7EwIckpzKS5noKOLjp0CGp5uLIPIni9FAXS0zy4shidQ0hrC2JxbWafQWJ0DnR8/WY7dkZLVbW0OdAKgw22VvfVfOZXhtKJzAjr66KxuWTnwtAFDznVtXhQXoBMEHW7D7HcuJ2TIWXRZ0TFAJwQ6a5v+XitrNWPQkHNdmxcaSyyg82ypNTYa8HSuDgvObYGl4ZOBznN4nDg87QJOaHKuLlnDJwOdcPBEAefmkoFOWHSuaUvK8wyNq8sI4PxDR94nA513N2jyAhtbcz8aGwWcT5es4JOBznvVrmGt1YfOT3ECzrdLVvDJQGdT3po8lZ6Fm2gB584lK5gdoLMNnoUe1++mZ278WJcRufmyOgpmx/TdTrWvHk4d/XJ6/SKsqccdwWfuejeZ0sYF58vqaJid/cr3cvwqs5lG33fz62XX3PbeTXV0bO6tjsrmObQvddmynsZ1/FU3z8P3PKPlf85zuw7IGqcHE/piWx2VzXOIgM916F49Tdcpau42Tm2a6tp8/sdkdPpCR+OQKbQbnW+Cfii1f+r5y+ogYyUahFL9p33nK2QsiJivVM7sQIeNh+YuX6l8FgEdVed7cpCxIFq+QsaCtuv/+QprLIi0vkLGgsj5ClVBaGvQOf/IV8hY0Eb9zFfIWNC2oGNOv9BBaQfaovNvchB2oC1R50HQgVGGtgSdywN0YJQhiklGRRnaIvMw6CDsQG+dzuOgA6MMvdXpCTpYn0P7V+YIOxAn6CDsQMSgg7ADUYMOwg5EDDoIOxA16KC2Az3Vx2tyihNKytBDPSskI+xAzKCDnSyIGnTglKFHsqf35ODcDvRoYb4h6CDsQL9jjtkSdOCUIYpHRsqCHgWdbekKKQv6pVOxWUhZECFdIWVBlNUVUhbESVdIWRAxXSFlQdR0hS106J/Mqdgt2B1o494V7A7ENzqwOxDV6IAdiEMOrPJf9znmVJAFq/ynxSAHVhkWmawL2Pm75FwKHjuwyrDIYAcKSg7YATmMZRbYATko70CbCjrnU1GAHWi/jBg5YAcxB14Z2uBzRMmBV/5DMedSCAtxB2srsAOFJQf7WX9BHyrkgB2Qg0U6pF7OwUIL5RyYZSiOQYbhgc2B4YEi2BwYngMnq0DkIGkhWSHwQEFDDgIPQg4CDxQ85CDwIOQg8CDkRNIFNZ6cazmXIqYuH4AnR1nzERccWB6YHFievwXOqUhFgAfuGPAc3uMkBs4VHhjmDFZVH+mBczPMCD1pZ6pEzPHjOg/gSdjipAvOZ94CPQlanHOimepn6IHrSc7hXIpMtCQu0JMKN+d8uPmKPchcCRjj3Lj5pgfBJ2K4yZQb4ANsJPABP2GpOQQ23/ws8efjDII0mTl/LLHmUNT8H6DTFaGzAUQywCzErMicgkPzHz2WZ5sXrV09AAAAAElFTkSuQmCC" },
              { name: "ZaloPay", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fnarcrmfhjtzhkasmgfkx.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fsite_assets%2F1756622681391.webp%3Fwidth%3D200%26height%3D100%26resize%3Dcontain&w=3840&q=75" },
              { name: "Grab", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fnarcrmfhjtzhkasmgfkx.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fsite_assets%2F1756622711700.jpg%3Fwidth%3D200%26height%3D100%26resize%3Dcontain&w=3840&q=75" },
              { name: "Biti's", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fnarcrmfhjtzhkasmgfkx.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fsite_assets%2F1756827931602.blob%3Fwidth%3D200%26height%3D100%26resize%3Dcontain&w=3840&q=75" },
              { name: "Vietjet Air", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fnarcrmfhjtzhkasmgfkx.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fsite_assets%2F1756827952745.blob%3Fwidth%3D200%26height%3D100%26resize%3Dcontain&w=3840&q=75" },
              { name: "Techcombank", url: "https://www.xalomedia.vn/_next/image?url=https%3A%2F%2Fnarcrmfhjtzhkasmgfkx.supabase.co%2Fstorage%2Fv1%2Frender%2Fimage%2Fpublic%2Fsite_assets%2F1756827997444.blob%3Fwidth%3D200%26height%3D100%26resize%3Dcontain&w=3840&q=75" },
            ].map((partner, idx) => (
              <div key={idx} className="w-full flex items-center justify-center hover:grayscale-0 transition-all hover:scale-110 duration-500">
                <img src={partner.url} alt={partner.name} className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ />
      <ContactSection />
    </div>
  );
}
