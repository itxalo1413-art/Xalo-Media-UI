import Container from '@/components/common/Container';

export default function About() {
    return (
        <div className="flex flex-col gap-24 py-20">
            <section>
                <Container>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
                            Chúng tôi là <span className="text-digital-blue">Xalo Media</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                            Xalo Media là một Creative Agency chuyên về tăng trưởng có thể đo lường và truyền thông chiến lược. Chúng tôi coi hiệu quả là ưu tiên hàng đầu.
                        </p>
                    </div>
                </Container>
            </section>

            <Container>
                <div className="space-y-32 text-left">
                    {/* Mission Section */}
                    <section className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="md:order-2">
                            <img
                                alt="Our Mission"
                                className="rounded-[32px] shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                            />
                        </div>
                        <div className="md:order-1 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 flex items-center gap-4">
                                <div className="p-3 bg-digital-blue/10 rounded-2xl text-digital-blue">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                                </div>
                                Sứ mệnh của chúng tôi
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Tại Xa Lộ Media, sứ mệnh của chúng tôi là trở thành đối tác chiến lược đáng tin cậy, cung cấp các giải pháp marketing toàn diện và sáng tạo, giúp doanh nghiệp Việt Nam phát triển bền vững và vươn tầm quốc tế. Chúng tôi cam kết mang lại giá trị thực sự, tối ưu hóa hiệu quả đầu tư và xây dựng mối quan hệ lâu dài với khách hàng.
                            </p>
                        </div>
                    </section>

                    {/* Vision Section */}
                    <section className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <img
                                alt="Our Vision"
                                className="rounded-[32px] shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2670&auto=format&fit=crop"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 flex items-center gap-4">
                                <div className="p-3 bg-orange-100 rounded-2xl text-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                                </div>
                                Tầm nhìn của chúng tôi
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                Chúng tôi hướng tới việc trở thành công ty Digital Marketing hàng đầu tại Việt Nam, tiên phong trong việc ứng dụng công nghệ và các xu hướng mới nhất để tạo ra những chiến dịch đột phá. Xa Lộ Media sẽ là cầu nối vững chắc giữa thương hiệu và khách hàng, góp phần định hình tương lai của ngành marketing số.
                            </p>
                        </div>
                    </section>

                    {/* Core Values Section */}
                    <section className="text-center py-10">
                        <div className="mb-16 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 flex items-center justify-center gap-4">
                                <div className="p-3 bg-green-100 rounded-2xl text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
                                </div>
                                Giá trị cốt lõi
                            </h2>
                            <p className="text-gray-500 text-lg font-medium">Những nguyên tắc định hướng mọi quyết định và hành động của chúng tôi.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Sáng tạo không ngừng",
                                    desc: "Luôn tìm kiếm những ý tưởng mới, đột phá để mang lại hiệu quả tối ưu cho khách hàng.",
                                    color: "bg-blue-500"
                                },
                                {
                                    title: "Chuyên nghiệp & Tận tâm",
                                    desc: "Làm việc với tinh thần trách nhiệm cao nhất, đặt lợi ích khách hàng lên hàng đầu.",
                                    color: "bg-orange-500"
                                },
                                {
                                    title: "Hiệu quả & Minh bạch",
                                    desc: "Cam kết mang lại kết quả rõ ràng, đo lường được và báo cáo minh bạch.",
                                    color: "bg-green-500"
                                }
                            ].map((value, idx) => (
                                <div key={idx} className="p-10 bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-left hover:shadow-2xl transition-all group">
                                    <div className={`w-12 h-1.5 ${value.color} rounded-full mb-8 group-hover:w-20 transition-all`} />
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{value.title}</h3>
                                    <p className="text-gray-500 leading-relaxed font-medium">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </Container>
        </div>
    );
}