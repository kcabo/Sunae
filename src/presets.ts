/**
 * カラープリセット。
 *
 * 名前が実在の配色に由来するものは、その配布元が公開している背景色と本文色に
 * 合わせている (Catppuccin は公式パレット v1.8.0 の base / mantle / text)。
 * それ以外は Sunae のオリジナル。
 *
 * 並びは色相順で、近い色が隣り合うようにしている。
 */

export const LIGHT_PRESETS = [
  // 無彩色
  { id: 'cloud', name: 'Cloud', bg1: '#ffffff', bg2: '#f0f0f0', text: '#1a1a2e' },
  { id: 'latte', name: 'Latte', bg1: '#eff1f5', bg2: '#e6e9ef', text: '#4c4f69' },
  { id: 'chalk', name: 'Chalk', bg1: '#f5f0eb', bg2: '#e0d8cc', text: '#1a1410' },
  // ベージュ・橙
  { id: 'paper', name: 'Paper', bg1: '#fdfcf7', bg2: '#edeade', text: '#2a2620' },
  { id: 'newsprint', name: 'News', bg1: '#f2eedc', bg2: '#c8c4a8', text: '#1a1810' },
  { id: 'sand', name: 'Sand', bg1: '#f8f2e4', bg2: '#d8c090', text: '#3a2810' },
  { id: 'peach', name: 'Peach', bg1: '#fff3ec', bg2: '#ffc8a0', text: '#6a2808' },
  // 黄・緑
  { id: 'lemon', name: 'Lemon', bg1: '#fffde8', bg2: '#f5e840', text: '#2a2800' },
  { id: 'solarized', name: 'Solarized', bg1: '#fdf6e3', bg2: '#eee8d5', text: '#657b83' },
  { id: 'matcha', name: 'Matcha', bg1: '#edf2e0', bg2: '#b8d080', text: '#1e2e08' },
  { id: 'mint', name: 'Mint', bg1: '#eefaf3', bg2: '#b8e8cc', text: '#0a3020' },
  // 青・紫・桃
  { id: 'sky', name: 'Sky', bg1: '#e8f6ff', bg2: '#b8dff5', text: '#0a2a50' },
  { id: 'lavender', name: 'Lavender', bg1: '#f6f0ff', bg2: '#ded0ff', text: '#3d2466' },
  { id: 'sakura', name: 'Sakura', bg1: '#fff5f7', bg2: '#ffd8e6', text: '#7a2040' },
  { id: 'rose', name: 'Rose', bg1: '#fff0f4', bg2: '#ffc0d4', text: '#6a1038' },
]

export const DARK_PRESETS = [
  // 無彩色・暖灰
  { id: 'noir', name: 'Noir', bg1: '#111111', bg2: '#080808', text: '#e8e8e8' },
  { id: 'gruvbox', name: 'Gruvbox', bg1: '#282828', bg2: '#1d2021', text: '#ebdbb2' },
  { id: 'monokai', name: 'Monokai', bg1: '#272822', bg2: '#1c1d18', text: '#f8f8f2' },
  // 茶・橙・赤
  { id: 'coffee', name: 'Coffee', bg1: '#1e1610', bg2: '#120e08', text: '#e0b880' },
  { id: 'rust', name: 'Rust', bg1: '#1e1208', bg2: '#120a04', text: '#f0804a' },
  { id: 'volcano', name: 'Volcano', bg1: '#1e0a08', bg2: '#120604', text: '#ff6040' },
  { id: 'cherry', name: 'Cherry', bg1: '#200a12', bg2: '#14060c', text: '#ff80a8' },
  // 紫
  { id: 'dusk', name: 'Dusk', bg1: '#1e1828', bg2: '#14101c', text: '#e0b0d8' },
  { id: 'purple', name: 'Purple', bg1: '#1a1030', bg2: '#100820', text: '#d0a0ff' },
  { id: 'dracula', name: 'Dracula', bg1: '#282a36', bg2: '#1e2029', text: '#f8f8f2' },
  { id: 'mocha', name: 'Mocha', bg1: '#1e1e2e', bg2: '#181825', text: '#cdd6f4' },
  // 青・緑
  { id: 'nord', name: 'Nord', bg1: '#2e3440', bg2: '#242933', text: '#d8dee9' },
  { id: 'ocean', name: 'Ocean', bg1: '#0f2040', bg2: '#081428', text: '#60c8ff' },
  { id: 'cyberpunk', name: 'Cyber', bg1: '#0a0a16', bg2: '#06060e', text: '#00ffd1' },
  { id: 'emerald', name: 'Emerald', bg1: '#0a2e1e', bg2: '#051810', text: '#50e8a0' },
]

export const PRESETS = [...LIGHT_PRESETS, ...DARK_PRESETS]

export const TITLE_TEMPLATES = [
  { emoji: '📌', label: 'Memo' },
  { emoji: '✏️', label: 'Note' },
  { emoji: '💭', label: 'Thoughts' },
  { emoji: '📓', label: 'Journal' },
  { emoji: '💡', label: 'Idea' },
  { emoji: '📋', label: 'Todo' },
]
