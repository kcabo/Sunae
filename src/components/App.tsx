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
    if (p) update({ preset: p.id, bg1: p.bg1, bg2: p.bg2, text: p.text })
  }

  const reset = () => setState({ ...DEFAULT_STATE })

  const url = createMemo(() => buildBookmarkletURL(state()))
  const t = createMemo(() => I18N[lang()])

  return (
    <div class="relative w-full max-w-[1280px] min-h-screen mx-auto bg-[#fafaf9] text-zinc-800 px-5 py-8 lg:px-14 lg:py-10 box-border flex flex-col gap-10"
      style={{ "font-family": '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>

      {/* Lang toggle: top-right of container */}
      <div class="absolute top-8 right-5 lg:top-10 lg:right-14">
        <LangToggle value={lang()} onChange={setLang} />
      </div>

      {/* Header */}
      <div>
        <h1 class="grain-title font-extralight m-0 leading-none tracking-tighter text-[52px] lg:text-[84px]"
          style={{
            "font-family": '"Montserrat", sans-serif',
            "font-style": 'italic',
            "color": 'transparent',
            "background": `
              repeating-radial-gradient(#fafaf9 0 0.00003%, #52525b 0 0.00008%) 120% 50% / 15vw 15vw,
              repeating-conic-gradient(#fafaf9 0 0.00003%, #52525b 0 0.00008%) 115% 50% / 20vw 20vw
            `,
            "background-blend-mode": 'difference',
            "background-clip": 'text',
            "-webkit-background-clip": 'text',
          }}>
          {t().title}
        </h1>
        <p class="text-base text-zinc-600 mt-3 leading-loose whitespace-pre-line">
          {t().subtitle}
        </p>
      </div>

      {/* Body grid */}
      <div class="grid gap-8 flex-1 grid-cols-1 lg:[grid-template-columns:minmax(0,6fr)_minmax(0,4fr)]">

        {/* LEFT: Preview + install */}
        <div class="flex flex-col gap-5 lg:sticky lg:top-8 self-start">
          <PreviewFrame url={url()} label={state().title} textColor={state().text} height={460}>
            <LivePreview state={state()} sampleText={t().sampleText} />
          </PreviewFrame>

          {/* Install row */}
          <div class="bg-white border border-zinc-200 rounded-xl p-5 flex items-center gap-3.5">
            <div class="flex-1 min-w-0">
              <div class="text-sm font-semibold text-zinc-800 mb-0.5">{t().install}</div>
              <div class="text-sm text-zinc-500 leading-snug">{t().installHint}</div>
            </div>
            <a
              href={url()}
              onClick={e => e.preventDefault()}
              draggable="true"
              class="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium cursor-grab select-none no-underline shrink-0"
            >
              {state().title}
            </a>
            <div class="w-px h-7 bg-zinc-200" />
            <CopyButton text={url()} label={t().copyUrl} confirmLabel={t().copied} />
          </div>
        </div>

        {/* RIGHT: Controls */}
        <div class="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col gap-6 self-start">
          <TitleField
            label={t().title_field}
            value={state().title}
            onChange={v => update({ title: v })}
          />

          <div>
            <div class="text-sm text-zinc-600 mb-2.5 font-medium">{t().presets}</div>
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
            class="text-sm text-zinc-500 bg-transparent border-none cursor-pointer p-0 self-center font-medium hover:text-zinc-800 transition-colors mt-2"
          >
            {t().reset}
          </button>
        </div>
      </div>
    </div>
  )
}

function PreviewFrame(props: { url: string; label: string; textColor: string; height: number; children: any }) {
  return (
    <div
      class="rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 flex flex-col"
      style={{
        height: `${props.height}px`,
      }}
    >
      {/* Windows-style titlebar */}
      <div class="flex items-stretch bg-zinc-200 h-9">
        <div class="flex-1 flex items-end px-3">
          <div class="bg-white h-7 px-3 flex items-center gap-2 rounded-t-lg text-xs text-zinc-800 min-w-[140px] max-w-[220px]">
            <svg width="13" height="13" viewBox="0 0 32 32" class="shrink-0">
              <circle cx="16" cy="16" r="6" fill={props.textColor} />
            </svg>
            <span class="flex-1 truncate">{props.label}</span>
            <span class="text-zinc-500 text-sm leading-none">×</span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center justify-center w-9 h-full text-zinc-500 hover:bg-zinc-300 transition-colors">
            <svg width="10" height="1" viewBox="0 0 10 1"><rect width="10" height="1" fill="currentColor"/></svg>
          </div>
          <div class="flex items-center justify-center w-9 h-full text-zinc-500 hover:bg-zinc-300 transition-colors">
            <svg width="9" height="9" viewBox="0 0 9 9"><rect x="0.5" y="0.5" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1"/></svg>
          </div>
          <div class="flex items-center justify-center w-9 h-full text-zinc-500 hover:bg-red-500 hover:text-white transition-colors">
            <svg width="9" height="9" viewBox="0 0 9 9"><line x1="0" y1="0" x2="9" y2="9" stroke="currentColor" stroke-width="1.2"/><line x1="9" y1="0" x2="0" y2="9" stroke="currentColor" stroke-width="1.2"/></svg>
          </div>
        </div>
      </div>
      {/* URL bar */}
      <div class="bg-white h-9 flex items-center gap-2 px-2.5 border-b border-zinc-200">
        <div class="w-3.5 h-3.5 rounded-sm bg-zinc-300" />
        <div class="flex-1 h-6 rounded-xl bg-zinc-100 flex items-center px-2.5 text-xs text-zinc-500 font-mono whitespace-nowrap overflow-hidden">
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
