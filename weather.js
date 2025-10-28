// 天気情報管理
let weatherData = null;
let weatherUpdateInterval = null;

// 天気アイコンのマッピング
const weatherIcons = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
};

// 天気の日本語説明
const weatherDescriptions = {
    'clear sky': '快晴',
    'few clouds': '晴れ時々曇り',
    'scattered clouds': '曇り',
    'broken clouds': '曇り',
    'overcast clouds': '曇天',
    'shower rain': 'にわか雨',
    'rain': '雨',
    'light rain': '小雨',
    'moderate rain': '雨',
    'heavy intensity rain': '大雨',
    'thunderstorm': '雷雨',
    'snow': '雪',
    'mist': '霧',
    'fog': '霧'
};

// 津田沼の天気を取得
async function fetchWeather() {
    const lat = tsudanumaData.center.lat;
    const lon = tsudanumaData.center.lng;
    const apiKey = API_CONFIG.openWeatherMap.apiKey;
    const url = `${API_CONFIG.openWeatherMap.baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ja`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        weatherData = await response.json();
        updateWeatherDisplay();
        return weatherData;
    } catch (error) {
        console.error('天気情報の取得に失敗しました:', error);
        displayWeatherError();
        return null;
    }
}

// 天気表示を更新
function updateWeatherDisplay() {
    const weatherPanel = document.getElementById('weather-panel');
    if (!weatherPanel || !weatherData) return;

    const temp = Math.round(weatherData.main.temp);
    const feelsLike = Math.round(weatherData.main.feels_like);
    const humidity = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;
    const description = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    const icon = weatherIcons[iconCode] || '🌤️';

    // 日本語の天気説明を取得
    const descriptionJa = weatherDescriptions[weatherData.weather[0].description] || description;

    const html = `
        <div class="weather-content">
            <div class="weather-main">
                <div class="weather-icon">${icon}</div>
                <div class="weather-temp">
                    <div class="temp-main">${temp}°C</div>
                    <div class="temp-feels">体感 ${feelsLike}°C</div>
                </div>
            </div>
            <div class="weather-description">${descriptionJa}</div>
            <div class="weather-details">
                <div class="weather-detail">
                    <span class="detail-icon">💧</span>
                    <span class="detail-label">湿度</span>
                    <span class="detail-value">${humidity}%</span>
                </div>
                <div class="weather-detail">
                    <span class="detail-icon">💨</span>
                    <span class="detail-label">風速</span>
                    <span class="detail-value">${windSpeed}m/s</span>
                </div>
            </div>
            <div class="weather-update">
                <small>最終更新: ${new Date().toLocaleTimeString('ja-JP')}</small>
            </div>
        </div>
    `;

    weatherPanel.innerHTML = html;
}

// 天気エラー表示
function displayWeatherError() {
    const weatherPanel = document.getElementById('weather-panel');
    if (!weatherPanel) return;

    weatherPanel.innerHTML = `
        <div class="weather-error">
            <p>⚠️ 天気情報を取得できませんでした</p>
            <button onclick="fetchWeather()" class="retry-button">再試行</button>
        </div>
    `;
}

// 天気情報の自動更新を開始（10分ごと）
function startWeatherUpdates() {
    // 初回取得
    fetchWeather();

    // 10分ごとに更新
    weatherUpdateInterval = setInterval(fetchWeather, 10 * 60 * 1000);
}

// 天気情報の自動更新を停止
function stopWeatherUpdates() {
    if (weatherUpdateInterval) {
        clearInterval(weatherUpdateInterval);
        weatherUpdateInterval = null;
    }
}
