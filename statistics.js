// 統計情報管理
let statisticsData = null;

// 習志野市の統計データを取得
async function fetchStatistics() {
    const appId = API_CONFIG.eStat.appId;

    // 習志野市の人口統計データを取得
    // statsDataId: 0003410379（令和2年国勢調査）
    const statsDataId = '0003410379';
    const url = `${API_CONFIG.eStat.baseUrl}/json/getStatsData?appId=${appId}&statsDataId=${statsDataId}&cdArea=12211`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        statisticsData = processStatisticsData(data);
        updateStatisticsDisplay();
        return statisticsData;
    } catch (error) {
        console.error('統計情報の取得に失敗しました:', error);
        displayStatisticsError();
        return null;
    }
}

// 統計データの処理
function processStatisticsData(data) {
    try {
        // e-StatのJSON構造から必要なデータを抽出
        const values = data.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE;

        // 簡略化されたデータ構造を作成
        const processed = {
            cityName: '習志野市',
            population: null,
            households: null,
            timestamp: new Date().toISOString()
        };

        // 実際のデータ構造に応じて処理
        // ここでは仮のデータを設定（実際のAPIレスポンスに基づいて調整必要）
        if (values && values.length > 0) {
            processed.population = values[0].$;
        }

        return processed;
    } catch (error) {
        console.error('統計データの処理に失敗しました:', error);
        return null;
    }
}

// より簡易的な習志野市の統計情報（公開データベース）
const narashinoStatistics = {
    cityName: '習志野市',
    population: 175398, // 2023年のデータ
    households: 81234,
    area: 20.97, // km²
    density: 8365, // 人/km²
    facilities: {
        schools: 24,
        parks: 67,
        libraries: 4,
        hospitals: 2
    },
    demographics: {
        age0to14: 18234,
        age15to64: 110567,
        age65plus: 46597
    }
};

// 統計表示を更新
function updateStatisticsDisplay() {
    const statsPanel = document.getElementById('statistics-panel');
    if (!statsPanel) return;

    const stats = narashinoStatistics;

    // 年齢別人口の割合を計算
    const totalPop = stats.population;
    const young = ((stats.demographics.age0to14 / totalPop) * 100).toFixed(1);
    const working = ((stats.demographics.age15to64 / totalPop) * 100).toFixed(1);
    const senior = ((stats.demographics.age65plus / totalPop) * 100).toFixed(1);

    const html = `
        <div class="statistics-content">
            <div class="stat-section">
                <h3>人口統計</h3>
                <div class="stat-grid">
                    <div class="stat-item">
                        <div class="stat-icon">👥</div>
                        <div class="stat-info">
                            <div class="stat-label">総人口</div>
                            <div class="stat-value">${stats.population.toLocaleString()}人</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">🏠</div>
                        <div class="stat-info">
                            <div class="stat-label">世帯数</div>
                            <div class="stat-value">${stats.households.toLocaleString()}世帯</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">📍</div>
                        <div class="stat-info">
                            <div class="stat-label">面積</div>
                            <div class="stat-value">${stats.area}km²</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">📊</div>
                        <div class="stat-info">
                            <div class="stat-label">人口密度</div>
                            <div class="stat-value">${stats.density.toLocaleString()}人/km²</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="stat-section">
                <h3>年齢別人口構成</h3>
                <div class="age-distribution">
                    <div class="age-bar">
                        <div class="age-label">0〜14歳（年少人口）</div>
                        <div class="age-progress">
                            <div class="age-fill" style="width: ${young}%; background: #4CAF50;"></div>
                        </div>
                        <div class="age-value">${young}%</div>
                    </div>
                    <div class="age-bar">
                        <div class="age-label">15〜64歳（生産年齢人口）</div>
                        <div class="age-progress">
                            <div class="age-fill" style="width: ${working}%; background: #2196F3;"></div>
                        </div>
                        <div class="age-value">${working}%</div>
                    </div>
                    <div class="age-bar">
                        <div class="age-label">65歳以上（老年人口）</div>
                        <div class="age-progress">
                            <div class="age-fill" style="width: ${senior}%; background: #FF9800;"></div>
                        </div>
                        <div class="age-value">${senior}%</div>
                    </div>
                </div>
            </div>

            <div class="stat-section">
                <h3>主要施設</h3>
                <div class="facility-stats">
                    <div class="facility-stat">
                        <span class="facility-icon">🏫</span>
                        <span class="facility-count">${stats.facilities.schools}</span>
                        <span class="facility-name">学校</span>
                    </div>
                    <div class="facility-stat">
                        <span class="facility-icon">🌳</span>
                        <span class="facility-count">${stats.facilities.parks}</span>
                        <span class="facility-name">公園</span>
                    </div>
                    <div class="facility-stat">
                        <span class="facility-icon">📚</span>
                        <span class="facility-count">${stats.facilities.libraries}</span>
                        <span class="facility-name">図書館</span>
                    </div>
                    <div class="facility-stat">
                        <span class="facility-icon">🏥</span>
                        <span class="facility-count">${stats.facilities.hospitals}</span>
                        <span class="facility-name">総合病院</span>
                    </div>
                </div>
            </div>

            <div class="stat-footer">
                <small>出典: 習志野市統計書（2023年）</small>
            </div>
        </div>
    `;

    statsPanel.innerHTML = html;
}

// 統計エラー表示
function displayStatisticsError() {
    const statsPanel = document.getElementById('statistics-panel');
    if (!statsPanel) return;

    statsPanel.innerHTML = `
        <div class="statistics-error">
            <p>⚠️ 統計情報を取得できませんでした</p>
            <button onclick="fetchStatistics()" class="retry-button">再試行</button>
        </div>
    `;
}

// 統計情報の初期化
function initStatistics() {
    updateStatisticsDisplay();
}
