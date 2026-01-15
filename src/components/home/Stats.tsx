"use client";

import Container from '@/components/common/Container';
import { CountUp } from '@/components/ui/count-up';

export default function Stats() {
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      number: 2000,
      suffix: "+",
      label: "KOLs/KOCs Network",
      bgColor: "bg-blue-50/50"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      number: 100,
      suffix: "+",
      label: "Talents",
      bgColor: "bg-blue-50/50"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      number: 500,
      suffix: "+",
      label: "Campaigns",
      bgColor: "bg-blue-50/50"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      number: 98,
      suffix: "%",
      label: "Success Rate",
      bgColor: "bg-blue-50/50"
    }
  ];

  return (
    <section className="py-12 bg-white relative z-10 border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className={`p-6 md:p-8 lg:p-10 rounded-[32px] ${stat.bgColor} border border-blue-100/20 text-center space-y-4 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group`}>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight flex justify-center items-center">
                    <CountUp value={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-bold text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
