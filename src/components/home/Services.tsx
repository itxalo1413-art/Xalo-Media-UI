"use client";

import Link from 'next/link';
import Container from '@/components/common/Container';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
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
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
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

        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
                key={idx} 
                variants={item}
                className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-digital-blue group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7 text-digital-blue group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <p className="text-3xl font-black text-gray-900 tracking-tighter mb-4">
                  {service.stats.split(' ')[0]}
                  <span className="text-lg text-gray-400 font-bold ml-1">{service.stats.split(' ').slice(1).join(' ')}</span>
                </p>
                <Link href="/services" className="inline-flex items-center text-digital-blue font-black text-sm uppercase tracking-widest hover:translate-x-1 transition-transform">
                  Tìm hiểu thêm
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
