import { PRESETS } from './presets'

export interface BookmarkletState {
  preset: string
  bg1: string
  bg2: string
  text: string
  lineHeight: number
  padding: number
  margin: number
  maxWidth: number
  borderRadius: number
  title: string
}

/** 生成される data: URL に埋め込む固定のフォント指定 */
export const FONT_FAMILY = 'sans-serif'

const [DEFAULT_PRESET] = PRESETS

export const DEFAULT_STATE: BookmarkletState = {
  preset: DEFAULT_PRESET.id,
  bg1: DEFAULT_PRESET.bg1,
  bg2: DEFAULT_PRESET.bg2,
  text: DEFAULT_PRESET.text,
  lineHeight: 1.625,
  padding: 32,
  margin: 48,
  maxWidth: 1000,
  borderRadius: 12,
  title: '📌 Memo',
}

/** メモ帳本体のスタイル。プレビューでも同じ関数を使って見た目を一致させる */
export function buildBookmarkletCSS(opts: Partial<BookmarkletState>): string {
  const { bg1, bg2, text, lineHeight, maxWidth, padding, margin, borderRadius } = {
    ...DEFAULT_STATE,
    ...opts,
  }

  return [
    `html{background:${bg2};min-height:100vh;}`,
    `body{background:${bg1};color:${text};line-height:${lineHeight};`,
    `padding:${padding}px;font-family:${FONT_FAMILY};`,
    `margin:${margin}px auto;max-width:${maxWidth}px;`,
    'min-height:400px;overflow-wrap:break-word;',
    borderRadius > 0 ? `border-radius:${borderRadius}px;` : '',
    'box-shadow:0 2px 8px rgba(0,0,0,0.1);}',
    // 貼り付けた画像・動画・表・コードが枠からはみ出さないようにする
    'img,video{max-width:100%;height:auto;}pre,table{display:block;max-width:100%;overflow-x:auto;}',
  ].join('')
}

export function buildBookmarkletHTML(opts: Partial<BookmarkletState>): string {
  const { title, text } = { ...DEFAULT_STATE, ...opts }

  const safeTitle = String(title).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const faviconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='6' fill='${text}'/></svg>`

  return [
    '<head><meta charset="UTF-8">',
    `<title>${safeTitle}</title>`,
    `<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(faviconSvg)}">`,
    `<style>${buildBookmarkletCSS(opts)}</style></head>`,
    '<body contenteditable></body>',
  ].join('')
}

export function buildBookmarkletURL(opts: Partial<BookmarkletState>): string {
  return 'data:text/html,' + encodeURIComponent(buildBookmarkletHTML(opts))
}
