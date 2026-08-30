<div align="center">

<img src="https://kcabo.github.io/Sunae/open-graph/index.png" alt="Sunae" width="640">

### 保存できません。それが仕様です。

![オフライン対応](https://img.shields.io/badge/オフライン対応-強制-27272a?style=for-the-badge) ![データ漏洩](https://img.shields.io/badge/データ漏洩-構造上不可能-27272a?style=for-the-badge) ![永続化](https://img.shields.io/badge/永続化-諸行無常-52525b?style=for-the-badge) ![バックアップ](https://img.shields.io/badge/バックアップ-記憶力-52525b?style=for-the-badge) ![ロードマップ](https://img.shields.io/badge/ロードマップ-特になし-a1a1aa?style=for-the-badge) ![テスト](https://img.shields.io/badge/テスト-祈祷済み-a1a1aa?style=for-the-badge)

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white) ![SolidJS](https://img.shields.io/badge/SolidJS-2C4F7C?style=for-the-badge&logo=solid&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Rollup](https://img.shields.io/badge/Rollup-EC4A3F?style=for-the-badge&logo=rollupdotjs&logoColor=white) ![esbuild](https://img.shields.io/badge/esbuild-FFCF00?style=for-the-badge&logo=esbuild&logoColor=black) ![oxlint](https://img.shields.io/badge/oxlint-2B2D42?style=for-the-badge&logo=oxc&logoColor=white) ![oxfmt](https://img.shields.io/badge/oxfmt-2B2D42?style=for-the-badge&logo=oxc&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css&logoColor=white) ![SVG](https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black) ![WebAssembly](https://img.shields.io/badge/WebAssembly-654FF0?style=for-the-badge&logo=webassembly&logoColor=white) ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white) ![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white) ![YAML](https://img.shields.io/badge/YAML-CB171E?style=for-the-badge&logo=yaml&logoColor=white) ![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white) ![Shields.io](https://img.shields.io/badge/Shields.io-000000?style=for-the-badge&logo=shieldsdotio&logoColor=white)

ぜんぶ本当に使っています。動いているのは HTML と CSS だけですが。

[![Deploy](https://github.com/kcabo/Sunae/actions/workflows/deploy.yml/badge.svg)](https://github.com/kcabo/Sunae/actions/workflows/deploy.yml)
[![License](https://img.shields.io/badge/License-MIT-27272a?style=flat-square)](./LICENSE)

**[▶ サイトを開く](https://kcabo.github.io/Sunae/)**

</div>

---

## なにこれ

オフラインで動作する、自分だけのメモ帳を作れるサービスです。
ブラウザ上で[ブックマークレット](https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%83%E3%82%AF%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88)として動作します。

世界一シンプルで、世界一起動が速い (はずです多分)。

色は32種類のプリセットから選べます。余白も角丸も最大幅も好きに決められます。
決めた設定はブックマークの URL そのものに焼き付きます。

## 使い方

1. [サイト](https://kcabo.github.io/Sunae/) を開く
2. 好みのカラープリセットやレイアウトを選ぶ
3. 「📌 Memo」ボタンをブックマークバーへドラッグ＆ドロップ
4. 以降はそのブックマークをクリックするだけでメモ帳が開く

以上です。アカウント登録もインストールもありません。

## 仕組み

Sunae は `data:text/html,...` 形式の URL をブックマークとして保存することで動作します。
クリックするとブラウザが直接 HTML を描画し、`contenteditable` な `<body>` にそのまま入力できます。

```
data:text/html,<head><title>📌 Memo</title><style>…</style></head><body contenteditable></body>
```

これだけです。通信はゼロ。サーバーもデータベースも存在しません。

なお `data:` URL へのトップレベル遷移はフィッシング対策としてブラウザ側でブロックされていますが、
ブックマークからの起動はユーザー操作起点のため対象外です。

## できないこと

| できないこと     | 代わりにどうぞ             |
| :--------------- | :------------------------- |
| 保存             | コピーして他所に貼る       |
| 共有             | 同じく                     |
| 履歴の復元       | ありません                 |
| 設定の後から変更 | 作り直してブックマーク更新 |

ページを閉じると内容は消えます。砂絵のように儚く。

## 開発

| コマンド        | 説明                              |
| :-------------- | :-------------------------------- |
| `pnpm install`  | 依存関係のインストール            |
| `pnpm dev`      | 開発サーバー起動 (localhost:4321) |
| `pnpm build`    | 本番ビルド (`./dist/`)            |
| `pnpm preview`  | ビルド結果のプレビュー            |
| `pnpm check`    | 型・lint・フォーマットを一括検査  |
| `pnpm lint:fix` | lint の自動修正                   |
| `pnpm format`   | フォーマット適用                  |

OGP 画像は `src/pages/open-graph/[...route].ts` がビルド時に生成します。
文言は `src/i18n.ts` が唯一のソースなので、書き換えれば画像も追従します。

## デプロイ

`main` ブランチへのプッシュで GitHub Pages へ自動デプロイされます。
`pnpm check` が通らないとデプロイは走りません。

<div align="center">

Made by [kcabo](https://kcabo.vercel.app/)

</div>
