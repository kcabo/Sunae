<div align="center">

<img src="https://kcabo.github.io/Sunae/open-graph/index.png" alt="Sunae" width="640">

### 保存できません。それが仕様です。

![オフライン対応](https://img.shields.io/badge/オフライン対応-強制-27272a?style=for-the-badge) ![データ漏洩](https://img.shields.io/badge/データ漏洩-構造上不可能-27272a?style=for-the-badge) ![永続化](https://img.shields.io/badge/永続化-諸行無常-52525b?style=for-the-badge) ![バックアップ](https://img.shields.io/badge/バックアップ-記憶力-52525b?style=for-the-badge) ![ロードマップ](https://img.shields.io/badge/ロードマップ-特になし-a1a1aa?style=for-the-badge) ![テスト](https://img.shields.io/badge/テスト-祈祷済み-a1a1aa?style=for-the-badge)

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white) ![SolidJS](https://img.shields.io/badge/SolidJS-2C4F7C?style=for-the-badge&logo=solid&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![oxlint](https://img.shields.io/badge/oxlint-2B2D42?style=for-the-badge&logo=oxc&logoColor=white) ![oxfmt](https://img.shields.io/badge/oxfmt-2B2D42?style=for-the-badge&logo=oxc&logoColor=white) ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

[![Deploy](https://github.com/kcabo/Sunae/actions/workflows/deploy.yml/badge.svg)](https://github.com/kcabo/Sunae/actions/workflows/deploy.yml)
[![License](https://img.shields.io/badge/License-WTFPL-27272a?style=flat-square)](./LICENSE)

**[▶ サイトを開く](https://kcabo.github.io/Sunae/)**

</div>

---

## なにこれ

オフラインで動作する、自分だけのメモ帳を作れるサービスです。
ブラウザ上で[ブックマークレット](https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%83%E3%82%AF%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88)として動作します。

世界一シンプルで、世界一起動が速い (はずです多分)。

## 使い方

1. [サイト](https://kcabo.github.io/Sunae/) を開きます
2. カラープリセット (32種類) と、余白・最大幅・角丸・行間を選びます
3. 「📌 Memo」ボタンをブックマークバーへドラッグ＆ドロップします
4. 以降はそのブックマークをクリックするだけでメモ帳が開きます

アカウント登録もインストールも不要です。
設定はブックマークの URL に埋め込まれるため、あとから見た目を変えたい場合は
サイトで作り直してブックマークを登録し直してください。

## 仕組み

Sunae は `data:text/html,...` 形式の URL をブックマークとして保存することで動作します。
クリックするとブラウザが直接 HTML を描画し、`contenteditable` な `<body>` にそのまま入力できます。

```
data:text/html,<head><title>📌 Memo</title><style>…</style></head><body contenteditable></body>
```

生成されるのはこの一行だけです。サーバーもデータベースも存在せず、通信も発生しません。
入力した内容はページを閉じた時点で失われます。保存・共有・履歴の復元はできません。

なお `data:` URL へのトップレベル遷移はフィッシング対策としてブラウザ側でブロックされていますが、
ブックマークからの起動はユーザー操作起点のため対象外です。

## 開発

```
src/
├── bookmarklet.ts          # 設定の型・既定値・data: URL の生成
├── presets.ts              # カラープリセットとタイトルのテンプレート
├── i18n.ts                 # 日本語 / 英語の文言と Messages 型
├── components/             # SolidJS のコンポーネント
├── pages/index.astro       # ページ本体
└── pages/open-graph/       # OGP 画像の生成エンドポイント (satori)
```

lint は oxlint の correctness / suspicious / perf / pedantic / style を有効にし、
Tailwind のクラスの並びは oxfmt の `sortTailwindcss` が、クラス名の検証は
oxlint-tailwindcss が担当します (役割が重ならないよう設定してあります)。

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
文言のソースは `src/i18n.ts` の一箇所だけなので、書き換えれば画像も追従します。

## デプロイ

`main` ブランチへのプッシュで GitHub Pages へ自動デプロイされます。
`pnpm check` が通らない場合はビルドまで進みません。

## ライセンス

[WTFPL](./LICENSE)

<div align="center">

Made by [kcabo](https://kcabo.vercel.app/)

</div>
