import { createSignal, createMemo } from 'solid-js'
import {
  DEFAULT_STATE,
  PRESETS,
  I18N,
  buildBookmarkletURL,
  type BookmarkletState,
  type Lang,
} from '../bookmarklet'
import { LivePreview } from './LivePreview'
import { PresetGrid } from './PresetGrid'
import { ColorField } from './ColorField'
import { ChipGroup } from './ChipGroup'
import { SliderField } from './SliderField'
import { TitleField } from './TitleField'
import { CopyButton } from './CopyButton'
import { LangToggle } from './LangToggle'

export default function App() {
  const [lang, setLang] = createSignal<Lang>('ja')
  const [state, setState] = createSignal<BookmarkletState>({ ...DEFAULT_STATE })

  const update = (patch: Partial<BookmarkletState>) =>
    setState(s => ({ ...s, ...patch }))

  const applyPreset = (id: string) => {
    const p = PRESETS.find(x => x.id === id)
    if (!p) return
    setState(s => ({ ...s, preset: p.id, bg1: p.bg1, bg2: p.bg2, text: p.text }))
  }

  const reset = () => setState({ ...DEFAULT_STATE })

  const url = createMemo(() => buildBookmarkletURL(state()))
  const t = createMemo(() => I18N[lang()])

  return (
    <div class="w-full max-w-[1280px] min-h-screen mx-auto bg-[#fafaf9] text-[#27272a] px-12 py-10 box-border flex flex-col gap-7"
      style={{ "font-family": '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>

      {/* Header */}
      <div class="flex justify-between items-end">
        <div>
          <h1 class="text-[84px] font-thin m-0 leading-none tracking-tighter text-[#111]"
            style={{ "font-family": '-apple-system, "Helvetica Neue", Helvetica, sans-serif' }}>
            {t().title}
          </h1>
          <p class="text-base text-[#52525b] mt-3.5 max-w-[560px] leading-relaxed">
            {t().subtitle}
          </p>
        </div>
        <div class="flex gap-2 items-center pb-1.5">
          <LangToggle value={lang()} onChange={setLang} />
        </div>
      </div>

      {/* Body grid */}
      <div class="grid gap-8 flex-1" style={{ "grid-template-columns": 'minmax(0,6fr) minmax(0,4fr)' }}>

        {/* LEFT: Preview + install */}
        <div class="flex flex-col gap-4 sticky top-8 self-start">
          <PreviewFrame url={url()} label={state().title} textColor={state().text} height={460}>
            <LivePreview state={state()} sampleText={t().sampleText} />
          </PreviewFrame>

          {/* Install row */}
          <div class="bg-white border border-[#e4e4e7] rounded-[10px] p-[18px] flex items-center gap-3.5">
            <div class="flex-1 min-w-0">
              <div class="text-sm font-semibold text-[#27272a] mb-0.5">{t().install}</div>
              <div class="text-[13px] text-[#71717a] leading-snug">{t().installHint}</div>
            </div>
            <a
              href={url()}
              onClick={e => e.preventDefault()}
              draggable="true"
              class="inline-flex items-center gap-2 bg-[#111] text-white px-4 py-2.5 rounded-lg text-sm font-medium cursor-grab select-none no-underline shrink-0"
            >
              {state().title}
            </a>
            <div class="w-px h-7 bg-[#e4e4e7]" />
            <CopyButton text={url()} label={t().copyUrl} confirmLabel={t().copied} />
          </div>
        </div>

        {/* RIGHT: Controls */}
        <div class="bg-white border border-[#e4e4e7] rounded-[10px] p-5 flex flex-col gap-[22px] self-start">
          <TitleField
            label={t().title_field}
            value={state().title}
            onChange={v => update({ title: v })}
          />

          <div>
            <div class="text-[13px] text-[#52525b] mb-2.5 font-medium">{t().presets}</div>
            <PresetGrid value={state().preset} onChange={applyPreset} />
          </div>

          <div class="grid gap-2.5">
            <ColorField label={t().bg1} value={state().bg1} onChange={v => update({ bg1: v, preset: 'custom' })} />
            <ColorField label={t().bg2} value={state().bg2} onChange={v => update({ bg2: v, preset: 'custom' })} />
            <ColorField label={t().text} value={state().text} onChange={v => update({ text: v, preset: 'custom' })} />
          </div>

          <div class="grid gap-3.5">
            <ChipGroup
              label={t().lineHeight}
              options={[1, 1.25, 1.375, 1.5, 1.625, 2]}
              value={state().lineHeight}
              onChange={v => update({ lineHeight: v })}
            />
            <SliderField
              label={t().padding}
              value={state().padding}
              onChange={v => update({ padding: v })}
              min={8} max={64} step={4}
            />
            <SliderField
              label={t().margin}
              value={state().margin}
              onChange={v => update({ margin: v })}
              min={0} max={96} step={4}
            />
            <SliderField
              label={t().borderRadius}
              value={state().borderRadius}
              onChange={v => update({ borderRadius: v })}
              min={0} max={32} step={2}
            />
          </div>

          <button
            type="button"
            onClick={reset}
            class="text-[13px] text-[#71717a] bg-transparent border-none cursor-pointer p-0 self-start font-medium hover:text-[#27272a] transition-colors"
          >
            {t().reset}
          </button>
        </div>
      </div>
    </div>
  )
}

function PreviewFrame(props: { url: string; label: string; textColor: string; height: number; children: any }) {
  const dot = (color: string) => (
    <div class="w-[11px] h-[11px] rounded-full" style={{ background: color }} />
  )

  return (
    <div
      class="rounded-[10px] overflow-hidden bg-[#f0f0f0] border border-[#e4e4e7] flex flex-col"
      style={{
        "box-shadow": '0 1px 2px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.06)',
        height: `${props.height}px`,
      }}
    >
      {/* Traffic lights + tab */}
      <div class="flex items-end bg-[#f0f0f0] h-9 px-3 gap-3">
        <div class="flex gap-1.5 pb-3">
          {dot('#ff5f57')}{dot('#febc2e')}{dot('#28c840')}
        </div>
        <div class="bg-white h-7 px-3 flex items-center gap-2 rounded-t-lg text-xs text-[#27272a] min-w-[140px] max-w-[220px]">
          <svg width="13" height="13" viewBox="0 0 32 32" class="shrink-0">
            <circle cx="16" cy="16" r="6" fill={props.textColor} />
          </svg>
          <span class="flex-1 truncate">{props.label}</span>
          <span class="text-[#71717a] text-[13px] leading-none">×</span>
        </div>
      </div>
      {/* URL bar */}
      <div class="bg-white h-9 flex items-center gap-2 px-2.5 border-b border-[#e4e4e7]">
        <div class="w-3.5 h-3.5 rounded-[3px] bg-[#d4d4d8]" />
        <div class="flex-1 h-6 rounded-xl bg-[#f4f4f5] flex items-center px-2.5 text-[11px] text-[#71717a] font-mono whitespace-nowrap overflow-hidden">
          <span class="overflow-hidden text-ellipsis whitespace-nowrap">
            {props.url.slice(0, 60)}{props.url.length > 60 ? '…' : ''}
          </span>
        </div>
      </div>
      {/* Viewport */}
      <div class="flex-1 overflow-hidden bg-white relative">
        {props.children}
      </div>
    </div>
  )
}
