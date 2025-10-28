// 地図とレイヤーの初期化
let map;
let baseLayers = {};
let currentBaseLayer;
let markers = [];
let markerLayer;

// 地図の初期化
function initMap() {
    // 地図の作成
    map = L.map('map').setView([tsudanumaData.center.lat, tsudanumaData.center.lng], tsudanumaData.center.zoom);

    // ベースレイヤーの定義
    baseLayers = {
        osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }),
        gsi: L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
            attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
            maxZoom: 18
        }),
        gsiPhoto: L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
            attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
            maxZoom: 18
        })
    };

    // 初期レイヤー（OpenStreetMap）を追加
    currentBaseLayer = baseLayers.osm;
    currentBaseLayer.addTo(map);

    // マーカーレイヤーグループの作成
    markerLayer = L.layerGroup().addTo(map);

    // 施設マーカーの追加
    addFacilityMarkers();

    // イベントリスナーの設定
    setupEventListeners();
}

// 施設マーカーの追加
function addFacilityMarkers() {
    markers = [];

    tsudanumaData.facilities.forEach(facility => {
        const category = categoryConfig[facility.category];

        // カスタムアイコンの作成
        const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="
                background-color: ${category.color};
                width: 32px;
                height: 32px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
            ">${facility.icon}</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -16]
        });

        // マーカーの作成
        const marker = L.marker([facility.lat, facility.lng], { icon: customIcon });

        // ポップアップの内容
        const popupContent = `
            <div class="facility-popup">
                <h3>${facility.icon} ${facility.name}</h3>
                <p>${facility.description}</p>
                <span class="facility-category" style="background-color: ${category.color}">
                    ${category.name}
                </span>
            </div>
        `;

        marker.bindPopup(popupContent);

        // マーカーにカテゴリ情報を保存
        marker.facilityCategory = facility.category;

        markers.push(marker);
        marker.addTo(markerLayer);
    });
}

// イベントリスナーの設定
function setupEventListeners() {
    // ベースレイヤー切り替え
    document.querySelectorAll('input[name="baselayer"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            switchBaseLayer(e.target.value);
        });
    });

    // カテゴリフィルター
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            filterMarkers();
        });
    });
}

// ベースレイヤーの切り替え
function switchBaseLayer(layerType) {
    // 現在のレイヤーを削除
    map.removeLayer(currentBaseLayer);

    // 新しいレイヤーを追加
    switch(layerType) {
        case 'osm':
            currentBaseLayer = baseLayers.osm;
            break;
        case 'gsi':
            currentBaseLayer = baseLayers.gsi;
            break;
        case 'gsi-photo':
            currentBaseLayer = baseLayers.gsiPhoto;
            break;
    }

    currentBaseLayer.addTo(map);
}

// マーカーのフィルタリング
function filterMarkers() {
    // チェックされているカテゴリを取得
    const checkedCategories = [];
    document.querySelectorAll('.category-filter:checked').forEach(checkbox => {
        checkedCategories.push(checkbox.value);
    });

    // マーカーの表示/非表示を切り替え
    markers.forEach(marker => {
        if (checkedCategories.includes(marker.facilityCategory)) {
            if (!markerLayer.hasLayer(marker)) {
                markerLayer.addLayer(marker);
            }
        } else {
            if (markerLayer.hasLayer(marker)) {
                markerLayer.removeLayer(marker);
            }
        }
    });
}

// 特定の施設にズーム
function zoomToFacility(facilityId) {
    const facility = tsudanumaData.facilities.find(f => f.id === facilityId);
    if (facility) {
        map.setView([facility.lat, facility.lng], 17);
        // 対応するマーカーのポップアップを開く
        const marker = markers.find(m => {
            const latlng = m.getLatLng();
            return latlng.lat === facility.lat && latlng.lng === facility.lng;
        });
        if (marker) {
            marker.openPopup();
        }
    }
}

// 地図を中心に戻す
function resetMapView() {
    map.setView([tsudanumaData.center.lat, tsudanumaData.center.lng], tsudanumaData.center.zoom);
}

// 追加のユーティリティ関数

// 距離計算（2点間の距離をメートルで返す）
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3; // 地球の半径（メートル）
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lng2 - lng1) * Math.PI / 180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c;
}

// カテゴリ別の施設数を取得
function getFacilityCountByCategory() {
    const counts = {};
    Object.keys(categoryConfig).forEach(cat => {
        counts[cat] = tsudanumaData.facilities.filter(f => f.category === cat).length;
    });
    return counts;
}

// 現在の地図範囲内の施設を取得
function getFacilitiesInBounds() {
    const bounds = map.getBounds();
    return tsudanumaData.facilities.filter(facility => {
        return bounds.contains([facility.lat, facility.lng]);
    });
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', () => {
    initMap();

    // コンソールに統計情報を出力
    console.log('津田沼駅周辺マップが初期化されました');
    console.log('施設総数:', tsudanumaData.facilities.length);
    console.log('カテゴリ別施設数:', getFacilityCountByCategory());
});

// 地図のリサイズ対応
window.addEventListener('resize', () => {
    if (map) {
        map.invalidateSize();
    }
});
