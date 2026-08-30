<div align="center">

<img src="https://kcabo.github.io/Sunae/open-graph/index.png" alt="Sunae" width="640">

### 閉じたら消える。それだけのメモ帳。

[![サーバー](https://img.shields.io/badge/サーバー-存在しない-27272a?style=for-the-badge)](#仕組み) [![データベース](https://img.shields.io/badge/データベース-存在しない-27272a?style=for-the-badge)](#仕組み) [![保存機能](https://img.shields.io/badge/保存機能-非搭載-52525b?style=for-the-badge)](#できないこと) [![復元](https://img.shields.io/badge/復元-諦めてください-a1a1aa?style=for-the-badge)](#できないこと) [![寿命](https://img.shields.io/badge/寿命-タブを閉じるまで-a1a1aa?style=for-the-badge)](#できないこと)

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

<div align="center">

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white) ![SolidJS](https://img.shields.io/badge/SolidJS-2C4F7C?style=for-the-badge&logo=solid&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![oxc](https://img.shields.io/badge/oxlint_+_oxfmt-232F3E?style=for-the-badge&logo=oxc&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

</div>

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

[![Deploy](https://github.com/kcabo/Sunae/actions/workflows/deploy.yml/badge.svg)](https://github.com/kcabo/Sunae/actions/workflows/deploy.yml)

`main` ブランチへのプッシュで GitHub Pages へ自動デプロイされます。
`pnpm check` が通らないとデプロイは走りません。

## ライセンス

[MIT](./LICENSE)

<div align="center">

Made by [kcabo](https://kcabo.vercel.app/)

</div>
