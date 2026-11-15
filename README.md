# ちいさな さかなの おおきな ぼうけん

モジャコ → ワカシ → イナダ → ワラサ → ブリの成長を紹介する日本語Web絵本。

## 内容
- 表紙、成長5段階、おしまいの全7ページ
- 自作SVGイラストと短い読み聞かせ文
- 手動ページ送り、横スワイプ、左右矢印キー
- 音声、自動送り、点滅、追跡、外部フォントやライブラリなし
- 個人情報や認証情報を含まない静的サイト

## ファイル
`public/index.html`、`public/style.css`、`public/app.js` が配信ファイルです。ビルドや依存ライブラリは不要です。

## ローカル確認
`python3 -m http.server 8000 --directory public` を実行し http://localhost:8000 を開きます。
構文確認: `node --check public/app.js`

## Vercel
静的サイトとしてインポートします。Framework PresetはOther、Output Directoryはpublic。ビルドは不要です。
デプロイ前に対象チームと公開範囲を確認してください。GitHubのprivate設定だけではWebサイトは非公開になりません。

## 出典
[神奈川県「おさかな図鑑（ブリ）」](https://www.pref.kanagawa.jp/docs/mx7/cnt/f430693/zukan-buri.html)
呼び名は主に関東の例です。地域により呼び名や大きさの区切りは異なります。絵の大きさは実際の比率とは異なります。

## 検証
ブラウザで7ページの順序、再読、保護者向け説明を確認。390px・320px幅のレイアウトを確認済み。
