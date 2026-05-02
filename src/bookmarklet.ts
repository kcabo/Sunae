export interface BookmarkletState {
  preset: string
  bg1: string
  bg2: string
  text: string
  fontFamily: string
  lineHeight: number
  padding: number
  margin: number
  maxWidth: number
  title: string
}

export const DEFAULT_STATE: BookmarkletState = {
  preset: 'default',
  bg1: '#ffffff',
  bg2: '#f5f5f5',
  text: '#2c3e50',
  fontFamily: 'sans-serif',
  lineHeight: 1.5,
  padding: 32,
  margin: 48,
  maxWidth: 800,
  title: '📝 メモ',
}

export const PRESETS = [
  { id: 'default',   name: 'Default',     bg1: '#ffffff', bg2: '#f5f5f5', text: '#2c3e50' },
  { id: 'ocean',     name: 'Ocean',       bg1: '#0f1e3a', bg2: '#0a1426', text: '#e6f0ff' },
  { id: 'sunset',    name: 'Sunset',      bg1: '#fff1e6', bg2: '#ffd9b3', text: '#7a3b00' },
  { id: 'forest',    name: 'Forest',      bg1: '#e8f3e8', bg2: '#1f3a1f', text: '#0d2818' },
  { id: 'lavender',  name: 'Lavender',    bg1: '#f4ecff', bg2: '#e8dcff', text: '#3d2466' },
  { id: 'cyberpunk', name: 'Cyberpunk',   bg1: '#0a0a14', bg2: '#1a0a2e', text: '#00ffd1' },
  { id: 'coral',     name: 'Coral',       bg1: '#fff0ec', bg2: '#ffded2', text: '#a83820' },
  { id: 'mint',      name: 'Mint',        bg1: '#e8f7f1', bg2: '#c8ebd9', text: '#1a4a3a' },
  { id: 'monokai',   name: 'Monokai',     bg1: '#272822', bg2: '#1d1e19', text: '#f8f8f2' },
  { id: 'purple',    name: 'Purple Haze', bg1: '#1a0f3a', bg2: '#0f0828', text: '#c8a8ff' },
  { id: 'amber',     name: 'Amber',       bg1: '#fff7e0', bg2: '#ffe9b3', text: '#8a5a00' },
  { id: 'teal',      name: 'Teal',        bg1: '#0d3a3a', bg2: '#072525', text: '#a8e8e0' },
  { id: 'rose',      name: 'Rose',        bg1: '#ffe6ef', bg2: '#ffd0e0', text: '#8a1a4a' },
  { id: 'indigo',    name: 'Indigo',      bg1: '#1a1f4a', bg2: '#0d1230', text: '#c5cae8' },
  { id: 'lime',      name: 'Lime',        bg1: '#f6ffe0', bg2: '#e6f5b3', text: '#3a4a00' },
  { id: 'deepocean', name: 'Deep Ocean',  bg1: '#16365c', bg2: '#0a1f3a', text: '#bcd4eb' },
  { id: 'peach',     name: 'Peach',       bg1: '#ffe8d6', bg2: '#ffd5b3', text: '#8c4a1a' },
  { id: 'emerald',   name: 'Emerald',     bg1: '#0a3322', bg2: '#051f15', text: '#80e8b8' },
  { id: 'dracula',   name: 'Dracula',     bg1: '#282a36', bg2: '#1d1f29', text: '#f8f8f2' },
  { id: 'sky',       name: 'Sky',         bg1: '#e0f2ff', bg2: '#c5e3f7', text: '#1a4a78' },
  { id: 'sand',      name: 'Sand',        bg1: '#f7f1e3', bg2: '#ebe0c5', text: '#5a4628' },
  { id: 'noir',      name: 'Noir',        bg1: '#0a0a0a', bg2: '#000000', text: '#e8e8e8' },
  { id: 'paper',     name: 'Paper',       bg1: '#fdfcf7', bg2: '#e8e4d8', text: '#2a2620' },
  { id: 'solarized', name: 'Solarized',   bg1: '#fdf6e3', bg2: '#eee8d5', text: '#586e75' },
  { id: 'nord',      name: 'Nord',        bg1: '#2e3440', bg2: '#242933', text: '#d8dee9' },
  { id: 'gruvbox',   name: 'Gruvbox',     bg1: '#282828', bg2: '#1d2021', text: '#ebdbb2' },
  { id: 'sakura',    name: 'Sakura',      bg1: '#fff0f3', bg2: '#ffe0e8', text: '#8a3854' },
  { id: 'matcha',    name: 'Matcha',      bg1: '#e8efd8', bg2: '#c8d8a8', text: '#2a3a18' },
  { id: 'denim',     name: 'Denim',       bg1: '#3a5a8a', bg2: '#2a4670', text: '#e0e8f5' },
  { id: 'vintage',   name: 'Vintage',     bg1: '#f5e8d0', bg2: '#d8c8a8', text: '#5a3a20' },
]

export const TITLE_TEMPLATES = [
  { emoji: '📝', label: 'メモ' },
  { emoji: '✏️', label: 'Note' },
  { emoji: '💭', label: 'Thoughts' },
  { emoji: '📓', label: 'Journal' },
  { emoji: '🗒️', label: 'Scratch' },
  { emoji: '☕', label: 'Café' },
  { emoji: '🌱', label: 'Idea' },
  { emoji: '🔖', label: 'Memo' },
  { emoji: '✨', label: 'Inbox' },
  { emoji: '📋', label: 'Todo' },
]

export const I18N = {
  ja: {
    title: 'Sunae',
    subtitle: '世界一シンプルなメモ帳。ブラウザのブックマークから光の速さで起動。',
    preview: 'プレビュー',
    presets: 'カラープリセット',
    bg1: '背景色（メモ帳）',
    bg2: '背景色（外側）',
    text: '文字色',
    lineHeight: '行間',
    padding: '内側余白',
    margin: '外側マージン',
    maxWidth: '最大幅',
    title_field: 'タイトル',
    install: 'インストール',
    installHint: '右のボタンをブックマークバーへドラッグ&ドロップ',
    copyUrl: 'URLをコピー',
    copied: 'コピーしました!',
    drag: 'ドラッグ&ドロップ',
    test: 'テストで開く',
    reset: 'リセット',
    sampleText: '今日のタスク\n・プロジェクトの資料を作成\n・ミーティングの準備\n・メールの返信',
  },
  en: {
    title: 'Sunae',
    subtitle: 'The simplest notepad in the world. Launch from your bookmark bar at the speed of light.',
    preview: 'Preview',
    presets: 'Color presets',
    bg1: 'Background (page)',
    bg2: 'Background (outer)',
    text: 'Text color',
    lineHeight: 'Line height',
    padding: 'Inner padding',
    margin: 'Outer margin',
    maxWidth: 'Max width',
    title_field: 'Title',
    install: 'Install',
    installHint: 'Drag the button on the right to your bookmark bar',
    copyUrl: 'Copy URL',
    copied: 'Copied!',
    drag: 'Drag & drop',
    test: 'Open test',
    reset: 'Reset',
    sampleText: "Today's tasks\n· Draft project doc\n· Prep for meeting\n· Reply to emails",
  },
} as const

export type Lang = keyof typeof I18N

export function buildBookmarkletHTML(opts: Partial<BookmarkletState>): string {
  const {
    title = '📝 メモ',
    bg1 = '#ffffff',
    bg2 = '#f5f5f5',
    text = '#2c3e50',
    fontFamily = 'sans-serif',
    lineHeight = 1.5,
    maxWidth = 800,
    padding = 32,
    margin = 48,
  } = opts

  const safeTitle = String(title)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  return [
    '<head><meta charset="UTF-8">',
    `<title>${safeTitle}</title>`,
    '<style>',
    `html{background:${bg2};min-height:100vh;}`,
    `body{background:${bg1};color:${text};line-height:${lineHeight};`,
    `padding:${padding}px;font-family:${fontFamily};`,
    `margin:${margin}px auto;max-width:${maxWidth}px;`,
    `min-height:calc(100vh - ${margin * 2}px);`,
    'box-shadow:0 2px 8px rgba(0,0,0,0.1);}',
    '</style></head>',
    '<body contenteditable></body>',
  ].join('')
}

export function buildBookmarkletURL(opts: Partial<BookmarkletState>): string {
  return 'data:text/html,' + encodeURIComponent(buildBookmarkletHTML(opts))
}
