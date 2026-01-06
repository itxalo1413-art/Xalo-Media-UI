export interface KOL {
    slug: string;
    name: string;
    niche: string;
    img: string;
    rating: string;
    followers: string;
    engagement: string;
    views: string;
    success: string;
    platforms: string[];
    tags: string[];
    description: string;
}

export const KOLS: KOL[] = [
    {
        slug: "ninh-tito",
        name: "Ninh Tito",
        niche: "Ẩm thực",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
        rating: "4.9",
        followers: "750K",
        engagement: "10%",
        views: "800K",
        success: "98%",
        platforms: ["youtube", "instagram", "facebook"],
        tags: ["Food Review", "Travel", "Cooking"],
        description: "Ninh Tito là một trong những Food Blogger đời đầu tại Việt Nam, nổi tiếng với phong cách review chân thực, hóm hỉnh và những thước phim ẩm thực chất lượng cao."
    },
    {
        slug: "an-nhien",
        name: "An Nhiên",
        niche: "Food Blogger",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
        rating: "4.9",
        followers: "950K",
        engagement: "6.5%",
        views: "250K",
        success: "97%",
        platforms: ["tiktok", "instagram", "youtube"],
        tags: ["ẩm thực", "review quán ăn", "nấu ăn"],
        description: "An Nhiên đưa người xem vào hành trình khám phá ẩm thực khắp Việt Nam qua những video review hấp dẫn và công thức nấu ăn độc đáo."
    },
    {
        slug: "tuan-anh",
        name: "Tuấn Anh",
        niche: "Tech Reviewer",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2570&auto=format&fit=crop",
        rating: "5.0",
        followers: "1.5M",
        engagement: "4.8%",
        views: "500K",
        success: "98%",
        platforms: ["youtube"],
        tags: ["công nghệ", "review điện thoại", "đồ high-tech"],
        description: "Tuấn Anh là chuyên gia review công nghệ uy tín, mang đến những đánh giá khách quan và chuyên sâu về các sản phẩm công nghệ mới nhất."
    },
    {
        slug: "phuong-vy",
        name: "Phương Vy",
        niche: "Travel",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop",
        rating: "4.8",
        followers: "780K",
        engagement: "8.2%",
        views: "200K",
        success: "96%",
        platforms: ["instagram", "youtube"],
        tags: ["du lịch", "khám phá", "vlog"],
        description: "Phương Vy truyền cảm hứng du lịch thông qua những khung hình tuyệt đẹp và những câu chuyện khám phá văn hóa đầy thú vị từ các vùng đất mới."
    },
    {
        slug: "linh-ka",
        name: "Linh Ka",
        niche: "Lifestyle",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2574&auto=format&fit=crop",
        rating: "4.7",
        followers: "2.3M",
        engagement: "5.2%",
        views: "1.2M",
        success: "95%",
        platforms: ["tiktok", "instagram"],
        tags: ["Lifestyle", "Fashion", "Music"],
        description: "Linh Ka là biểu tượng phong cách sống của giới trẻ, sở hữu lượng fan đông đảo nhờ gu thẩm mỹ hiện đại và phong cách thời trang dẫn đầu xu hướng."
    },
    {
        slug: "quang-dang",
        name: "Quang Đăng",
        niche: "Dancer",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
        rating: "4.9",
        followers: "1.2M",
        engagement: "7.1%",
        views: "900K",
        success: "99%",
        platforms: ["tiktok", "youtube", "facebook"],
        tags: ["Dance", "Choreography", "Fitness"],
        description: "Quang Đăng là biên đạo múa tài năng, nổi tiếng với những bài nhảy trending mang thông điệp tích cực, lan tỏa năng lượng đến cộng đồng thông qua vũ đạo."
    },
    {
        slug: "thanh-tran",
        name: "Thanh Trần",
        niche: "Comedy",
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop",
        rating: "4.8",
        followers: "1.8M",
        engagement: "8.5%",
        views: "2.5M",
        success: "96%",
        platforms: ["facebook", "tiktok"],
        tags: ["Comedy", "Family", "Daily Vlog"],
        description: "Thanh Trần mang lại tiếng cười cho hàng triệu người xem qua những video hài hước, đời thường về gia đình và cuộc sống hàng ngày."
    },
    {
        slug: "chau-bui",
        name: "Châu Bùi",
        niche: "Fashion",
        img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=2574&auto=format&fit=crop",
        rating: "5.0",
        followers: "3.5M",
        engagement: "6.2%",
        views: "1.5M",
        success: "98%",
        platforms: ["instagram", "tiktok", "youtube"],
        tags: ["Fashion", "High-end", "Lifestyle"],
        description: "Châu Bùi là fashionista hàng đầu Việt Nam, thường xuyên góp mặt tại các sự kiện thời trang quốc tế và là đại diện cho nhiều thương hiệu xa xỉ."
    }
];
