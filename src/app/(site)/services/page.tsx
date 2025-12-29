import Container from '@/components/common/Container';

export default function Services() {
    const services = [
        {
            title: "Influencer Marketing",
            description: "Kết nối thương hiệu với mạng lưới hơn 2000+ KOLs/KOCs đa dạng lĩnh vực.",
            details: ["Nghiên cứu đối tượng", "Lựa chọn Influencer phù hợp", "Quản lý chiến dịch", "Báo cáo hiệu quả"],
            color: "blue"
        },
        {
            title: "Professional Livestream",
            description: "Dịch vụ livestream trọn gói chuyên nghiệp bậc nhất.",
            details: ["10 in-house studios", "Kịch bản bán hàng", "Hệ thống ánh sáng/âm thanh", "Host chuyên nghiệp"],
            color: "violet"
        },
        {
            title: "TikTok & TikTok Shop",
            description: "Giải pháp vận hành và phát triển kênh TikTok toàn diện.",
            details: ["Quản lý tài khoản", "Sản xuất video trending", "Phát triển TikTok Shop", "Tối ưu quảng cáo"],
            color: "pink"
        },
        {
            title: "Creative Production",
            description: "Sản xuất hình ảnh và video chuyên nghiệp cho thương hiệu.",
            details: ["Quay phim/Chụp ảnh", "Hậu kỳ chuyên nghiệp", "Sáng tạo concept", "TVC/Viral Video"],
            color: "orange"
        },
        {
            title: "Press Booking",
            description: "Quảng bá thương hiệu trên các kênh truyền thông lớn.",
            details: ["VnExpress, CafeF, v.v.", "Viết bài PR chuyên sâu", "Quản lý khủng hoảng", "Phát triển thương hiệu"],
            color: "cyan"
        }
    ];

    return (
        <div className="py-20">
            <Container>
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Dịch vụ của chúng tôi</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">Xalo Media cung cấp các giải pháp truyền thông toàn diện, từ chiến lược đến thực thi, giúp thương hiệu kết nối mạnh mẽ với khách hàng.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-2">
                            <div className="w-16 h-16 bg-digital-blue/10 rounded-2xl flex items-center justify-center mb-8 text-digital-blue">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-8 text-lg">{service.description}</p>
                            <ul className="mt-auto space-y-4">
                                {service.details.map((detail, i) => (
                                    <li key={i} className="flex items-center text-[15px] font-semibold text-gray-600">
                                        <svg className="w-5 h-5 mr-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}