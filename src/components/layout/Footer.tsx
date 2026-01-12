import Link from 'next/link';
import Container from '../common/Container';
import { FacebookIcon, InstagramIcon, Youtube, Globe, Phone, Mail, MapPin } from 'lucide-react';

async function getSettings() {
    try {
        const res = await fetch('http://localhost:8081/api/v1/settings', {
            next: { revalidate: 60 } // Cache for 1 minute
        });
        const data = await res.json();
        if (data.success) {
            return data.data;
        }
        return null;
    } catch (error) {
        return null;
    }
}

const Footer = async () => {
    const settings = await getSettings();

    const socialLinks = [
        { name: 'Facebook', href: settings?.facebook, icon: FacebookIcon },
        { name: 'Instagram', href: settings?.instagram, icon: InstagramIcon },
        { name: 'YouTube', href: settings?.youtube, icon: Youtube },
        { name: 'TikTok', href: settings?.tiktok, icon: Globe }, // Using Globe as placeholder for TikTok if icon not available
        { name: 'Zalo', href: settings?.zalo, icon: Phone },
    ].filter(link => link.href);

    return (
        <footer className="bg-gray-950 text-gray-300 py-12">
            <Container>
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div>
                        <Link href="/" className="flex items-center mb-4">
                            <span className="text-2xl font-bold text-white tracking-tighter">{settings?.siteName || 'xalo'}<span className="text-digital-blue">{settings?.siteName ? '' : '.media'}</span></span>
                        </Link>
                        <p className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">{settings?.siteDescription || 'Digital Marketing Agency'}</p>
                        <p className="text-sm mb-6 leading-relaxed text-gray-400">
                            Đối tác marketing số đáng tin cậy với hơn 2000 KOLs/KOCs và 100+ talents chuyên nghiệp. Chúng tôi giúp thương hiệu kết nối với khách hàng thông qua các giải pháp marketing hiệu quả.
                        </p>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-center group">
                                <Phone className="h-4 w-4 mr-3 text-digital-blue" />
                                <span>{settings?.phone || '+84 786 688 149'}</span>
                            </div>
                            <div className="flex items-center group">
                                <Mail className="h-4 w-4 mr-3 text-digital-blue" />
                                <span>{settings?.email || 'contact@xalo.media'}</span>
                            </div>
                            <div className="flex items-start group">
                                <MapPin className="h-4 w-4 mr-3 mt-1 text-digital-blue" />
                                <span>{settings?.address || '250 Nguyễn Đình Chính, Phường Phú Nhuận, Thành phố Hồ Chí Minh'}</span>
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
                        <ul className="space-y-3 text-sm mb-8 flex flex-wrap gap-4">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-digital-blue transition-colors" title={link.name}>
                                        <link.icon className="w-6 h-6"/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {/* <div className="inline-block px-4 py-2 border border-gray-800 rounded-lg">
                            <div className="flex items-center text-xs font-bold text-white/50 space-x-2">
                                <img src="/logobct.svg" alt="" />
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="h-px w-full bg-gray-800 my-8" />

                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-2">
                             <Mail className="h-5 w-5 mr-2 text-digital-blue" />
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
                    <p className="mb-4 sm:mb-0">© {new Date().getFullYear()} {settings?.siteName || 'XALO.MEDIA'}. All rights reserved. Designed with &lt;3 in Vietnam</p>
                    <div className="flex items-center gap-4">
                        {socialLinks.slice(0, 2).map((link) => (
                             <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-900 hover:text-white rounded-lg transition-all">
                                <link.icon className="w-5 h-5" />
                             </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
