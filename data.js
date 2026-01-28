const centersData = [
    {
        id: "funkytown_kyzylorda",
        name: "Funky Town",
        type: "arcade",
        typeName: "Family Park",
        address: "N. Nazarbayev Ave 13a, Arai City Mall",
        phone: "+7 (724) 222-33-44",
        instagram: "https://www.instagram.com/funkytown__qyzylorda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        image: "https://drive.google.com/thumbnail?id=195O8qBYpv9cdXtIS06XtUCfOV0xx4afE&sz=w1000",
        description: "The biggest family entertainment center in Kyzylorda, located in Arai City Mall. Features bumper cars, a large carousel, video arcade games, and a soft play area for toddlers.",
        features: ["Bumper Cars", "Carousel", "Arcade Games", "Soft Play", "Birthdays", "Food"],
        rating: 4.5,
        workingHours: { open: 10, close: 22 },
        coordinates: [44.852, 65.509],
        reviews: [
            { user: "Dana", comment: "Best place for kids in the city!", rating: 5 },
            { user: "Erlan", comment: "Noisy but fun.", rating: 4 }
        ]
    },
    {
        id: "qalqaman",
        name: "Qalqaman Kids Park",
        type: "kids",
        typeName: "Kids Playground",
        address: "Panfilov St 31, Kyzylorda",
        phone: "+7 (777) 111-22-33",
        instagram: "https://www.instagram.com/kids_park_qalqaman_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        image: "https://drive.google.com/thumbnail?id=1IvP5L8CsLqEke6eFIWgsZNznDiWxXT2K&sz=w1000",
        description: "A colorful and safe indoor playground for children. Offers trampolines, slides, ball pits, and dedicated zones for creative play. A favorite spot for local families.",
        features: ["Trampolines", "Slides", "Ball Pits", "Creative Zone"],
        rating: 4.7,
        workingHours: { open: 11, close: 21 },
        coordinates: [44.845, 65.495],
        reviews: [
            { user: "Aizhan", comment: "Very clean and safe staff.", rating: 5 }
        ]
    },
    {
        id: "energy_gaming",
        name: "Energy Gaming Club",
        type: "pc",
        typeName: "Cyber Cafe",
        address: "Abulkhair Khan St 111, Kyzylorda",
        phone: "+7 (775) 555-66-77",
        instagram: "https://www.instagram.com/energy_gaming_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        image: "https://drive.google.com/thumbnail?id=1b-gL4fC9q8BjD8ZKtKvFLGaCMgbx1KgK&sz=w1000",
        description: "Top-tier gaming club for esports enthusiasts. Equipped with powerful PCs, comfortable chairs, and a bar with snacks and energy drinks.",
        features: ["High-End PCs", "Esports", "24/7 Access", "Snacks", "24/7", "Food"],
        rating: 4.6,
        workingHours: { open: 0, close: 24 },
        coordinates: [44.838, 65.520],
        reviews: [
            { user: "GamerKzl", comment: "Good fps, low ping.", rating: 5 }
        ]
    },

    {
        id: "kinoplexx_aray",
        name: "Kinoplexx 8",
        type: "arcade",
        typeName: "Cinema & Arcade",
        address: "N. Nazarbayev Ave 13a, Arai City Mall",
        phone: "+7 (724) 223-45-67",
        instagram: "https://www.instagram.com/kinoplexx8.kyzylorda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        image: "https://drive.google.com/thumbnail?id=1INYu1i1boVbweJA4Oh0OwJcGnaBuqJa3&sz=w1000",
        description: "Modern multiplex cinema with a gaming arcade in the lobby. Watch the latest movies in laser 4K quality and play games while you wait.",
        features: ["Laser Cinema", "Arcade Lobby", "VIP Halls", "Popcorn", "Food", "VIP"],
        rating: 4.8,
        workingHours: { open: 10, close: 2 },
        coordinates: [44.852, 65.509],
        reviews: [
            { user: "Saule", comment: "Best cinema in town.", rating: 5 }
        ]
    },
    {
        id: "hanzada_kzl",
        name: "Hanzada Kids",
        type: "kids",
        typeName: "Kids Center",
        address: "Mangilik Yel 25, Kyzylorda",
        phone: "+7 (777) 000-00-03",
        instagram: "https://www.instagram.com/hanzadakids?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        image: "https://drive.google.com/thumbnail?id=1mvmd6kQMbX3trcyAqOZ0dCzp_ny79MXc&sz=w1000",
        description: "A wonderful place for kids with new game zones, small labyrinths, and plenty of space for running and playing. specialized in children's happiness.",
        features: ["Game Zone", "Labyrinths", "Safe Play", "Toddler Area"],
        rating: 4.6,
        workingHours: { open: 10, close: 22 },
        coordinates: [44.830, 65.490],
        reviews: [
            { user: "Gulnara", comment: "Great for small kids.", rating: 5 }
        ]
    },
    {
        id: "kids_boom",
        name: "Kids Boom",
        type: "kids",
        typeName: "Playground",
        address: "Demesinova St 57a, Kyzylorda",
        phone: "+7 (724) 222-55-88",
        instagram: "https://instagram.com/kids_boom_kzl",
        image: "https://drive.google.com/thumbnail?id=1irOkkL9WNaQKex7CfXmJsUCHPxzPyJws&sz=w1000",
        description: "Bright and cheerful indoor playground with slides, ball pools, and obstacle courses. A perfect spot for burning off energy.",
        features: ["Slides", "Ball Pools", "Obstacle Course", "Party Room"],
        rating: 4.3,
        workingHours: { open: 11, close: 21 },
        coordinates: [44.860, 65.475],
        reviews: [
            { user: "Marat", comment: "Good prices.", rating: 4 }
        ]
    },
    {
        id: "rahat_land",
        name: "Rahat Land",
        type: "arcade",
        typeName: "Family Cafe & Park",
        address: "Kunaeva St 8, Kyzylorda",
        phone: "+7 (705) 333-44-55",
        instagram: "https://www.instagram.com/rahat_land.kzo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        description: "A hybrid family center combining delicious food with fun attractions. Enjoy a meal while the kids play in the supervised game zone.",
        features: ["Family Cafe", "Game Zone", "Events", "Food"],
        rating: 4.5,
        workingHours: { open: 12, close: 23 },
        coordinates: [44.842, 65.488],
        reviews: [
            { user: "Assel", comment: "Delicious pizza and fun games.", rating: 5 }
        ]
    },
    {
        id: "cyber_stack",
        name: "Cyber Stack",
        type: "pc",
        typeName: "PS5 & Lounge",
        address: "Zheltoksan 15, Kyzylorda",
        phone: "+7 (778) 999-00-11",
        instagram: "https://instagram.com/cyber_stack",
        image: "https://drive.google.com/thumbnail?id=10xGeUDxfCoT0Z-UOQP7T1P-2KHKsjI2o&sz=w1000",
        description: "Stylish lounge bar featuring the latest PlayStation 5 consoles, hookahs, and a relaxed atmosphere for evening chill-outs.",
        features: ["PS5 Consoles", "Lounge", "VIP Rooms", "Drinks", "VIP", "PS5", "Food", "24/7"],
        rating: 4.7,
        workingHours: { open: 14, close: 4 },
        coordinates: [44.848, 65.500],
        reviews: [
            { user: "Azamat", comment: "Best place to chill with friends.", rating: 5 }
        ]
    },
    {
        id: "leem_aqua",
        name: "Leem Aqua",
        type: "arcade",
        typeName: "Aqua Park",
        address: "Sultan Beibarys St, Kyzylorda",
        phone: "+7 (724) 229-88-77",
        instagram: "https://www.instagram.com/araypark.kz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        image: "https://drive.google.com/thumbnail?id=1w4F3A2WyXiJVXJ6YhdV9D_4gW0lUgFnK&sz=w1000",
        description: "The city's premier water park. Features water slides, pools for adults and kids, and sunbathing areas. The best way to beat the heat.",
        features: ["Water Slides", "Pools", "Summer Vibe", "Sunbeds", "Food"],
        rating: 4.4,
        workingHours: { open: 11, close: 20 },
        coordinates: [44.825, 65.535],
        reviews: [
            { user: "Dina", comment: "Fun summer spot.", rating: 4 }
        ]
    }
];

const eventsData = [
    {
        title: "FIFA 26 Tournament",
        place: "Cyber Stack",
        date: "This Saturday, 18:00",
        desc: "Win 50,000 KZT! Registration open.",
        badge: "Tournament",
        link: "#"
    },
    {
        title: "50% Off Morning Pass",
        place: "Kids Boom",
        date: "Mon-Fri, 10:00 - 13:00",
        desc: "Half price for all kids under 5.",
        badge: "Promo",
        link: "#"
    },
    {
        title: "VR Horror Night",
        place: "Skillz VR",
        date: "Friday Night",
        desc: "Scariest VR games with friends. Popcorn free.",
        badge: "Event",
        link: "#"
    },
    {
        title: "Student Discount",
        place: "Energy Gaming",
        date: "Everyday",
        desc: "Show student ID and get 1 hour free.",
        badge: "Discount",
        link: "#"
    }
];
