import Link from 'next/link';
import Container from '../common/Container';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 py-12">
            <Container>
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div>
                        <Link href="/" className="flex items-center mb-4">
                            <span className="text-2xl font-bold text-white tracking-tighter">xalo<span className="text-digital-blue">.media</span></span>
                        </Link>
                        <p className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">Digital Marketing Agency</p>
                        <p className="text-sm mb-6 leading-relaxed text-gray-400">
                            Đối tác marketing số đáng tin cậy với hơn 2000 KOLs/KOCs và 100+ talents chuyên nghiệp. Chúng tôi giúp thương hiệu kết nối với khách hàng thông qua các giải pháp marketing hiệu quả.
                        </p>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-center group">
                                <svg className="h-4 w-4 mr-3 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>+84 786 688 149</span>
                            </div>
                            <div className="flex items-center group">
                                <svg className="h-4 w-4 mr-3 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>contact@xalo.media</span>
                            </div>
                            <div className="flex items-start group">
                                <svg className="h-4 w-4 mr-3 mt-1 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>250 Nguyễn Đình Chính, Phường Phú Nhuận, Thành phố Hồ Chí Minh</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">Dịch vụ</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/services" className="hover:text-digital-blue transition-colors">Influencer Marketing</Link></li>
                            <li><Link href="/services" className="hover:text-digital-blue transition-colors">TikTok Management</Link></li>
                            <li><Link href="/services" className="hover:text-digital-blue transition-colors">Livestream Services</Link></li>
                            <li><Link href="/services" className="hover:text-digital-blue transition-colors">Talent Booking</Link></li>
                            <li><Link href="/services" className="hover:text-digital-blue transition-colors">Content Creation</Link></li>
                            <li><Link href="/services" className="hover:text-digital-blue transition-colors">Brand Partnership</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">Công ty</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-digital-blue transition-colors">Về chúng tôi</Link></li>
                            <li><Link href="/case-studies" className="hover:text-digital-blue transition-colors">Case Studies</Link></li>
                            <li><Link href="/networks" className="hover:text-digital-blue transition-colors">Network KOLs</Link></li>
                            <li><Link href="/careers" className="hover:text-digital-blue transition-colors">Tuyển dụng</Link></li>
                            <li><Link href="/blog" className="hover:text-digital-blue transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-digital-blue transition-colors">Liên hệ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 tracking-tight">Theo dõi chúng tôi</h3>
                        <ul className="space-y-3 text-sm mb-8">
                            <li><a href="#" className="hover:text-digital-blue transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-digital-blue transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-digital-blue transition-colors">Youtube</a></li>
                            <li><a href="#" className="hover:text-digital-blue transition-colors">Zalo</a></li>
                        </ul>
                        <div className="inline-block px-4 py-2 border border-gray-800 rounded-lg">
                            <div className="flex items-center text-xs font-bold text-white/50 space-x-2">
                                <img src="logobct.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-gray-800 my-8" />

                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-2">
                            <svg className="h-5 w-5 mr-2 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l2 2h4a2 2 0 012 2v10a2 2 0 01-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 18h-5M18 14h-8" /><rect width="8" height="4" x="10" y="6" rx="1" /></svg>
                            <h4 className="text-lg font-bold text-white tracking-tight">Đăng ký nhận tin tức mới nhất</h4>
                        </div>
                        <p className="text-sm text-gray-500">Cập nhật xu hướng marketing, case study và tips từ chuyên gia</p>
                    </div>
                    <form className="flex w-full md:w-auto max-w-md gap-3">
                        <input
                            className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 px-4 py-3 rounded-xl outline-none focus:border-digital-blue border transition-all flex-1 min-w-[240px]"
                            placeholder="Nhập email của bạn"
                            type="email"
                        />
                        <button className="bg-digital-blue hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap">
                            Đăng ký
                        </button>
                    </form>
                </div>

                <div className="h-px w-full bg-gray-800 my-8" />

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
                    <p className="mb-4 sm:mb-0">© {new Date().getFullYear()} XALO.MEDIA. All rights reserved. Designed with &lt;3 in Vietnam</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="p-2 hover:bg-gray-900 hover:text-white rounded-lg transition-all"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                        <a href="#" className="p-2 hover:bg-gray-900 hover:text-white rounded-lg transition-all"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.57 1.644-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                        <a href="#" className="p-2 hover:bg-gray-900 hover:text-white rounded-lg transition-all"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-3.897 3.82-.384 10.12 1.402 2.515 2.513 4.218 4.218 4.218.455 0 .81-.36.81-.82 0-.306-.168-.57-.423-.7l-2.023-1.02a.81.81 0 0 1-.41-.703v-4.66a.81.81 0 0 1 .81-.81h1.61a.81.81 0 0 1 .81.81v4.66c0 .324-.194.62-.493.743l-2.12 1.07c-1.282.646-1.5 2.12-.416 3.104 2.106 1.906 6.146 1.906 8.252 0 1.083-.984.866-2.458-.417-3.104l-2.12-1.07a.81.81 0 0 1-.493-.743v-4.66a.81.81 0 0 1 .81-.81h1.61c.447 0 .81.363.81.81v4.66c0 .327-.197.624-.498.745l-2.016 1.016a.81.81 0 0 1-.41.71v3.076l.163.163c.53.53 1.39.53 1.92 0 2.227-2.227 4.093-6.136 4.093-10.12 0-3.376-.005-4.102-.385-4.364z" /></svg></a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
