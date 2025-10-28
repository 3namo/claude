// 津田沼駅周辺の施設データ
const tsudanumaData = {
    // 中心座標（津田沼駅）
    center: {
        lat: 35.6916,
        lng: 140.0211,
        zoom: 15
    },

    // 施設データ
    facilities: [
        // 駅・交通
        {
            id: 1,
            name: "津田沼駅（JR総武線）",
            category: "station",
            lat: 35.6916,
            lng: 140.0211,
            description: "JR総武線の駅。快速停車駅で、東京都心へのアクセスが便利です。",
            icon: "🚉"
        },
        {
            id: 2,
            name: "新津田沼駅（新京成線）",
            category: "station",
            lat: 35.6891,
            lng: 140.0242,
            description: "新京成線の駅。津田沼駅から徒歩圏内です。",
            icon: "🚊"
        },

        // ショッピング
        {
            id: 3,
            name: "イオンモール津田沼",
            category: "shopping",
            lat: 35.6851,
            lng: 140.0267,
            description: "大型ショッピングモール。多数の専門店、レストラン、映画館を併設。",
            icon: "🏬"
        },
        {
            id: 4,
            name: "津田沼パルコ（パルコB館）",
            category: "shopping",
            lat: 35.6928,
            lng: 140.0194,
            description: "駅直結のファッションビル。若者向けショップが多数入居。",
            icon: "🛍️"
        },
        {
            id: 5,
            name: "モリシア津田沼",
            category: "shopping",
            lat: 35.6905,
            lng: 140.0221,
            description: "津田沼駅南口の商業施設。飲食店や雑貨店が充実。",
            icon: "🏢"
        },

        // 教育機関
        {
            id: 6,
            name: "千葉工業大学 津田沼キャンパス",
            category: "education",
            lat: 35.6893,
            lng: 140.0354,
            description: "理工系総合大学。先端技術の研究開発を行っています。",
            icon: "🎓"
        },
        {
            id: 7,
            name: "日本大学生産工学部",
            category: "education",
            lat: 35.6965,
            lng: 140.0311,
            description: "工学系の学部。実習施設が充実しています。",
            icon: "🏫"
        },

        // 医療機関
        {
            id: 8,
            name: "谷津保健病院",
            category: "medical",
            lat: 35.6843,
            lng: 140.0189,
            description: "地域の中核病院。救急医療にも対応。",
            icon: "🏥"
        },
        {
            id: 9,
            name: "習志野第一病院",
            category: "medical",
            lat: 35.6938,
            lng: 140.0312,
            description: "総合病院。各種専門外来を設置。",
            icon: "🏥"
        },

        // 公共施設
        {
            id: 10,
            name: "習志野市役所",
            category: "public",
            lat: 35.6823,
            lng: 140.0265,
            description: "習志野市の行政機関。各種証明書の発行や手続きが可能。",
            icon: "🏛️"
        },
        {
            id: 11,
            name: "習志野市立図書館",
            category: "public",
            lat: 35.6948,
            lng: 140.0178,
            description: "公立図書館。蔵書が豊富で学習スペースも完備。",
            icon: "📚"
        },
        {
            id: 12,
            name: "習志野文化ホール",
            category: "public",
            lat: 35.6883,
            lng: 140.0158,
            description: "音楽会や演劇公演などが開催される文化施設。",
            icon: "🎭"
        },

        // 公園
        {
            id: 13,
            name: "谷津公園",
            category: "park",
            lat: 35.6872,
            lng: 140.0125,
            description: "広大な敷地を持つ公園。バラ園が有名です。",
            icon: "🌳"
        },
        {
            id: 14,
            name: "谷津干潟",
            category: "park",
            lat: 35.6762,
            lng: 140.0089,
            description: "ラムサール条約登録湿地。野鳥観察の名所。",
            icon: "🦆"
        },
        {
            id: 15,
            name: "袖ケ浦公園",
            category: "park",
            lat: 35.6763,
            lng: 140.0312,
            description: "自然豊かな公園。散策路や池があります。",
            icon: "🌲"
        },

        // その他主要施設
        {
            id: 16,
            name: "ヤマダデンキ LABI津田沼",
            category: "shopping",
            lat: 35.6917,
            lng: 140.0183,
            description: "大型家電量販店。幅広い商品を取り扱い。",
            icon: "🔌"
        },
        {
            id: 17,
            name: "京成津田沼駅",
            category: "station",
            lat: 35.6998,
            lng: 140.0214,
            description: "京成本線の駅。成田空港へのアクセスが便利。",
            icon: "🚃"
        }
    ]
};

// カテゴリ設定
const categoryConfig = {
    station: {
        name: "駅・交通",
        color: "#E53935",
        icon: "🚉"
    },
    shopping: {
        name: "ショッピング",
        color: "#FB8C00",
        icon: "🛍️"
    },
    education: {
        name: "教育機関",
        color: "#43A047",
        icon: "🎓"
    },
    medical: {
        name: "医療機関",
        color: "#1E88E5",
        icon: "🏥"
    },
    public: {
        name: "公共施設",
        color: "#8E24AA",
        icon: "🏛️"
    },
    park: {
        name: "公園",
        color: "#00897B",
        icon: "🌳"
    }
};
