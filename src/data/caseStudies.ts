
export interface CaseStudy {
    slug: string;
    category: string;
    brand: string;
    title: string;
    desc: string;
    date: string;
    image: string;
    challenge: string;
    solution: string;
    results: string[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
    gallery?: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        slug: "tang-gap-doi-ty-le-chuyen-doi-nho-livestream",
        category: "Thời trang",
        brand: "Local Brand X",
        title: "Tăng Gấp Đôi Tỷ Lệ Chuyển Đổi Cho Thương Hiệu Thời Trang Nhờ Livestream",
        desc: "Cách một thương hiệu thời trang local brand bứt phá doanh thu với chuỗi sự kiện livestream kết hợp KOCs trên TikTok Shop.",
        date: "30/08/2025",
        image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2670&auto=format&fit=crop",
        challenge: "Thương hiệu gặp khó khăn trong việc chuyển đổi traffic từ social media thành đơn hàng thực tế. Chi phí ads tăng cao nhưng ROAS thấp, tồn kho lớn.",
        solution: "Xalo Media triển khai chiến lược 'Shoppertainment' với chuỗi livestream hàng ngày trên TikTok Shop và Facebook. Tuyển chọn 5 KOCs phù hợp với brand image để host livestream, kết hợp minigame và flash sale độc quyền.",
        results: [
            "Tăng 250% doanh thu trong tháng đầu tiên triển khai.",
            "Tỷ lệ chuyển đổi (CR) tăng từ 1.5% lên 3.8% trong các phiên live.",
            "Giảm 40% chi phí quảng cáo chuyển đổi.",
            "Xả thành công 80% lượng hàng tồn kho mùa cũ."
        ],
        testimonial: {
            quote: "Doanh số của chúng tôi chưa bao giờ bùng nổ như vậy. Đội ngũ Xalo Media thực sự hiểu rõ cách vận hành livestream hiệu quả.",
            author: "Ms. Lan Anh",
            role: "Marketing Director"
        }
    },
    {
        slug: "chien-dich-ra-mat-san-pham-moi-cung-kols",
        category: "Mỹ phẩm",
        brand: "Beauty Z",
        title: "Chiến Dịch Ra Mắt Sản Phẩm Mới Cùng KOLs Đa Nền Tảng",
        desc: "Chiến lược booking KOLs thông minh giúp thương hiệu mỹ phẩm mới tiếp cận 5 triệu khách hàng tiềm năng chỉ trong 2 tuần.",
        date: "15/07/2025",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2574&auto=format&fit=crop",
        challenge: "Là thương hiệu mới, chưa có độ nhận diện trên thị trường. Cần tạo lòng tin với khách hàng về chất lượng sản phẩm trong thời gian ngắn.",
        solution: "Booking 20 Beauty Bloggers uy tín review chi tiết trên đa nền tảng (YouTube, TikTok, Instagram). Tập trung vào nội dung 'Test thực tế' và 'Before/After' để chứng minh hiệu quả sản phẩm.",
        results: [
            "Tiếp cận 5.2 triệu người dùng unique trên các nền tảng.",
            "Đạt Top 1 sản phẩm bán chạy nhất ngành hàng trên Shopee trong tuần ra mắt.",
            "Hơn 10,000 lượt thảo luận tích cực trên mạng xã hội.",
            "Sold out đợt hàng đầu tiên sau 3 ngày."
        ],
        testimonial: {
            quote: "Sự chuyên nghiệp trong việc lựa chọn KOLs của Xalo Media đã giúp chúng tôi tiết kiệm thời gian và đạt hiệu quả vượt mong đợi.",
            author: "Mr. Minh Hoàng",
            role: "CEO Founder"
        }
    },
    {
        slug: "xay-dung-cong-dong-cho-ung-dung-giao-duc",
        category: "Giáo dục & Công nghệ",
        brand: "EduTech App",
        title: "Xây Dựng Cộng Đồng 100,000 Thành Viên Cho Ứng Dụng Giáo Dục",
        desc: "Hành trình xây dựng và nuôi dưỡng cộng đồng người học sôi nổi từ con số 0, tạo nền tảng vững chắc cho tăng trưởng bền vững.",
        date: "02/06/2025",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop",
        challenge: "User tải app xong không quay lại sử dụng (Retention rate thấp). Thiếu không gian để người dùng tương tác và chia sẻ kết quả học tập.",
        solution: "Xây dựng Group Facebook 'Cộng đồng tự rèn luyện tiếng Anh' với các hoạt động thử thách mỗi ngày (Daily Challenge). Sử dụng Gamification để thưởng huy hiệu và quà tặng cho thành viên tích cực.",
        results: [
            "Cán mốc 100,000 thành viên active sau 6 tháng.",
            "Tỷ lệ retention rate trên app tăng từ 15% lên 45%.",
            "Giảm 60% chi phí User Acquisition (UA) nhờ hiệu ứng Viral Word-of-Mouth.",
            "Trở thành một trong những cộng đồng giáo dục sôi nổi nhất năm."
        ]
    }
];
