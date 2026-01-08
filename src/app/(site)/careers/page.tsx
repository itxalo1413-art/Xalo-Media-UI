'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';

export default function Careers() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const jobPostings = [
        {
            title: "Chuyên viên Digital Marketing (Performance)",
            location: "TP. Hồ Chí Minh",
            type: "Toàn thời gian",
            salary: "15 - 25 triệu",
            summary: "Chúng tôi đang tìm kiếm một Digital Marketing Specialist giàu kinh nghiệm để dẫn dắt các chiến dịch Performance Marketing tại Xa Lộ Media. Bạn sẽ là người trực tiếp tối ưu hóa ngân sách và đảm bảo tỷ lệ chuyển đổi tốt nhất cho khách hàng.",
            responsibilities: [
                "Lên kế hoạch và triển khai các chiến dịch quảng cáo trả phí trên các nền tảng Google Ads, Facebook Ads, TikTok Ads.",
                "Theo dõi, phân tích và tối ưu hóa hiệu quả của các chiến dịch để đạt được KPI về chi phí và chuyển đổi.",
                "Báo cáo hiệu suất chiến dịch và đề xuất các giải pháp cải thiện.",
                "Phối hợp với team content và design để sản xuất các tài liệu quảng cáo hiệu quả."
            ],
            requirements: [
                "Có ít nhất 2 năm kinh nghiệm chạy quảng cáo performance marketing.",
                "Thành thạo các công cụ Google Ads, Facebook Business Manager, TikTok Ads Manager.",
                "Có khả năng phân tích số liệu và tư duy logic tốt.",
                "Hiểu biết về SEO và các kênh digital marketing khác là một lợi thế.",
                "Chủ động, sáng tạo và có tinh thần trách nhiệm cao."
            ],
            benefits: [
                "Mức lương cạnh tranh và thưởng theo hiệu quả công việc.",
                "Được làm việc trong môi trường năng động, chuyên nghiệp, tiếp xúc với các dự án lớn.",
                "Cơ hội học hỏi và phát triển bản thân không giới hạn.",
                "Đóng BHXH, BHYT đầy đủ theo quy định.",
                "Du lịch công ty, team building hàng năm."
            ],
            jsonLd: {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "title": "Chuyên viên Digital Marketing (Performance)",
                "description": "Lên kế hoạch và triển khai các chiến dịch quảng cáo trả phí trên các nền tảng Google Ads, Facebook Ads, TikTok Ads...",
                "datePosted": "2025-08-29",
                "validThrough": "2025-10-29",
                "employmentType": "FULL_TIME",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "Xa Lộ Media",
                    "sameAs": "https://www.xalomedia.vn"
                },
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "TP. Hồ Chí Minh",
                        "addressCountry": "VN"
                    }
                },
                "baseSalary": {
                    "@type": "MonetaryAmount",
                    "currency": "VND",
                    "value": {
                        "@type": "QuantitativeValue",
                        "value": "15000000-25000000",
                        "unitText": "MONTH"
                    }
                }
            }
        },
        {
            title: "Content Creator (Lĩnh vực Lifestyle)",
            location: "Làm việc từ xa",
            type: "Bán thời gian",
            salary: "Thỏa thuận",
            summary: "Bạn có đam mê sáng tạo nội dung? Bạn yêu thích Lifestyle và muốn chia sẻ những câu chuyện thú vị? Hãy gia nhập đội ngũ Content Creator của chúng tôi!",
            responsibilities: [
                "Sáng tạo nội dung (bài viết, hình ảnh, video ngắn) cho các kênh social media (Facebook, Instagram, TikTok).",
                "Lên ý tưởng và xây dựng kế hoạch nội dung theo tuần/tháng.",
                "Bắt trend và tạo ra các nội dung viral, thu hút tương tác.",
                "Phối hợp với các bộ phận khác để đảm bảo tính nhất quán của thông điệp thương hiệu."
            ],
            requirements: [
                "Có kinh nghiệm sản xuất nội dung trên các nền tảng mạng xã hội, đặc biệt là TikTok và Instagram.",
                "Có gu thẩm mỹ tốt, khả năng quay dựng video cơ bản.",
                "Sáng tạo, năng động, và luôn cập nhật các xu hướng mới nhất.",
                "Có khả năng viết lách tốt, không sai lỗi chính tả.",
                "Ưu tiên ứng viên đã có kênh social media cá nhân phát triển."
            ],
            benefits: [
                "Thời gian làm việc linh hoạt, có thể làm việc từ xa.",
                "Mức thu nhập hấp dẫn, tính theo dự án hoặc số lượng sản phẩm.",
                "Cơ hội hợp tác với các nhãn hàng lớn.",
                "Được tự do sáng tạo trong lĩnh vực mình yêu thích."
            ],
            jsonLd: {
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "title": "Content Creator (Lĩnh vực Lifestyle)",
                "description": "Sáng tạo nội dung cho các kênh social media (Facebook, Instagram, TikTok)...",
                "datePosted": "2025-08-29",
                "validThrough": "2025-10-29",
                "employmentType": "PART_TIME",
                "hiringOrganization": {
                    "@type": "Organization",
                    "name": "Xa Lộ Media"
                },
                "jobLocation": {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Remote",
                        "addressCountry": "VN"
                    }
                }
            }
        }
    ];

    return (
        <div className="py-24 min-h-screen">
            {/* JSON-LD for SEO */}
            {jobPostings.map((job, idx) => (
                <script
                    key={`jsonld-${idx}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(job.jsonLd) }}
                />
            ))}

            <Container>
                <div className="text-center mb-20 space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">Tuyển dụng</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Tham gia đội ngũ Xa Lộ Media và cùng chúng tôi kiến tạo tương lai của ngành digital marketing.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Why Join Section */}
                    <section className="bg-digital-blue rounded-[32px] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32" />

                        <h2 className="text-3xl md:text-4xl font-black mb-16 text-center">Tại sao nên gia nhập Xa Lộ Media?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            {[
                                {
                                    title: "Môi trường sáng tạo",
                                    desc: "Nơi bạn có thể tự do thể hiện ý tưởng và phát triển bản thân mỗi ngày.",
                                    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" /></svg>
                                },
                                {
                                    title: "Cơ hội phát triển",
                                    desc: "Lộ trình thăng tiến rõ ràng, được đào tạo chuyên sâu và tham gia các dự án tỷ đô.",
                                    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                },
                                {
                                    title: "Đội ngũ chuyên nghiệp",
                                    desc: "Làm việc cùng những đồng nghiệp tài năng, nhiệt huyết và luôn sẵn lòng hỗ trợ đồng đội.",
                                    icon: <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
                                    <div className="p-6 bg-white/10 rounded-[32px] text-orange-400 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-black">{feature.title}</h3>
                                        <p className="text-blue-100 font-medium leading-relaxed opacity-90">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Positions Section */}
                    <section className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">Các vị trí đang tuyển dụng</h2>
                        <div className="space-y-4">
                            {jobPostings.map((job, idx) => (
                                <div key={idx} className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-100 group">
                                    <button
                                        onClick={() => toggleAccordion(idx)}
                                        className="w-full text-left p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-gray-50/50 transition-colors"
                                    >
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-black text-gray-900 group-hover:text-digital-blue transition-colors duration-300">{job.title}</h3>
                                            <div className="flex flex-wrap gap-3">
                                                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 text-digital-blue text-xs font-black uppercase tracking-widest">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                    {job.location}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-50 text-purple-600 text-xs font-black uppercase tracking-widest">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    {job.type}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-50 text-green-600 text-xs font-black uppercase tracking-widest">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    {job.salary}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`p-4 rounded-full transition-all duration-500 shrink-0 ${openIndex === idx ? 'bg-digital-blue text-white rotate-180 shadow-lg shadow-blue-500/30' : 'bg-gray-100 text-gray-400 group-hover:bg-white group-hover:shadow-md'}`}>
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </button>

                                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="p-8 md:p-10 pt-0 border-t border-gray-100/50 bg-gray-50/30">
                                            <div className="mt-8 space-y-10">
                                                {/* Summary */}
                                                <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                                                    <p className="text-gray-600 font-medium leading-relaxed italic border-l-4 border-digital-blue pl-4">
                                                        "{job.summary}"
                                                    </p>
                                                </div>

                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                                    {/* Responsibilities */}
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-black text-gray-900 flex items-center gap-2">
                                                            <span className="w-8 h-8 rounded-lg bg-blue-100 text-digital-blue flex items-center justify-center">
                                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                                            </span>
                                                            Mô tả công việc
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {job.responsibilities.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-3 text-gray-600 font-medium bg-white p-3 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-digital-blue shrink-0 mt-2" />
                                                                    <span className="leading-relaxed">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Requirements */}
                                                    <div className="space-y-4">
                                                        <h4 className="text-lg font-black text-gray-900 flex items-center gap-2">
                                                            <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                            </span>
                                                            Yêu cầu công việc
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {job.requirements.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-3 text-gray-600 font-medium bg-white p-3 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                                                                    <span className="leading-relaxed">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Benefits */}
                                                <div className="space-y-4">
                                                    <h4 className="text-lg font-black text-gray-900 flex items-center gap-2">
                                                        <span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                                                        </span>
                                                        Quyền lợi
                                                    </h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {job.benefits.map((item, i) => (
                                                            <div key={i} className="flex items-center gap-3 text-gray-600 font-medium bg-white p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all">
                                                                <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                                                                <span className="leading-relaxed">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
                                                <div className="hidden md:block">
                                                    <p className="font-bold text-gray-900">Bạn đã sẵn sàng?</p>
                                                    <p className="text-sm text-gray-500 font-medium">Gửi CV ngay cho chúng tôi</p>
                                                </div>
                                                <button className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-digital-blue to-blue-600 text-white font-black rounded-2xl hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                                                    Liên hệ với HR ngay
                                                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </Container>
        </div>
    );
}