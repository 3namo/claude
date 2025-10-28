# セキュリティ設定ガイド

このドキュメントでは、APIキーのセキュリティを強化するための設定方法を説明します。

## ⚠️ 重要：すぐに設定してください

現在、APIキーがソースコードに含まれているため、以下の設定を**すぐに**行ってください。

---

## 1. OpenWeatherMap APIのリファラー制限設定

### 手順：

1. **OpenWeatherMapにログイン**
   - https://home.openweathermap.org/ にアクセス
   - アカウントにログイン

2. **API Keysページを開く**
   - 上部メニューの「API keys」をクリック
   - または: https://home.openweathermap.org/api_keys

3. **既存のAPIキーを編集**
   - あなたのAPIキー: `f5ced26dbed1c3f5d9ca115851dd4cce`
   - 「Edit」ボタンをクリック

4. **API key restrictionsを設定**
   - 「HTTP referrers (web sites)」を選択
   - 以下のドメインを追加：
     ```
     https://3namo.github.io/*
     http://localhost:*
     ```
   - これにより、これらのドメインからのリクエストのみ許可されます

5. **保存**
   - 「Save」ボタンをクリック
   - 設定が反映されるまで数分かかる場合があります

### 設定後の動作：

✅ **許可される**：
- `https://3namo.github.io/claude/` からのリクエスト
- ローカル開発環境 (`localhost`) からのリクエスト

❌ **ブロックされる**：
- 他のウェブサイトからのリクエスト
- 直接APIを呼び出す試み

---

## 2. APIキーの再生成（推奨）

チャット履歴にAPIキーが残ってしまったため、より安全にするために**新しいAPIキーを生成**することを推奨します。

### 手順：

1. **新しいAPIキーを作成**
   - OpenWeatherMapの「API keys」ページ
   - 「Create Key」をクリック
   - 名前を入力（例：「Tsudanuma Map」）
   - 上記のリファラー制限を設定

2. **config.jsを更新**
   - `config.js` ファイルを開く
   - `apiKey` の値を新しいキーに変更
   - コミット＆プッシュ

3. **古いAPIキーを削除**
   - OpenWeatherMapのダッシュボードで古いキーを削除

---

## 3. e-Stat APIについて

e-Stat API（appId: `814ffd234a44d6a0bd01c7df404963638dc0b137`）は：

- ✅ **政府の公開API**で、課金システムがありません
- ✅ **完全無料**で使用できます
- ✅ リファラー制限の設定は不要です
- ⚠️ ただし、このappIdを第三者に使われる可能性はあります

もし気になる場合は、e-Statで新しいappIdを取得することもできます：
- https://www.e-stat.go.jp/api/

---

## 4. セキュリティチェックリスト

実装後、以下を確認してください：

- [ ] OpenWeatherMapのリファラー制限を設定した
- [ ] 可能であれば新しいAPIキーを生成した
- [ ] デプロイ後、サイトが正常に動作することを確認した
- [ ] ブラウザの開発者ツールでAPIリクエストを確認した

---

## 5. より高度なセキュリティ対策（オプション）

将来的により安全にしたい場合：

### A. Cloudflare Workersを使用

**メリット**：
- APIキーを完全に隠せる
- 無料枠: 10万リクエスト/日

**概要**：
```
ブラウザ → Cloudflare Workers → OpenWeatherMap
         (APIキーはWorkers側に保存)
```

### B. Vercel/Netlify Functionsを使用

**メリット**：
- サーバーレス関数でAPIキーを管理
- 無料で使用可能

**概要**：
```
ブラウザ → Serverless Function → OpenWeatherMap
         (APIキーは環境変数に保存)
```

必要であれば、これらの実装方法も説明できます。

---

## 6. 監視とアラート

### 使用量の確認

定期的にOpenWeatherMapのダッシュボードで使用量を確認：
- https://home.openweathermap.org/statistics

**無料プランの制限**：
- 60回/分
- 1,000,000回/日

通常の使用では全く問題ありませんが、念のため週に1回程度チェックすることをお勧めします。

---

## 7. トラブルシューティング

### 天気情報が表示されない

1. ブラウザの開発者ツール（F12）を開く
2. 「Console」タブでエラーを確認
3. 「Network」タブでAPIリクエストを確認

**よくあるエラー**：

- `401 Unauthorized` → APIキーが無効
- `403 Forbidden` → リファラー制限でブロックされている
- `429 Too Many Requests` → レート制限に達した

### リファラー制限の問題

リファラー制限を設定後、`localhost`で開発できない場合：
- 設定に `http://localhost:*` が含まれているか確認
- 反映に時間がかかる場合があります（最大10分）

---

## サポート

問題が発生した場合は、以下を確認してください：

1. OpenWeatherMap公式ドキュメント: https://openweathermap.org/appid
2. e-Stat API仕様書: https://www.e-stat.go.jp/api/api-info/api-spec

---

**最終更新**: 2025年10月
