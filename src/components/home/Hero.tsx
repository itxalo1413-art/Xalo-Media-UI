"use client";

import Link from 'next/link';
import Container from '@/components/common/Container';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 pb-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
      {/* Dynamic Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-digital-blue/10 rounded-full blur-[100px] -z-10"
      />
      <motion.div 
         animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] -z-10"
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 relative z-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-digital-blue/10 text-digital-blue text-sm font-bold tracking-tight border border-digital-blue/10"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-digital-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-digital-blue"></span>
              </span>
              #1 Digital Marketing Agency in Vietnam
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Deliver what <br /> you need, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-digital-blue to-blue-600 block mt-2">
                Achieve what you want
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              Xa Lộ Media là đối tác tin cậy cung cấp các giải pháp marketing toàn diện, giúp thương hiệu của bạn tiếp cận đúng đối tượng và bứt phá doanh thu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-digital-blue text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 overflow-hidden transition-all hover:scale-105">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="relative flex items-center">
                  Bắt đầu ngay hôm nay
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-100 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all shadow-sm hover:shadow-md">
                Xem dự án
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
             <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full rounded-[40px] bg-gradient-to-b from-gray-100 to-white overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                  alt="Hero Banner"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
             </div>

              {/* Floating Cards with clearer value props */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 md:-left-12 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/60 hidden sm:block"
              >
                  <div className="flex items-center gap-3">
                     <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                     </div>
                     <div>
                        <div className="font-black text-xl">4.9/5.0</div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Rating</div>
                     </div>
                  </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 -right-6 md:-right-12 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/60 hidden sm:block"
              >
                  <div className="flex items-center gap-3">
                     <div className="bg-green-100 p-2 rounded-lg text-green-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                     </div>
                     <div>
                        <div className="font-black text-xl">+250%</div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Growth</div>
                     </div>
                  </div>
              </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
