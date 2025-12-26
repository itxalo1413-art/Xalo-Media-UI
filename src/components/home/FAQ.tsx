'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';

const faqs = [
    {
        question: "Chi phí cho một chiến dịch Influencer Marketing là bao nhiêu?",
        answer: "Chi phí phụ thuộc vào nhiều yếu tố như quy mô chiến dịch, mức độ nổi tiếng của KOL/KOC, và các yêu cầu cụ thể. Chúng tôi sẽ tư vấn và đưa ra báo giá phù hợp nhất với ngân sách và mục tiêu của bạn sau buổi trao đổi đầu tiên."
    },
    {
        question: "Làm thế nào để đo lường hiệu quả của một chiến dịch?",
        answer: "Chúng tôi sử dụng hệ thống đo lường real-time, theo dõi chặt chẽ các chỉ số như Reach, Engagement, CTR, và ROI thông qua các công cụ phân tích dữ liệu chuyên sâu, đảm bảo báo cáo minh bạch và chính xác."
    },
    {
        question: "Thời gian để triển khai một chiến dịch là bao lâu?",
        answer: "Thông thường quy trình từ lên ý tưởng, lựa chọn KOLs đến khi chiến dịch chính thức bắt đầu mất từ 7-14 ngày làm việc. Tuy nhiên, thời gian có thể linh hoạt điều chỉnh tùy theo yêu cầu cấp bách của doanh nghiệp."
    },
    {
        question: "Xa Lộ Media có làm việc với các doanh nghiệp nhỏ không?",
        answer: "Tất nhiên. Chúng tôi tin rằng mỗi doanh nghiệp đều có tiềm năng phát triển riêng. Xa Lộ Media cung cấp các gói giải pháp marketing linh hoạt, được thiết kế tối ưu để phù hợp với ngân sách và mục tiêu tăng trưởng của các doanh nghiệp vừa và nhỏ (SMEs)."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-digital-blue/10 text-digital-blue text-xs font-bold uppercase tracking-widest border border-digital-blue/10">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            FAQ
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Câu hỏi thường gặp</h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                            Tìm câu trả lời cho các câu hỏi phổ biến nhất về dịch vụ của chúng tôi.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`border-b border-gray-100 last:border-0 transition-all ${openIndex === idx ? 'pb-6' : 'pb-0'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between py-6 text-left group"
                                >
                                    <span className={`text-xl font-bold transition-colors ${openIndex === idx ? 'text-digital-blue' : 'text-gray-800 group-hover:text-digital-blue'}`}>
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-digital-blue' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-gray-600 leading-relaxed text-base pt-2">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
