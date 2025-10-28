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
            icon: "🚉",
            address: "千葉県習志野市津田沼1丁目",
            hours: "始発〜終電",
            phone: "047-472-0171",
            website: "https://www.jreast.co.jp/estation/station/info.aspx?StationCd=1382"
        },
        {
            id: 2,
            name: "新津田沼駅（新京成線）",
            category: "station",
            lat: 35.6891,
            lng: 140.0242,
            description: "新京成線の駅。津田沼駅から徒歩圏内です。",
            icon: "🚊",
            address: "千葉県習志野市津田沼1丁目10-30",
            hours: "始発〜終電",
            phone: "047-472-1169",
            website: "https://www.shinkeisei.co.jp/railway/station/shin-tsudanuma/"
        },

        // ショッピング
        {
            id: 3,
            name: "イオンモール津田沼",
            category: "shopping",
            lat: 35.6851,
            lng: 140.0267,
            description: "大型ショッピングモール。多数の専門店、レストラン、映画館を併設。",
            icon: "🏬",
            address: "千葉県習志野市津田沼1丁目23-1",
            hours: "10:00〜21:00（店舗により異なる）",
            phone: "047-455-1000",
            website: "https://tsudanuma-aeonmall.com/"
        },
        {
            id: 4,
            name: "津田沼パルコ（パルコB館）",
            category: "shopping",
            lat: 35.6928,
            lng: 140.0194,
            description: "駅直結のファッションビル。若者向けショップが多数入居。",
            icon: "🛍️",
            address: "千葉県船橋市前原西2-18-1",
            hours: "10:00〜21:00",
            phone: "047-474-1111",
            website: "https://tsudanuma.parco.jp/"
        },
        {
            id: 5,
            name: "モリシア津田沼",
            category: "shopping",
            lat: 35.6905,
            lng: 140.0221,
            description: "津田沼駅南口の商業施設。飲食店や雑貨店が充実。",
            icon: "🏢",
            address: "千葉県習志野市谷津1丁目16-1",
            hours: "10:00〜20:00（店舗により異なる）",
            phone: "047-470-1231",
            website: "https://www.moritown-tsudanuma.com/"
        },

        // 教育機関
        {
            id: 6,
            name: "千葉工業大学 津田沼キャンパス",
            category: "education",
            lat: 35.6893,
            lng: 140.0354,
            description: "理工系総合大学。先端技術の研究開発を行っています。",
            icon: "🎓",
            address: "千葉県習志野市津田沼2丁目17-1",
            hours: "平日 8:00〜22:00",
            phone: "047-478-0222",
            website: "https://www.it-chiba.ac.jp/"
        },
        {
            id: 7,
            name: "日本大学生産工学部",
            category: "education",
            lat: 35.6965,
            lng: 140.0311,
            description: "工学系の学部。実習施設が充実しています。",
            icon: "🏫",
            address: "千葉県習志野市泉町1丁目2-1",
            hours: "平日 8:30〜18:00",
            phone: "047-474-2201",
            website: "https://www.cit.nihon-u.ac.jp/"
        },

        // 医療機関
        {
            id: 8,
            name: "谷津保健病院",
            category: "medical",
            lat: 35.6843,
            lng: 140.0189,
            description: "地域の中核病院。救急医療にも対応。",
            icon: "🏥",
            address: "千葉県習志野市谷津4丁目6-16",
            hours: "月〜金 8:30〜17:00／土 8:30〜12:00",
            phone: "047-451-6000",
            website: "https://www.yatsu.or.jp/"
        },
        {
            id: 9,
            name: "習志野第一病院",
            category: "medical",
            lat: 35.6938,
            lng: 140.0312,
            description: "総合病院。各種専門外来を設置。",
            icon: "🏥",
            address: "千葉県習志野市津田沼5丁目5-25",
            hours: "月〜土 8:30〜17:00",
            phone: "047-454-1511",
            website: "https://www.narashino-hp.or.jp/"
        },

        // 公共施設
        {
            id: 10,
            name: "習志野市役所",
            category: "public",
            lat: 35.6823,
            lng: 140.0265,
            description: "習志野市の行政機関。各種証明書の発行や手続きが可能。",
            icon: "🏛️",
            address: "千葉県習志野市鷺沼2丁目1-1",
            hours: "月〜金 8:30〜17:15",
            phone: "047-451-1151",
            website: "https://www.city.narashino.lg.jp/"
        },
        {
            id: 11,
            name: "習志野市立図書館",
            category: "public",
            lat: 35.6948,
            lng: 140.0178,
            description: "公立図書館。蔵書が豊富で学習スペースも完備。",
            icon: "📚",
            address: "千葉県習志野市谷津5丁目16-33",
            hours: "火〜金 9:00〜20:00／土日 9:00〜17:00",
            phone: "047-475-3213",
            website: "https://www.lib.narashino.chiba.jp/"
        },
        {
            id: 12,
            name: "習志野文化ホール",
            category: "public",
            lat: 35.6883,
            lng: 140.0158,
            description: "音楽会や演劇公演などが開催される文化施設。",
            icon: "🎭",
            address: "千葉県習志野市谷津1丁目16-1",
            hours: "9:00〜22:00",
            phone: "047-479-1212",
            website: "https://www.narashino-bunka.or.jp/"
        },

        // 公園
        {
            id: 13,
            name: "谷津公園",
            category: "park",
            lat: 35.6872,
            lng: 140.0125,
            description: "広大な敷地を持つ公園。バラ園が有名です。",
            icon: "🌳",
            address: "千葉県習志野市谷津3丁目1-14",
            hours: "24時間開放（バラ園: 9:00〜17:00）",
            phone: "047-453-9297",
            website: "https://www.city.narashino.lg.jp/citysales/kanko/kankospot/yatsubaraen.html"
        },
        {
            id: 14,
            name: "谷津干潟",
            category: "park",
            lat: 35.6762,
            lng: 140.0089,
            description: "ラムサール条約登録湿地。野鳥観察の名所。",
            icon: "🦆",
            address: "千葉県習志野市谷津3丁目",
            hours: "24時間開放（自然観察センター: 9:00〜17:00）",
            phone: "047-454-8416",
            website: "https://www.yatsuhigata.jp/"
        },
        {
            id: 15,
            name: "袖ケ浦公園",
            category: "park",
            lat: 35.6763,
            lng: 140.0312,
            description: "自然豊かな公園。散策路や池があります。",
            icon: "🌲",
            address: "千葉県習志野市袖ケ浦5丁目4",
            hours: "24時間開放",
            phone: "047-453-9297",
            website: "https://www.city.narashino.lg.jp/"
        },

        // その他主要施設
        {
            id: 16,
            name: "ヤマダデンキ LABI津田沼",
            category: "shopping",
            lat: 35.6917,
            lng: 140.0183,
            description: "大型家電量販店。幅広い商品を取り扱い。",
            icon: "🔌",
            address: "千葉県船橋市前原西2-19-1",
            hours: "10:00〜21:00",
            phone: "047-493-1010",
            website: "https://www.yamada-denki.jp/store/contents/?d=3020"
        },
        {
            id: 17,
            name: "京成津田沼駅",
            category: "station",
            lat: 35.6998,
            lng: 140.0214,
            description: "京成本線の駅。成田空港へのアクセスが便利。",
            icon: "🚃",
            address: "千葉県習志野市津田沼5丁目11-1",
            hours: "始発〜終電",
            phone: "047-476-1125",
            website: "https://www.keisei.co.jp/keisei/tetudou/accessj/keisei-tsudanuma.htm"
        },

        // 防災施設（オープンデータ）
        {
            id: 18,
            name: "習志野市立第一中学校（避難所）",
            category: "disaster",
            lat: 35.6885,
            lng: 140.0245,
            description: "指定避難所。災害時の避難場所として利用可能です。",
            icon: "🛡️",
            address: "千葉県習志野市津田沼2丁目3-1",
            hours: "災害時のみ開設",
            phone: "047-451-1151（市役所）",
            website: "https://www.city.narashino.lg.jp/"
        },
        {
            id: 19,
            name: "習志野市立津田沼小学校（避難所）",
            category: "disaster",
            lat: 35.6925,
            lng: 140.0265,
            description: "指定避難所。体育館などが避難スペースとなります。",
            icon: "🛡️",
            address: "千葉県習志野市津田沼4丁目5-1",
            hours: "災害時のみ開設",
            phone: "047-451-1151（市役所）",
            website: "https://www.city.narashino.lg.jp/"
        },
        {
            id: 20,
            name: "習志野市消防本部",
            category: "disaster",
            lat: 35.6868,
            lng: 140.0298,
            description: "習志野市の消防本部。火災・救急対応を行っています。",
            icon: "🚒",
            address: "千葉県習志野市津田沼5丁目15-1",
            hours: "24時間",
            phone: "119（緊急）/ 047-452-1283（代表）",
            website: "https://www.city.narashino.lg.jp/"
        },
        {
            id: 21,
            name: "谷津遊路公園（避難場所）",
            category: "disaster",
            lat: 35.6805,
            lng: 140.0195,
            description: "一時避難場所として指定されている公園です。",
            icon: "🟢",
            address: "千葉県習志野市谷津5丁目",
            hours: "24時間開放",
            phone: "047-451-1151（市役所）",
            website: "https://www.city.narashino.lg.jp/"
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
    },
    disaster: {
        name: "防災施設",
        color: "#D32F2F",
        icon: "🛡️"
    }
};
