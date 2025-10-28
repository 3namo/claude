// 総武線沿線（千葉〜市川）の施設データ
const tsudanumaData = {
    // 中心座標（総武線沿線の中央付近）
    center: {
        lat: 35.6800,
        lng: 140.0000,
        zoom: 12
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
        },

        // ========== 千葉駅エリア ==========
        {
            id: 22,
            name: "千葉駅（JR総武線）",
            category: "station",
            lat: 35.6073,
            lng: 140.1063,
            description: "千葉県の中心駅。総武線、総武快速線、成田線、外房線、内房線が乗り入れ。",
            icon: "🚉",
            address: "千葉県千葉市中央区新千葉1丁目",
            hours: "始発〜終電",
            phone: "043-222-0145",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 23,
            name: "ペリエ千葉",
            category: "shopping",
            lat: 35.6075,
            lng: 140.1065,
            description: "千葉駅直結の大型駅ビル。ファッション、雑貨、グルメが充実。",
            icon: "🏬",
            address: "千葉県千葉市中央区新千葉1-1-1",
            hours: "10:00〜21:00（店舗により異なる）",
            phone: "043-227-8201",
            website: "https://www.perie.co.jp/chiba/"
        },
        {
            id: 24,
            name: "そごう千葉店",
            category: "shopping",
            lat: 35.6089,
            lng: 140.1075,
            description: "老舗百貨店。品質の高い商品とサービスを提供。",
            icon: "🛍️",
            address: "千葉県千葉市中央区新町1000",
            hours: "10:00〜20:00",
            phone: "043-245-2111",
            website: "https://www.sogo-seibu.jp/chiba/"
        },
        {
            id: 25,
            name: "千葉市役所",
            category: "public",
            lat: 35.6063,
            lng: 140.1124,
            description: "千葉市の行政機関。市民サービスを提供。",
            icon: "🏛️",
            address: "千葉県千葉市中央区千葉港1-1",
            hours: "月〜金 8:30〜17:30",
            phone: "043-245-5111",
            website: "https://www.city.chiba.jp/"
        },
        {
            id: 26,
            name: "千葉公園",
            category: "park",
            lat: 35.6178,
            lng: 140.1189,
            description: "広大な都市公園。ボート池や日本庭園があります。",
            icon: "🌳",
            address: "千葉県千葉市中央区弁天3-1-1",
            hours: "24時間開放",
            phone: "043-251-5103",
            website: "https://www.city.chiba.jp/"
        },

        // ========== 西千葉駅エリア ==========
        {
            id: 27,
            name: "西千葉駅（JR総武線）",
            category: "station",
            lat: 35.6233,
            lng: 140.1064,
            description: "千葉大学の最寄り駅。学生街として栄えています。",
            icon: "🚉",
            address: "千葉県千葉市中央区春日2丁目",
            hours: "始発〜終電",
            phone: "043-222-0145",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 28,
            name: "千葉大学 西千葉キャンパス",
            category: "education",
            lat: 35.6269,
            lng: 140.1036,
            description: "国立大学法人千葉大学の本部キャンパス。",
            icon: "🎓",
            address: "千葉県千葉市稲毛区弥生町1-33",
            hours: "平日 8:30〜17:15",
            phone: "043-251-1111",
            website: "https://www.chiba-u.ac.jp/"
        },

        // ========== 稲毛駅エリア ==========
        {
            id: 29,
            name: "稲毛駅（JR総武線）",
            category: "station",
            lat: 35.6331,
            lng: 140.1059,
            description: "快速停車駅。住宅街と商業エリアが共存する地域。",
            icon: "🚉",
            address: "千葉県千葉市稲毛区稲毛東3丁目",
            hours: "始発〜終電",
            phone: "043-222-0145",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 30,
            name: "ペリエ稲毛",
            category: "shopping",
            lat: 35.6332,
            lng: 140.1060,
            description: "稲毛駅直結のショッピングセンター。",
            icon: "🏬",
            address: "千葉県千葉市稲毛区稲毛東3-19-11",
            hours: "10:00〜21:00",
            phone: "043-307-8201",
            website: "https://www.perie.co.jp/inage/"
        },
        {
            id: 31,
            name: "稲毛浅間神社",
            category: "public",
            lat: 35.6398,
            lng: 140.0958,
            description: "歴史ある神社。初詣や祭りで賑わいます。",
            icon: "⛩️",
            address: "千葉県千葉市稲毛区稲毛1-15-10",
            hours: "参拝自由",
            phone: "043-245-7777",
            website: "https://www.sengenjinja.info/"
        },

        // ========== 新検見川駅エリア ==========
        {
            id: 32,
            name: "新検見川駅（JR総武線）",
            category: "station",
            lat: 35.6462,
            lng: 140.0867,
            description: "住宅地に位置する駅。地域密着型の商店街がある。",
            icon: "🚉",
            address: "千葉県千葉市花見川区南花園2丁目",
            hours: "始発〜終電",
            phone: "043-222-0145",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 33,
            name: "イオン新検見川店",
            category: "shopping",
            lat: 35.6455,
            lng: 140.0875,
            description: "地域密着型のスーパーマーケット。",
            icon: "🏬",
            address: "千葉県千葉市花見川区花園1-8-1",
            hours: "9:00〜22:00",
            phone: "043-250-3011",
            website: "https://www.aeon.com/"
        },

        // ========== 幕張駅エリア ==========
        {
            id: 34,
            name: "幕張駅（JR総武線）",
            category: "station",
            lat: 35.6577,
            lng: 140.0506,
            description: "幕張エリアの玄関口。幕張メッセへのアクセス拠点。",
            icon: "🚉",
            address: "千葉県千葉市花見川区幕張町5丁目",
            hours: "始発〜終電",
            phone: "043-222-0145",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 35,
            name: "幕張メッセ",
            category: "public",
            lat: 35.6481,
            lng: 140.0343,
            description: "日本最大級のコンベンション施設。展示会やイベントを開催。",
            icon: "🏢",
            address: "千葉県千葉市美浜区中瀬2-1",
            hours: "イベントにより異なる",
            phone: "043-296-0001",
            website: "https://www.m-messe.co.jp/"
        },

        // ========== 幕張本郷駅エリア ==========
        {
            id: 36,
            name: "幕張本郷駅（JR総武線）",
            category: "station",
            lat: 35.6699,
            lng: 140.0539,
            description: "京成線も乗り入れる駅。住宅街の中心。",
            icon: "🚉",
            address: "千葉県千葉市花見川区幕張本郷1丁目",
            hours: "始発〜終電",
            phone: "043-222-0145",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 37,
            name: "ワンズモール",
            category: "shopping",
            lat: 35.6705,
            lng: 140.0550,
            description: "地域最大級のショッピングモール。専門店が多数入居。",
            icon: "🏬",
            address: "千葉県千葉市花見川区幕張本郷2-25-1",
            hours: "10:00〜21:00",
            phone: "043-350-9000",
            website: "https://www.ones-mall.jp/"
        },

        // ========== 船橋駅エリア ==========
        {
            id: 38,
            name: "船橋駅（JR総武線）",
            category: "station",
            lat: 35.6954,
            lng: 139.9848,
            description: "船橋市の中心駅。総武線、総武快速線、東武線が乗り入れ。",
            icon: "🚉",
            address: "千葉県船橋市本町7丁目",
            hours: "始発〜終電",
            phone: "047-424-2727",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 39,
            name: "東武百貨店 船橋店",
            category: "shopping",
            lat: 35.6958,
            lng: 139.9845,
            description: "船橋駅直結の百貨店。幅広い商品を取り扱い。",
            icon: "🛍️",
            address: "千葉県船橋市本町7-1-1",
            hours: "10:00〜20:00",
            phone: "047-425-2211",
            website: "https://www.tobu-dept.jp/funabashi/"
        },
        {
            id: 40,
            name: "シャポー船橋",
            category: "shopping",
            lat: 35.6955,
            lng: 139.9850,
            description: "駅ナカ商業施設。食品や雑貨が充実。",
            icon: "🏢",
            address: "千葉県船橋市本町7-1-1",
            hours: "10:00〜21:00",
            phone: "047-460-0222",
            website: "https://www.shapo-funabashi.com/"
        },
        {
            id: 41,
            name: "船橋市役所",
            category: "public",
            lat: 35.6941,
            lng: 139.9832,
            description: "船橋市の行政機関。各種手続きが可能。",
            icon: "🏛️",
            address: "千葉県船橋市湊町2-10-25",
            hours: "月〜金 9:00〜17:00",
            phone: "047-436-2111",
            website: "https://www.city.funabashi.lg.jp/"
        },
        {
            id: 42,
            name: "船橋アリーナ",
            category: "public",
            lat: 35.7021,
            lng: 139.9937,
            description: "スポーツイベントやコンサートが開催される多目的施設。",
            icon: "🏟️",
            address: "千葉県船橋市習志野台7-5-1",
            hours: "イベントにより異なる",
            phone: "047-461-5611",
            website: "https://www.funabashi-arena.jp/"
        },

        // ========== 西船橋駅エリア ==========
        {
            id: 43,
            name: "西船橋駅（JR総武線）",
            category: "station",
            lat: 35.7095,
            lng: 139.9589,
            description: "総武線、武蔵野線、東西線、東葉高速線が乗り入れるターミナル駅。",
            icon: "🚉",
            address: "千葉県船橋市西船4丁目",
            hours: "始発〜終電",
            phone: "047-424-2727",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 44,
            name: "東武ストア 西船橋店",
            category: "shopping",
            lat: 35.7098,
            lng: 139.9592,
            description: "駅直結のスーパーマーケット。日常の買い物に便利。",
            icon: "🏬",
            address: "千葉県船橋市西船4-27-7",
            hours: "10:00〜22:00",
            phone: "047-495-1711",
            website: "https://www.tobustore.co.jp/"
        },

        // ========== 下総中山駅エリア ==========
        {
            id: 45,
            name: "下総中山駅（JR総武線）",
            category: "station",
            lat: 35.7189,
            lng: 139.9334,
            description: "中山法華経寺の最寄り駅。京成線も利用可能。",
            icon: "🚉",
            address: "千葉県船橋市本中山3丁目",
            hours: "始発〜終電",
            phone: "047-424-2727",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 46,
            name: "中山法華経寺",
            category: "public",
            lat: 35.7235,
            lng: 139.9312,
            description: "日蓮宗の大本山。国宝や重要文化財を多数所蔵。",
            icon: "⛩️",
            address: "千葉県市川市中山2-10-1",
            hours: "参拝自由",
            phone: "047-334-3433",
            website: "https://www.hokekyoji.com/"
        },

        // ========== 本八幡駅エリア ==========
        {
            id: 47,
            name: "本八幡駅（JR総武線）",
            category: "station",
            lat: 35.7222,
            lng: 139.9255,
            description: "市川市の中心駅。都営新宿線も乗り入れ。",
            icon: "🚉",
            address: "千葉県市川市八幡3丁目",
            hours: "始発〜終電",
            phone: "047-332-2145",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 48,
            name: "シャポー本八幡",
            category: "shopping",
            lat: 35.7224,
            lng: 139.9258,
            description: "駅直結のショッピングセンター。食品や雑貨が充実。",
            icon: "🏢",
            address: "千葉県市川市八幡3-3-1",
            hours: "10:00〜21:00",
            phone: "047-370-0222",
            website: "https://www.shapo-motoyawata.com/"
        },
        {
            id: 49,
            name: "ニッケコルトンプラザ",
            category: "shopping",
            lat: 35.7188,
            lng: 139.9177,
            description: "大型ショッピングモール。映画館やレストラン街も併設。",
            icon: "🏬",
            address: "千葉県市川市鬼高1-1-1",
            hours: "10:00〜21:00（店舗により異なる）",
            phone: "047-378-3551",
            website: "https://www.nikke-coltonplaza.jp/"
        },
        {
            id: 50,
            name: "市川市役所",
            category: "public",
            lat: 35.7215,
            lng: 139.9306,
            description: "市川市の行政機関。市民サービスを提供。",
            icon: "🏛️",
            address: "千葉県市川市南八幡2-20-2",
            hours: "月〜金 8:45〜17:15",
            phone: "047-334-1111",
            website: "https://www.city.ichikawa.lg.jp/"
        },

        // ========== 市川駅エリア ==========
        {
            id: 51,
            name: "市川駅（JR総武線）",
            category: "station",
            lat: 35.7222,
            lng: 139.9308,
            description: "市川市の代表駅。京成線市川真間駅へのアクセスも便利。",
            icon: "🚉",
            address: "千葉県市川市市川1丁目",
            hours: "始発〜終電",
            phone: "047-332-2145",
            website: "https://www.jreast.co.jp/"
        },
        {
            id: 52,
            name: "シャポー市川",
            category: "shopping",
            lat: 35.7224,
            lng: 139.9310,
            description: "市川駅直結のショッピング施設。",
            icon: "🏢",
            address: "千葉県市川市市川1-4-10",
            hours: "10:00〜21:00",
            phone: "047-322-0222",
            website: "https://www.shapo-ichikawa.com/"
        },
        {
            id: 53,
            name: "市川市文化会館",
            category: "public",
            lat: 35.7198,
            lng: 139.9295,
            description: "コンサートや演劇が開催される文化施設。",
            icon: "🎭",
            address: "千葉県市川市大和田1-1-5",
            hours: "9:00〜22:00",
            phone: "047-379-5111",
            website: "https://www.tekona.net/bunka/"
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
