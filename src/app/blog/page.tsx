import Container from '@/components/common/Container';

export default function Blog() {
    const posts = [
        {
            title: "Xu hướng Livestream 2024: Điều gì đang thay đổi?",
            category: "Trends",
            date: "Dec 20, 2024"
        },
        {
            title: "Làm thế nào để chọn KOC phù hợp cho chiến dịch TikTok Shop?",
            category: "Influencer",
            date: "Dec 15, 2024"
        },
        {
            title: "Bí quyết tăng tỷ lệ chuyển đổi trong Livestream bán hàng",
            category: "Strategy",
            date: "Dec 10, 2024"
        }
    ];

    return (
        <div className="py-24 min-h-screen">
            <Container>
                <div className="text-center mb-20 space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">Blog</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Cập nhật những tin tức, xu hướng và kiến thức mới nhất về marketing để tối ưu hóa chiến lược kinh doanh của bạn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Xu hướng Livestream 2024: Điều gì đang thay đổi?",
                            category: "Trends",
                            date: "Dec 20, 2024",
                            summary: "Livestream đang trở thành trung tâm của thương mại điện tử. Khám phá những thay đổi quan trọng trong hành vi người dùng và công nghệ livestream năm nay.",
                            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop"
                        },
                        {
                            title: "Làm thế nào để chọn KOC phù hợp cho chiến dịch TikTok Shop?",
                            category: "Influencer",
                            date: "Dec 15, 2024",
                            summary: "Chọn đúng KOC là yếu tố then chốt để bùng nổ doanh số trên TikTok Shop. Tìm hiểu bộ tiêu chí đánh giá KOC chất lượng và thực chiến.",
                            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop"
                        },
                        {
                            title: "Bí quyết tăng tỷ lệ chuyển đổi trong Livestream bán hàng",
                            category: "Strategy",
                            date: "Dec 10, 2024",
                            summary: "Tỷ lệ chuyển đổi thấp là nỗi lo của nhiều nhà bán hàng. Áp dụng ngay 5 bí quyết tâm lý học khách hàng để chốt đơn thần tốc.",
                            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                        },
                        {
                            title: "Xây dựng thương hiệu bền vững trên nền tảng số",
                            category: "Branding",
                            date: "Dec 05, 2024",
                            summary: "Làm thế nào để giữ chân khách hàng trong kỷ nguyên bão hòa thông tin? Chiến lược tập trung vào giá trị cốt lõi và trải nghiệm người dùng.",
                            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                        }
                    ].map((post, idx) => (
                        <div key={idx} className="group flex flex-col h-full bg-white/60 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-grow p-6">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase mb-4 self-start">
                                    {post.category}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-digital-blue transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm line-clamp-3 mb-6">
                                    {post.summary}
                                </p>

                                {/* Meta Section */}
                                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                                        <svg className="w-4 h-4 text-digital-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {post.date}
                                    </div>
                                    <div className="text-digital-blue font-bold text-sm flex items-center group/link">
                                        Đọc thêm
                                        <svg className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}