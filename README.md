# ちいさな さかなの おおきな ぼうけん

**[公開中の絵本をひらく](https://jiioryo.github.io/buri-picture-book/)**

モジャコからブリへの成長を紹介する日本語Web絵本。
関東（モジャコ → ワカシ → イナダ → ワラサ → ブリ）と関西（モジャコ → ツバス → ハマチ → メジロ → ブリ）の代表的な呼び名を切り替えられます。

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
[東京都島しょ農林水産総合センター「ブリ」](https://www.ifarc.metro.tokyo.lg.jp/archive/27%2C1087%2C55%2C227.html)
[環境省「せとうちネット：ハマチ」](https://www.env.go.jp/water/heisa/heisa_net/setouchiNet/seto/g1/g1chapter1/ikimono/hamachi.html)
イラストは形態の記述を参考にしたオリジナルSVGで、第三者の写真・画像は使用していません。丸みのある体、大きな目、にっこりした口、淡いほっぺの色で、親しみやすく描いています。モジャコの縞模様と成魚の黄色い帯は残しています。
呼び名は代表例で、関東と関西の各ページは厳密な同一体長の対応ではありません。地域により呼び名や大きさの区切りは異なります。絵の大きさは実際の比率とは異なります。

## 検証
ブラウザで7ページの順序、再読、保護者向け説明を確認。390px・320px幅のレイアウトを確認済み。
