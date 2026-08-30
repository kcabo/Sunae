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
  borderRadius: number
  title: string
}

export const DEFAULT_STATE: BookmarkletState = {
  preset: 'default',
  bg1: '#ffffff',
  bg2: '#f5f5f5',
  text: '#2c3e50',
  fontFamily: 'sans-serif',
  lineHeight: 1.625,
  padding: 32,
  margin: 48,
  maxWidth: 800,
  borderRadius: 12,
  title: '📌 Memo',
}

export const PRESETS = [
  // Light
  { id: 'default', name: 'Cloud', bg1: '#ffffff', bg2: '#f0f0f0', text: '#1a1a2e' },
  { id: 'paper', name: 'Paper', bg1: '#fdfcf7', bg2: '#edeade', text: '#2a2620' },
  { id: 'solarized', name: 'Solarized', bg1: '#fdf6e3', bg2: '#eee8d5', text: '#586e75' },
  { id: 'newsprint', name: 'Newsprint', bg1: '#f2eedc', bg2: '#c8c4a8', text: '#1a1810' },
  { id: 'sakura', name: 'Sakura', bg1: '#fff5f7', bg2: '#ffd8e6', text: '#7a2040' },
  { id: 'lavender', name: 'Lavender', bg1: '#f6f0ff', bg2: '#ded0ff', text: '#3d2466' },
  { id: 'sky', name: 'Sky', bg1: '#e8f6ff', bg2: '#b8dff5', text: '#0a2a50' },
  { id: 'mint', name: 'Mint', bg1: '#eefaf3', bg2: '#b8e8cc', text: '#0a3020' },
  { id: 'lemon', name: 'Lemon', bg1: '#fffde8', bg2: '#f5e840', text: '#2a2800' },
  { id: 'peach', name: 'Peach', bg1: '#fff3ec', bg2: '#ffc8a0', text: '#6a2808' },
  { id: 'rose', name: 'Rose', bg1: '#fff0f4', bg2: '#ffc0d4', text: '#6a1038' },
  { id: 'matcha', name: 'Matcha', bg1: '#edf2e0', bg2: '#b8d080', text: '#1e2e08' },
  { id: 'sand', name: 'Sand', bg1: '#f8f2e4', bg2: '#d8c090', text: '#3a2810' },
  { id: 'fog', name: 'Fog', bg1: '#f5f5f8', bg2: '#d8d8e8', text: '#303040' },
  { id: 'ice', name: 'Ice', bg1: '#f0f8ff', bg2: '#a0d8f8', text: '#082840' },
  { id: 'chalk', name: 'Chalk', bg1: '#f5f0eb', bg2: '#e0d8cc', text: '#1a1410' },
  // Dark
  { id: 'noir', name: 'Noir', bg1: '#111111', bg2: '#080808', text: '#e8e8e8' },
  { id: 'monokai', name: 'Monokai', bg1: '#272822', bg2: '#1c1d18', text: '#f8f8f2' },
  { id: 'dracula', name: 'Dracula', bg1: '#282a36', bg2: '#1e2029', text: '#bd93f9' },
  { id: 'nord', name: 'Nord', bg1: '#2e3440', bg2: '#232830', text: '#88c0d0' },
  { id: 'gruvbox', name: 'Gruvbox', bg1: '#282828', bg2: '#1d2021', text: '#ebdbb2' },
  { id: 'ocean', name: 'Ocean', bg1: '#0f2040', bg2: '#081428', text: '#60c8ff' },
  { id: 'emerald', name: 'Emerald', bg1: '#0a2e1e', bg2: '#051810', text: '#50e8a0' },
  { id: 'purple', name: 'Purple Haze', bg1: '#1a1030', bg2: '#100820', text: '#d0a0ff' },
  { id: 'cyberpunk', name: 'Cyberpunk', bg1: '#0a0a16', bg2: '#06060e', text: '#00ffd1' },
  { id: 'cherry', name: 'Cherry', bg1: '#200a12', bg2: '#14060c', text: '#ff80a8' },
  { id: 'coffee', name: 'Coffee', bg1: '#1e1610', bg2: '#120e08', text: '#e0b880' },
  { id: 'forest', name: 'Forest', bg1: '#111e14', bg2: '#080e0a', text: '#78c888' },
  { id: 'dusk', name: 'Dusk', bg1: '#1e1828', bg2: '#14101c', text: '#e0b0d8' },
  { id: 'rust', name: 'Rust', bg1: '#1e1208', bg2: '#120a04', text: '#f0804a' },
  { id: 'steel', name: 'Steel', bg1: '#181e28', bg2: '#0e1218', text: '#90b8d8' },
  { id: 'volcano', name: 'Volcano', bg1: '#1e0a08', bg2: '#120604', text: '#ff6040' },
]

export const TITLE_TEMPLATES = [
  { emoji: '📌', label: 'Memo' },
  { emoji: '✏️', label: 'Note' },
  { emoji: '💭', label: 'Thoughts' },
  { emoji: '📓', label: 'Journal' },
  { emoji: '💡', label: 'Idea' },
  { emoji: '📋', label: 'Todo' },
]

export const I18N = {
  ja: {
    title: 'Sunae',
    subtitle:
      'あなただけのメモ帳を作れます。\n作ったメモ帳はブラウザのブックマークに登録でき、クリック一つで即座に開けます。\n余計な機能は一切ありません。気軽にメモして、閉じたら消える。ただそれだけの、世界で一番シンプルなメモ帳です。',
    preview: 'プレビュー',
    presets: 'カラープリセット',
    bg1: '背景色（メモ帳）',
    bg2: '背景色（外側）',
    text: '文字色',
    lineHeight: '行間',
    padding: '内側余白',
    margin: '外側余白',
    maxWidth: '最大幅',
    borderRadius: '角丸',
    title_field: 'タイトル',
    install: 'ブラウザへの登録方法',
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
    subtitle:
      "Create your own notepad.\nRegister it as a browser bookmark and open it instantly with one click.\nNo extra features. Just write, close, and it's gone. The simplest notepad in the world.",
    preview: 'Preview',
    presets: 'Color presets',
    bg1: 'Background (page)',
    bg2: 'Background (outer)',
    text: 'Text color',
    lineHeight: 'Line height',
    padding: 'Inner padding',
    margin: 'Outer margin',
    maxWidth: 'Max width',
    borderRadius: 'Corner radius',
    title_field: 'Title',
    install: 'How to add to your browser',
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
  const { title, bg1, bg2, text, fontFamily, lineHeight, maxWidth, padding, margin, borderRadius } =
    { ...DEFAULT_STATE, ...opts }

  const safeTitle = String(title).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const faviconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='6' fill='${text}'/></svg>`

  return [
    '<head><meta charset="UTF-8">',
    `<title>${safeTitle}</title>`,
    `<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(faviconSvg)}">`,
    '<style>',
    `html{background:${bg2};min-height:100vh;}`,
    `body{background:${bg1};color:${text};line-height:${lineHeight};`,
    `padding:${padding}px;font-family:${fontFamily};`,
    `margin:${margin}px auto;max-width:${maxWidth}px;`,
    `min-height:400px;`,
    borderRadius > 0 ? `border-radius:${borderRadius}px;` : '',
    'box-shadow:0 2px 8px rgba(0,0,0,0.1);}',
    '</style></head>',
    '<body contenteditable></body>',
  ].join('')
}

export function buildBookmarkletURL(opts: Partial<BookmarkletState>): string {
  return 'data:text/html,' + encodeURIComponent(buildBookmarkletHTML(opts))
}
