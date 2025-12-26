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
            description: `
                <p>Lên kế hoạch và triển khai các chiến dịch quảng cáo trả phí trên các nền tảng Google Ads, Facebook Ads, TikTok Ads.</p>
                <p>Theo dõi, phân tích và tối ưu hóa hiệu quả của các chiến dịch để đạt được KPI về chi phí và chuyển đổi.</p>
                <p>Báo cáo hiệu suất chiến dịch và đề xuất các giải pháp cải thiện.</p>
                <p>Phối hợp với team content và design để sản xuất các tài liệu quảng cáo hiệu quả.</p>
                <h4 className="font-bold mt-4 mb-2">Yêu cầu:</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Có ít nhất 2 năm kinh nghiệm chạy quảng cáo performance marketing.</li>
                    <li>Thành thạo các công cụ Google Ads, Facebook Business Manager, TikTok Ads Manager.</li>
                    <li>Có khả năng phân tích số liệu và tư duy logic tốt.</li>
                    <li>Hiểu biết về SEO và các kênh digital marketing khác là một lợi thế.</li>
                    <li>Chủ động, sáng tạo và có tinh thần trách nhiệm cao.</li>
                </ul>
                <h4 className="font-bold mt-4 mb-2">Quyền lợi:</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Mức lương cạnh tranh và thưởng theo hiệu quả công việc.</li>
                    <li>Được làm việc trong môi trường năng động, chuyên nghiệp, tiếp xúc với các dự án lớn.</li>
                    <li>Cơ hội học hỏi và phát triển bản thân không giới hạn.</li>
                    <li>Đóng BHXH, BHYT đầy đủ theo quy định.</li>
                    <li>Du lịch công ty, team building hàng năm.</li>
                </ul>
            `,
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
            description: `
                <p>Sáng tạo nội dung (bài viết, hình ảnh, video ngắn) cho các kênh social media (Facebook, Instagram, TikTok).</p>
                <p>Lên ý tưởng và xây dựng kế hoạch nội dung theo tuần/tháng.</p>
                <p>Bắt trend và tạo ra các nội dung viral, thu hút tương tác.</p>
                <p>Phối hợp với các bộ phận khác để đảm bảo tính nhất quán của thông điệp thương hiệu.</p>
                <h4 className="font-bold mt-4 mb-2">Yêu cầu:</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Có kinh nghiệm sản xuất nội dung trên các nền tảng mạng xã hội, đặc biệt là TikTok và Instagram.</li>
                    <li>Có gu thẩm mỹ tốt, khả năng quay dựng video cơ bản.</li>
                    <li>Sáng tạo, năng động, và luôn cập nhật các xu hướng mới nhất.</li>
                    <li>Có khả năng viết lách tốt, không sai lỗi chính tả.</li>
                    <li>Ưu tiên ứng viên đã có kênh social media cá nhân phát triển.</li>
                </ul>
                <h4 className="font-bold mt-4 mb-2">Quyền lợi:</h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Thời gian làm việc linh hoạt, có thể làm việc từ xa.</li>
                    <li>Mức thu nhập hấp dẫn, tính theo dự án hoặc số lượng sản phẩm.</li>
                    <li>Cơ hội hợp tác với các nhãn hàng lớn.</li>
                    <li>Được tự do sáng tạo trong lĩnh vực mình yêu thích.</li>
                </ul>
            `,
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
                                <div key={idx} className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden transition-all duration-300">
                                    <button
                                        onClick={() => toggleAccordion(idx)}
                                        className="w-full text-left p-8 flex justify-between items-center hover:bg-gray-50/50 transition-colors"
                                    >
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-black text-gray-900 group-hover:text-digital-blue transition-colors">{job.title}</h3>
                                            <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
                                                <span className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                    {job.location}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    {job.type}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    {job.salary}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`p-3 bg-gray-100 rounded-2xl transition-transform duration-500 ${openIndex === idx ? 'rotate-180 bg-digital-blue text-white' : 'text-gray-400'}`}>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                                        </div>
                                    </button>

                                    <div className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="p-8 pt-0 border-t border-gray-50">
                                            <div
                                                className="prose prose-sm max-w-none text-gray-600 leading-relaxed font-medium mt-8"
                                                dangerouslySetInnerHTML={{ __html: job.description }}
                                            />
                                            <button className="mt-12 px-10 py-4 bg-digital-blue text-white font-black rounded-2xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-digital-blue/25">
                                                Ứng tuyển vị trí này
                                            </button>
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