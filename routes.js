// 路線と駅のマスターデータ

// 路線定義
const railwayLines = {
    // 総武線
    sobuLocal: {
        id: 'sobuLocal',
        name: '総武線各駅停車',
        color: '#FFC50E',
        stations: {
            mitaka: { name: '三鷹', lat: 35.7056, lng: 139.5595 },
            musashisakai: { name: '武蔵境', lat: 35.7064, lng: 139.5451 },
            higashikoganei: { name: '東小金井', lat: 35.7031, lng: 139.5308 },
            musashikoganei: { name: '武蔵小金井', lat: 35.7015, lng: 139.5068 },
            kokubunji: { name: '国分寺', lat: 35.7101, lng: 139.4622 },
            nishikokubunji: { name: '西国分寺', lat: 35.7104, lng: 139.4467 },
            kichijoji: { name: '吉祥寺', lat: 35.7031, lng: 139.5796 },
            nakano: { name: '中野', lat: 35.7058, lng: 139.6656 },
            higashinakano: { name: '東中野', lat: 35.7030, lng: 139.6845 },
            okubo: { name: '大久保', lat: 35.7010, lng: 139.7004 },
            shinjuku: { name: '新宿', lat: 35.6896, lng: 139.7006 },
            yotsuya: { name: '四ツ谷', lat: 35.6868, lng: 139.7301 },
            ichigaya: { name: '市ヶ谷', lat: 35.6918, lng: 139.7404 },
            iidabashi: { name: '飯田橋', lat: 35.7022, lng: 139.7456 },
            suidobashi: { name: '水道橋', lat: 35.7020, lng: 139.7527 },
            ochanomizu: { name: '御茶ノ水', lat: 35.6993, lng: 139.7656 },
            akihabara: { name: '秋葉原', lat: 35.6984, lng: 139.7731 },
            asakusabashi: { name: '浅草橋', lat: 35.6970, lng: 139.7848 },
            ryogoku: { name: '両国', lat: 35.6963, lng: 139.7929 },
            kinshicho: { name: '錦糸町', lat: 35.6966, lng: 139.8142 },
            funabashi: { name: '船橋', lat: 35.6954, lng: 139.9848 },
            tsudanuma: { name: '津田沼', lat: 35.6916, lng: 140.0211 },
            chiba: { name: '千葉', lat: 35.6073, lng: 140.1063 }
        }
    },

    // 総武線快速
    sobuRapid: {
        id: 'sobuRapid',
        name: '総武線快速',
        color: '#0072BC',
        stations: {
            tokyo: { name: '東京', lat: 35.6812, lng: 139.7671 },
            shinagawa: { name: '品川', lat: 35.6284, lng: 139.7387 },
            shinbashi: { name: '新橋', lat: 35.6659, lng: 139.7589 },
            kinshicho: { name: '錦糸町', lat: 35.6966, lng: 139.8142 },
            ichikawa: { name: '市川', lat: 35.7222, lng: 139.9308 },
            funabashi: { name: '船橋', lat: 35.6954, lng: 139.9848 },
            tsudanuma: { name: '津田沼', lat: 35.6916, lng: 140.0211 },
            chiba: { name: '千葉', lat: 35.6073, lng: 140.1063 }
        }
    },

    // 中央線快速
    chuoRapid: {
        id: 'chuoRapid',
        name: '中央線快速',
        color: '#F15A22',
        stations: {
            tokyo: { name: '東京', lat: 35.6812, lng: 139.7671 },
            kanda: { name: '神田', lat: 35.6919, lng: 139.7708 },
            ochanomizu: { name: '御茶ノ水', lat: 35.6993, lng: 139.7656 },
            yotsuya: { name: '四ツ谷', lat: 35.6868, lng: 139.7301 },
            shinjuku: { name: '新宿', lat: 35.6896, lng: 139.7006 },
            nakano: { name: '中野', lat: 35.7058, lng: 139.6656 },
            kichijoji: { name: '吉祥寺', lat: 35.7031, lng: 139.5796 },
            mitaka: { name: '三鷹', lat: 35.7056, lng: 139.5595 },
            kokubunji: { name: '国分寺', lat: 35.7101, lng: 139.4622 },
            tachikawa: { name: '立川', lat: 35.6977, lng: 139.4137 },
            hachioji: { name: '八王子', lat: 35.6559, lng: 139.3389 },
            takao: { name: '高尾', lat: 35.6424, lng: 139.2820 }
        }
    },

    // 山手線
    yamanote: {
        id: 'yamanote',
        name: '山手線',
        color: '#9ACD32',
        stations: {
            tokyo: { name: '東京', lat: 35.6812, lng: 139.7671 },
            yurakucho: { name: '有楽町', lat: 35.6751, lng: 139.7632 },
            shinbashi: { name: '新橋', lat: 35.6659, lng: 139.7589 },
            hamamatsucho: { name: '浜松町', lat: 35.6554, lng: 139.7575 },
            tamachi: { name: '田町', lat: 35.6456, lng: 139.7477 },
            shinagawa: { name: '品川', lat: 35.6284, lng: 139.7387 },
            osaki: { name: '大崎', lat: 35.6197, lng: 139.7286 },
            gotanda: { name: '五反田', lat: 35.6261, lng: 139.7238 },
            meguro: { name: '目黒', lat: 35.6336, lng: 139.7159 },
            ebisu: { name: '恵比寿', lat: 35.6469, lng: 139.7101 },
            shibuya: { name: '渋谷', lat: 35.6580, lng: 139.7016 },
            harajuku: { name: '原宿', lat: 35.6702, lng: 139.7026 },
            yoyogi: { name: '代々木', lat: 35.6833, lng: 139.7020 },
            shinjuku: { name: '新宿', lat: 35.6896, lng: 139.7006 },
            shinokubo: { name: '新大久保', lat: 35.7011, lng: 139.7004 },
            takadanobaba: { name: '高田馬場', lat: 35.7128, lng: 139.7037 },
            mejiro: { name: '目白', lat: 35.7213, lng: 139.7062 },
            ikebukuro: { name: '池袋', lat: 35.7295, lng: 139.7109 },
            otsuka: { name: '大塚', lat: 35.7313, lng: 139.7287 },
            sugamo: { name: '巣鴨', lat: 35.7333, lng: 139.7394 },
            komagome: { name: '駒込', lat: 35.7365, lng: 139.7469 },
            tabata: { name: '田端', lat: 35.7377, lng: 139.7606 },
            nippori: { name: '日暮里', lat: 35.7278, lng: 139.7710 },
            uguisudani: { name: '鶯谷', lat: 35.7209, lng: 139.7784 },
            ueno: { name: '上野', lat: 35.7138, lng: 139.7774 },
            okachimachi: { name: '御徒町', lat: 35.7074, lng: 139.7746 },
            akihabara: { name: '秋葉原', lat: 35.6984, lng: 139.7731 },
            kanda: { name: '神田', lat: 35.6919, lng: 139.7708 }
        }
    },

    // 高崎線
    takasaki: {
        id: 'takasaki',
        name: '高崎線',
        color: '#FF6600',
        stations: {
            tokyo: { name: '東京', lat: 35.6812, lng: 139.7671 },
            ueno: { name: '上野', lat: 35.7138, lng: 139.7774 },
            akabane: { name: '赤羽', lat: 35.7774, lng: 139.7201 },
            urawa: { name: '浦和', lat: 35.8575, lng: 139.6589 },
            omiya: { name: '大宮', lat: 35.9063, lng: 139.6239 },
            ageo: { name: '上尾', lat: 35.9774, lng: 139.5927 },
            okegawa: { name: '桶川', lat: 36.0032, lng: 139.5562 },
            konosu: { name: '鴻巣', lat: 36.0682, lng: 139.5219 },
            kumagaya: { name: '熊谷', lat: 36.1476, lng: 139.3889 },
            takasaki: { name: '高崎', lat: 36.3225, lng: 139.0037 }
        }
    },

    // 京浜東北線
    keihinTohoku: {
        id: 'keihinTohoku',
        name: '京浜東北線',
        color: '#00BFFF',
        stations: {
            omiya: { name: '大宮', lat: 35.9063, lng: 139.6239 },
            urawa: { name: '浦和', lat: 35.8575, lng: 139.6589 },
            akabane: { name: '赤羽', lat: 35.7774, lng: 139.7201 },
            tabata: { name: '田端', lat: 35.7377, lng: 139.7606 },
            ueno: { name: '上野', lat: 35.7138, lng: 139.7774 },
            akihabara: { name: '秋葉原', lat: 35.6984, lng: 139.7731 },
            kanda: { name: '神田', lat: 35.6919, lng: 139.7708 },
            tokyo: { name: '東京', lat: 35.6812, lng: 139.7671 },
            yurakucho: { name: '有楽町', lat: 35.6751, lng: 139.7632 },
            shinbashi: { name: '新橋', lat: 35.6659, lng: 139.7589 },
            hamamatsucho: { name: '浜松町', lat: 35.6554, lng: 139.7575 },
            tamachi: { name: '田町', lat: 35.6456, lng: 139.7477 },
            shinagawa: { name: '品川', lat: 35.6284, lng: 139.7387 },
            kawasaki: { name: '川崎', lat: 35.5308, lng: 139.6970 },
            yokohama: { name: '横浜', lat: 35.4658, lng: 139.6225 },
            sakuragicho: { name: '桜木町', lat: 35.4512, lng: 139.6306 },
            negishi: { name: '根岸', lat: 35.4343, lng: 139.6269 },
            isogo: { name: '磯子', lat: 35.4029, lng: 139.6180 },
            yokosuka: { name: '横須賀', lat: 35.2823, lng: 139.6718 }
        }
    },

    // 埼京線
    saikyo: {
        id: 'saikyo',
        name: '埼京線',
        color: '#00AC9A',
        stations: {
            kawagoe: { name: '川越', lat: 35.9075, lng: 139.4850 },
            omiya: { name: '大宮', lat: 35.9063, lng: 139.6239 },
            akabane: { name: '赤羽', lat: 35.7774, lng: 139.7201 },
            ikebukuro: { name: '池袋', lat: 35.7295, lng: 139.7109 },
            shinjuku: { name: '新宿', lat: 35.6896, lng: 139.7006 },
            shibuya: { name: '渋谷', lat: 35.6580, lng: 139.7016 },
            osaki: { name: '大崎', lat: 35.6197, lng: 139.7286 },
            rinkai: { name: '新木場', lat: 35.6460, lng: 139.8267 }
        }
    },

    // 常磐線
    joban: {
        id: 'joban',
        name: '常磐線',
        color: '#006CB8',
        stations: {
            ueno: { name: '上野', lat: 35.7138, lng: 139.7774 },
            nippori: { name: '日暮里', lat: 35.7278, lng: 139.7710 },
            kitasenju: { name: '北千住', lat: 35.7493, lng: 139.8049 },
            ayase: { name: '綾瀬', lat: 35.7492, lng: 139.8263 },
            kashiwa: { name: '柏', lat: 35.8611, lng: 139.9725 },
            matsudo: { name: '松戸', lat: 35.7873, lng: 139.9017 },
            toride: { name: '取手', lat: 35.9116, lng: 140.0536 },
            mito: { name: '水戸', lat: 36.3707, lng: 140.4707 }
        }
    },

    // 東海道線
    tokaido: {
        id: 'tokaido',
        name: '東海道線',
        color: '#FF8C00',
        stations: {
            tokyo: { name: '東京', lat: 35.6812, lng: 139.7671 },
            shinbashi: { name: '新橋', lat: 35.6659, lng: 139.7589 },
            shinagawa: { name: '品川', lat: 35.6284, lng: 139.7387 },
            kawasaki: { name: '川崎', lat: 35.5308, lng: 139.6970 },
            yokohama: { name: '横浜', lat: 35.4658, lng: 139.6225 },
            totsuka: { name: '戸塚', lat: 35.3995, lng: 139.5334 },
            ofuna: { name: '大船', lat: 35.3532, lng: 139.5325 },
            fujisawa: { name: '藤沢', lat: 35.3406, lng: 139.4895 },
            chigasaki: { name: '茅ヶ崎', lat: 35.3348, lng: 139.4044 },
            hiratsuka: { name: '平塚', lat: 35.3273, lng: 139.3493 },
            odawara: { name: '小田原', lat: 35.2558, lng: 139.1561 },
            atami: { name: '熱海', lat: 35.0956, lng: 139.0726 }
        }
    },

    // 横須賀線
    yokosuka: {
        id: 'yokosuka',
        name: '横須賀線',
        color: '#00539B',
        stations: {
            tokyo: { name: '東京', lat: 35.6812, lng: 139.7671 },
            shinbashi: { name: '新橋', lat: 35.6659, lng: 139.7589 },
            shinagawa: { name: '品川', lat: 35.6284, lng: 139.7387 },
            nishioi: { name: '西大井', lat: 35.6088, lng: 139.7307 },
            musashikosugi: { name: '武蔵小杉', lat: 35.5780, lng: 139.6624 },
            yokohama: { name: '横浜', lat: 35.4658, lng: 139.6225 },
            totsuka: { name: '戸塚', lat: 35.3995, lng: 139.5334 },
            ofuna: { name: '大船', lat: 35.3532, lng: 139.5325 },
            kamakura: { name: '鎌倉', lat: 35.3189, lng: 139.5503 },
            zushi: { name: '逗子', lat: 35.2946, lng: 139.5791 },
            kurihama: { name: '久里浜', lat: 35.2321, lng: 139.6903 }
        }
    },

    // 南武線
    nambu: {
        id: 'nambu',
        name: '南武線',
        color: '#FFD700',
        stations: {
            kawasaki: { name: '川崎', lat: 35.5308, lng: 139.6970 },
            musashikosugi: { name: '武蔵小杉', lat: 35.5780, lng: 139.6624 },
            musashinakahara: { name: '武蔵中原', lat: 35.5843, lng: 139.6513 },
            musashimizonokuchi: { name: '武蔵溝ノ口', lat: 35.6012, lng: 139.6105 },
            noborito: { name: '登戸', lat: 35.6220, lng: 139.5678 },
            inagi: { name: '稲城', lat: 35.6383, lng: 139.5049 },
            tachikawa: { name: '立川', lat: 35.6977, lng: 139.4137 }
        }
    },

    // 武蔵野線
    musashino: {
        id: 'musashino',
        name: '武蔵野線',
        color: '#FF6600',
        stations: {
            fuchu: { name: '府中本町', lat: 35.6693, lng: 139.4786 },
            kitafuchu: { name: '北府中', lat: 35.6909, lng: 139.4833 },
            nishikokubunji: { name: '西国分寺', lat: 35.7104, lng: 139.4467 },
            shinkiba: { name: '新木場', lat: 35.6460, lng: 139.8267 },
            nishifunabashi: { name: '西船橋', lat: 35.7095, lng: 139.9589 },
            minamiurawa: { name: '南浦和', lat: 35.8490, lng: 139.6649 }
        }
    },

    // 京葉線
    keiyo: {
        id: 'keiyo',
        name: '京葉線',
        color: '#D91E10',
        stations: {
            tokyo: { name: '東京', lat: 35.6812, lng: 139.7671 },
            hatchobori: { name: '八丁堀', lat: 35.6722, lng: 139.7771 },
            kiba: { name: '木場', lat: 35.6690, lng: 139.8041 },
            shinkiba: { name: '新木場', lat: 35.6460, lng: 139.8267 },
            kasai: { name: '葛西臨海公園', lat: 35.6449, lng: 139.8647 },
            maihama: { name: '舞浜', lat: 35.6344, lng: 139.8828 },
            shinurayasu: { name: '新浦安', lat: 35.6512, lng: 139.9035 },
            ichikawashiohama: { name: '市川塩浜', lat: 35.6688, lng: 139.9369 },
            soga: { name: '蘇我', lat: 35.5853, lng: 140.1262 }
        }
    },

    // 宇都宮線（東北本線）
    utsunomiya: {
        id: 'utsunomiya',
        name: '宇都宮線',
        color: '#FF6600',
        stations: {
            tokyo: { name: '東京', lat: 35.6812, lng: 139.7671 },
            ueno: { name: '上野', lat: 35.7138, lng: 139.7774 },
            akabane: { name: '赤羽', lat: 35.7774, lng: 139.7201 },
            urawa: { name: '浦和', lat: 35.8575, lng: 139.6589 },
            omiya: { name: '大宮', lat: 35.9063, lng: 139.6239 },
            kuki: { name: '久喜', lat: 36.0625, lng: 139.6672 },
            oyama: { name: '小山', lat: 36.3147, lng: 139.8004 },
            utsunomiya: { name: '宇都宮', lat: 36.5585, lng: 139.8984 }
        }
    },

    // 横浜線
    yokohama: {
        id: 'yokohama',
        name: '横浜線',
        color: '#87CEEB',
        stations: {
            yokohama: { name: '横浜', lat: 35.4658, lng: 139.6225 },
            kikuna: { name: '菊名', lat: 35.5040, lng: 139.6327 },
            shinyokohama: { name: '新横浜', lat: 35.5074, lng: 139.6173 },
            kozukue: { name: '小机', lat: 35.5160, lng: 139.6063 },
            machida: { name: '町田', lat: 35.5414, lng: 139.4465 },
            fuchinobe: { name: '淵野辺', lat: 35.5660, lng: 139.4131 },
            hashimoto: { name: '橋本', lat: 35.5953, lng: 139.3437 },
            hachioji: { name: '八王子', lat: 35.6559, lng: 139.3389 }
        }
    }
};

// 路線設定（カテゴリのような扱い）
const lineConfig = {
    sobuLocal: {
        name: '総武線各駅停車',
        color: '#FFC50E'
    },
    sobuRapid: {
        name: '総武線快速',
        color: '#0072BC'
    },
    chuoRapid: {
        name: '中央線快速',
        color: '#F15A22'
    },
    yamanote: {
        name: '山手線',
        color: '#9ACD32'
    },
    takasaki: {
        name: '高崎線',
        color: '#FF6600'
    },
    keihinTohoku: {
        name: '京浜東北線',
        color: '#00BFFF'
    },
    saikyo: {
        name: '埼京線',
        color: '#00AC9A'
    },
    joban: {
        name: '常磐線',
        color: '#006CB8'
    },
    tokaido: {
        name: '東海道線',
        color: '#FF8C00'
    },
    yokosuka: {
        name: '横須賀線',
        color: '#00539B'
    },
    nambu: {
        name: '南武線',
        color: '#FFD700'
    },
    musashino: {
        name: '武蔵野線',
        color: '#FF6600'
    },
    keiyo: {
        name: '京葉線',
        color: '#D91E10'
    },
    utsunomiya: {
        name: '宇都宮線',
        color: '#FF6600'
    },
    yokohama: {
        name: '横浜線',
        color: '#87CEEB'
    }
};
