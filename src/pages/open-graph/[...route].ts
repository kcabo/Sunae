import { OGImageRoute } from 'astro-og-canvas'

import { I18N } from '../../i18n'

/**
 * OGP 画像をビルド時に生成する。
 * 手描きの画像を持たずに、サイトの文言と同じソース (i18n.ts) から常に生成される。
 */
/**
 * CanvasKit はフォントファイル内のファミリー名で解決する。
 * fontsource が配信する TTF はウェイト名を含んだ名前で埋め込まれているため、
 * 実ファイルの name テーブルに合わせた文字列を指定している。
 */
const MONTSERRAT = 'Montserrat Thin'
const NOTO_SANS_JP = 'Noto Sans JP Thin'

export const { getStaticPaths, GET } = await OGImageRoute({
  pages: {
    index: {
      title: I18N.ja.title,
      description: I18N.ja.ogDescription,
    },
  },

  getImageOptions: (_path, page: { title: string; description: string }) => ({
    title: page.title,
    description: page.description,
    padding: 90,
    logo: { path: './src/assets/og-logo.png', size: [96] },
    bgGradient: [
      [250, 250, 249],
      [235, 235, 232],
    ],
    border: { color: [39, 39, 42], width: 12, side: 'block-end' },
    font: {
      title: {
        families: [MONTSERRAT, NOTO_SANS_JP],
        size: 150,
        color: [39, 39, 42],
      },
      description: {
        families: [NOTO_SANS_JP, MONTSERRAT],
        size: 40,
        lineHeight: 1.6,
        color: [113, 113, 122],
      },
    },
    fonts: [
      'https://cdn.jsdelivr.net/fontsource/fonts/montserrat@latest/latin-200-italic.ttf',
      'https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-jp@latest/japanese-400-normal.ttf',
    ],
  }),
})
