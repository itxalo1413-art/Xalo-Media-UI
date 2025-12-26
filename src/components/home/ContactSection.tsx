'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        projectDetails: '',
        budget: '',
        services: [] as string[]
    });

    const services = [
        'Influencer Marketing',
        'TikTok Management',
        'Livestream Services',
        'Talent Booking',
        'Content Creation',
        'Brand Partnership'
    ];

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl -ml-48 -mb-48" />

            <Container>
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-black uppercase tracking-widest border border-orange-200 shadow-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        Liên hệ với chúng tôi
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        Bắt đầu <span className="text-digital-blue">hành trình thành công</span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
                        Sẵn sàng đưa thương hiệu của bạn lên tầm cao mới? Liên hệ ngay để được tư vấn miễn phí từ chuyên gia marketing.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start relative z-10">
                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/50 border border-white flex items-center gap-5 hover:translate-x-1 transition-transform">
                            <div className="p-4 bg-green-50 rounded-xl text-green-600">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-black text-lg text-gray-900">Hotline</p>
                                <p className="text-gray-600 font-bold">+84 786 688 149</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-0.5">Hỗ trợ 24/7</p>
                            </div>
                        </div>

                        <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/50 border border-white flex items-center gap-5 hover:translate-x-1 transition-transform">
                            <div className="p-4 bg-blue-50 rounded-xl text-blue-600">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-black text-lg text-gray-900">Email</p>
                                <p className="text-gray-600 font-bold">contact@xalo.media</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-0.5">Phản hồi trong 2 giờ</p>
                            </div>
                        </div>

                        <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/50 border border-white flex items-start gap-5 hover:translate-x-1 transition-transform">
                            <div className="p-4 bg-purple-50 rounded-xl text-purple-600 flex-shrink-0">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-black text-lg text-gray-900">Địa chỉ</p>
                                <p className="text-gray-600 font-bold leading-relaxed">250 Nguyễn Đình Chính, Phường Phú Nhuận, TP. Hồ Chí Minh</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-0.5">Ghé thăm văn phòng</p>
                            </div>
                        </div>

                        <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/50 border border-white flex items-start gap-5 hover:translate-x-1 transition-transform">
                            <div className="p-4 bg-orange-50 rounded-xl text-orange-600 flex-shrink-0">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-black text-lg text-gray-900">Giờ làm việc</p>
                                <p className="text-gray-600 font-bold">T2-T7: 8:00 - 18:00</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-0.5">Chủ nhật nghỉ</p>
                            </div>
                        </div>

                        <div className="p-10 bg-gradient-to-br from-digital-blue to-blue-700 text-white rounded-[32px] shadow-2xl shadow-blue-500/30 text-center relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-black mb-2">Cần hỗ trợ ngay?</h4>
                                <p className="mb-8 opacity-90 font-bold">Chat trực tiếp với chuyên gia tư vấn</p>
                                <a
                                    href="https://zalo.me/0786688149"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-full py-4 bg-white text-digital-blue font-black rounded-2xl hover:bg-orange-500 hover:text-white transition-all shadow-lg"
                                >
                                    Chat ngay trên Zalo
                                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-colors" />
                        </div>
                    </div>

                    {/* Right Column: Consulting Form */}
                    <div className="lg:col-span-3 p-8 md:p-12 bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl shadow-gray-200/50 border border-white">
                        <div className="mb-10 text-left">
                            <h3 className="text-3xl font-black text-gray-900 tracking-tight">Gửi yêu cầu tư vấn</h3>
                            <p className="text-gray-500 mt-2 font-bold">Điền thông tin bên dưới và chúng tôi sẽ liên hệ trong vòng 24 giờ</p>
                        </div>

                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-black uppercase tracking-widest ml-1">Họ và tên *</label>
                                    <input
                                        type="text"
                                        placeholder="Nguyễn Văn A"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-300 focus:bg-white focus:border-digital-blue focus:ring-4 focus:ring-digital-blue/10 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-400 hover:border-gray-400"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-900 uppercase tracking-widest ml-1">Số điện thoại *</label>
                                    <input
                                        type="tel"
                                        placeholder="0123 456 789"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-300 focus:bg-white focus:border-digital-blue focus:ring-4 focus:ring-digital-blue/10 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-400 hover:border-gray-400"
                                        name="phone"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-900 uppercase tracking-widest ml-1">Email *</label>
                                    <input
                                        type="email"
                                        placeholder="example@company.com"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-300 focus:bg-white focus:border-digital-blue focus:ring-4 focus:ring-digital-blue/10 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-400 hover:border-gray-400"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-gray-900 uppercase tracking-widest ml-1">Công ty</label>
                                    <input
                                        type="text"
                                        placeholder="Tên công ty"
                                        className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-300 focus:bg-white focus:border-digital-blue focus:ring-4 focus:ring-digital-blue/10 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-400 hover:border-gray-400"
                                        name="company"
                                    />
                                </div>
                            </div>

                            <div className="space-y-5">
                                <label className="text-sm font-black text-gray-900 uppercase tracking-widest ml-1">Dịch vụ quan tâm</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {services.map((service, idx) => (
                                        <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative">
                                                <input
                                                    type="checkbox"
                                                    className="peer sr-only"
                                                    onChange={() => handleServiceToggle(service)}
                                                />
                                                <div className="w-6 h-6 rounded-lg border-2 border-gray-200 peer-checked:bg-digital-blue peer-checked:border-digital-blue transition-all" />
                                                <svg className="absolute inset-0 w-6 h-6 text-white scale-0 peer-checked:scale-100 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-bold text-gray-600 group-hover:text-digital-blue transition-colors">
                                                {service}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-black text-gray-900 uppercase tracking-widest ml-1">Ngân sách dự kiến</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-300 focus:bg-white focus:border-digital-blue focus:ring-4 focus:ring-digital-blue/10 outline-none transition-all font-bold text-gray-900 appearance-none cursor-pointer hover:border-gray-400">
                                    <option value="" className="text-gray-400">Chọn ngân sách</option>
                                    <option value="Dưới 50 triệu">Dưới 50 triệu</option>
                                    <option value="50 - 100 triệu">50 - 100 triệu</option>
                                    <option value="100 - 500 triệu">100 - 500 triệu</option>
                                    <option value="Trên 500 triệu">Trên 500 triệu</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-black text-gray-900 uppercase tracking-widest ml-1">Mô tả chi tiết dự án</label>
                                <textarea
                                    placeholder="Chia sẻ thêm về mục tiêu, target audience, timeline và những yêu cầu đặc biệt..."
                                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-300 focus:bg-white focus:border-digital-blue focus:ring-4 focus:ring-digital-blue/10 outline-none transition-all font-bold text-gray-900 placeholder:text-gray-400 hover:border-gray-400 min-h-[120px] resize-none"
                                    name="projectDetails"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-digital-blue text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all text-sm uppercase tracking-widest flex items-center justify-center group/btn"
                            >
                                Gửi yêu cầu tư vấn
                                <svg className="ml-2 w-5 h-5 translate-x-0 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>

                            <p className="text-center text-sm font-bold text-gray-500 pt-2">
                                Hoặc gọi ngay <a href="tel:+84 786 688 149" className="text-digital-blue hover:underline">+84 786 688 149</a> để được hỗ trợ trực tiếp
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
}
