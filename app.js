// 地図とレイヤーの初期化
let map;
let baseLayers = {};
let currentBaseLayer;
let markers = [];
let markerLayer;
let currentLocationMarker = null;
let userLocation = null;

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
        const popupContent = createPopupContent(facility, category);

        marker.bindPopup(popupContent, { maxWidth: 350 });

        // マーカーにカテゴリと路線情報を保存
        marker.facilityCategory = facility.category;
        marker.facilityLines = facility.lines || [];

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

    // 路線フィルター
    document.querySelectorAll('.line-filter').forEach(checkbox => {
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

    // チェックされている路線を取得
    const checkedLines = [];
    document.querySelectorAll('.line-filter:checked').forEach(checkbox => {
        checkedLines.push(checkbox.value);
    });

    // マーカーの表示/非表示を切り替え
    markers.forEach(marker => {
        // カテゴリがチェックされているか
        const categoryMatch = checkedCategories.includes(marker.facilityCategory);

        // 路線がチェックされているか（施設の路線のいずれかがチェックされていればOK）
        let lineMatch = true; // デフォルトはtrue（路線情報がない施設も表示）
        if (marker.facilityLines && marker.facilityLines.length > 0) {
            // 施設に路線情報がある場合のみチェック
            lineMatch = marker.facilityLines.some(line => checkedLines.includes(line));
        }

        // カテゴリと路線の両方にマッチする場合のみ表示
        if (categoryMatch && lineMatch) {
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

// ポップアップコンテンツの生成
function createPopupContent(facility, category) {
    let content = `
        <div class="facility-popup">
            <h3 style="margin: 0 0 10px 0; color: ${category.color};">
                ${facility.icon} ${facility.name}
            </h3>
            <p style="margin: 5px 0; color: #666; font-size: 0.9em;">
                ${facility.description}
            </p>
    `;

    // 住所
    if (facility.address) {
        content += `
            <div style="margin: 10px 0; padding: 8px; background: #f5f5f5; border-radius: 4px;">
                <strong style="font-size: 0.85em;">📍 住所</strong><br>
                <span style="font-size: 0.85em;">${facility.address}</span>
            </div>
        `;
    }

    // 営業時間
    if (facility.hours) {
        content += `
            <div style="margin: 8px 0;">
                <strong style="font-size: 0.85em;">🕒 営業時間</strong><br>
                <span style="font-size: 0.85em;">${facility.hours}</span>
            </div>
        `;
    }

    // 電話番号
    if (facility.phone) {
        content += `
            <div style="margin: 8px 0;">
                <strong style="font-size: 0.85em;">📞 電話</strong><br>
                <a href="tel:${facility.phone}" style="font-size: 0.85em; color: #1976d2;">${facility.phone}</a>
            </div>
        `;
    }

    // ウェブサイト
    if (facility.website) {
        content += `
            <div style="margin: 8px 0;">
                <strong style="font-size: 0.85em;">🌐 ウェブサイト</strong><br>
                <a href="${facility.website}" target="_blank" style="font-size: 0.85em; color: #1976d2;">公式サイトを開く</a>
            </div>
        `;
    }

    // 最寄り駅からの徒歩時間
    if (facility.nearestStation && facility.walkingMinutes !== undefined) {
        content += `
            <div style="margin: 10px 0; padding: 8px; background: #e3f2fd; border-radius: 4px; border-left: 3px solid ${category.color};">
                <strong style="font-size: 0.85em;">🚶 最寄り駅</strong><br>
                <span style="font-size: 0.85em;">
                    ${facility.nearestStation}駅から徒歩約${facility.walkingMinutes}分
                </span>
            </div>
        `;
    }

    // ユーザーの現在地からの距離（取得済みの場合）
    if (userLocation) {
        const distanceFromUser = calculateDistance(
            userLocation.lat,
            userLocation.lng,
            facility.lat,
            facility.lng
        );
        const walkingTimeFromUser = Math.ceil(distanceFromUser / 80);

        content += `
            <div style="margin: 8px 0; padding: 8px; background: #fff3e0; border-radius: 4px; border-left: 3px solid #ff9800;">
                <strong style="font-size: 0.85em;">📍 現在地から</strong><br>
                <span style="font-size: 0.85em;">
                    直線距離: ${distanceFromUser < 1000 ? Math.round(distanceFromUser) + 'm' : (distanceFromUser / 1000).toFixed(2) + 'km'}
                    / 徒歩約${walkingTimeFromUser}分
                </span>
            </div>
        `;
    }

    // カテゴリバッジ
    content += `
            <div style="margin-top: 10px;">
                <span class="facility-category" style="background-color: ${category.color}; color: white; padding: 4px 12px; border-radius: 12px; font-size: 0.75em; display: inline-block;">
                    ${category.name}
                </span>
            </div>
        </div>
    `;

    return content;
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

// 現在地を取得して表示
function showCurrentLocation() {
    if (!navigator.geolocation) {
        alert('お使いのブラウザは位置情報をサポートしていません。');
        return;
    }

    const locationButton = document.getElementById('location-btn');
    if (locationButton) {
        locationButton.textContent = '位置情報取得中...';
        locationButton.disabled = true;
    }

    navigator.geolocation.getCurrentPosition(
        // 成功時
        (position) => {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // 既存の現在地マーカーを削除
            if (currentLocationMarker) {
                map.removeLayer(currentLocationMarker);
            }

            // 現在地マーカーを作成
            const locationIcon = L.divIcon({
                className: 'current-location-icon',
                html: `<div style="
                    background-color: #4285f4;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 3px solid white;
                    box-shadow: 0 0 0 2px #4285f4, 0 2px 8px rgba(0,0,0,0.3);
                "></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            currentLocationMarker = L.marker([userLocation.lat, userLocation.lng], {
                icon: locationIcon
            }).addTo(map);

            // 精度の円を追加
            const accuracyCircle = L.circle([userLocation.lat, userLocation.lng], {
                radius: position.coords.accuracy,
                color: '#4285f4',
                fillColor: '#4285f4',
                fillOpacity: 0.1,
                weight: 1
            }).addTo(map);

            currentLocationMarker.accuracyCircle = accuracyCircle;

            // 現在地にズーム
            map.setView([userLocation.lat, userLocation.lng], 16);

            // ポップアップ
            currentLocationMarker.bindPopup('📍 現在地').openPopup();

            // マーカーを再生成して現在地からの距離を表示
            refreshMarkers();

            if (locationButton) {
                locationButton.textContent = '📍 現在地を表示';
                locationButton.disabled = false;
            }
        },
        // エラー時
        (error) => {
            let errorMessage = '位置情報の取得に失敗しました。';
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = '位置情報の使用が許可されていません。';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = '位置情報が利用できません。';
                    break;
                case error.TIMEOUT:
                    errorMessage = '位置情報の取得がタイムアウトしました。';
                    break;
            }
            alert(errorMessage);

            if (locationButton) {
                locationButton.textContent = '📍 現在地を表示';
                locationButton.disabled = false;
            }
        },
        // オプション
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

// マーカーを再生成（現在地からの距離を更新）
function refreshMarkers() {
    // 既存のマーカーを削除
    markerLayer.clearLayers();
    markers = [];

    // マーカーを再追加
    addFacilityMarkers();
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', () => {
    initMap();

    // 天気情報の初期化と自動更新開始
    startWeatherUpdates();

    // 統計情報の初期化
    initStatistics();

    // コンソールに統計情報を出力
    console.log('総武線沿線マップが初期化されました');
    console.log('施設総数:', tsudanumaData.facilities.length);
    console.log('カテゴリ別施設数:', getFacilityCountByCategory());
});

// 地図のリサイズ対応
window.addEventListener('resize', () => {
    if (map) {
        map.invalidateSize();
    }
});
