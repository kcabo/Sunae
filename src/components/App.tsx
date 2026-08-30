import { createSignal, createMemo } from 'solid-js'

import { DEFAULT_STATE, buildBookmarkletURL, type BookmarkletState } from '../bookmarklet'
import { I18N, type Lang } from '../i18n'
import { PRESETS } from '../presets'
import { ChipGroup } from './ChipGroup'
import { ColorField } from './ColorField'
import { CopyButton } from './CopyButton'
import { FieldLabel } from './FieldLabel'
import { LangToggle } from './LangToggle'
import { LivePreview } from './LivePreview'
import { PresetGrid } from './PresetGrid'
import { SliderField } from './SliderField'
import { TitleField } from './TitleField'

export default function App() {
  const [lang, setLang] = createSignal<Lang>('ja')
  const [state, setState] = createSignal<BookmarkletState>({ ...DEFAULT_STATE })

  const update = (patch: Partial<BookmarkletState>) => setState((s) => ({ ...s, ...patch }))

  const applyPreset = (id: string) => {
    const p = PRESETS.find((x) => x.id === id)
    if (p) update({ preset: p.id, bg1: p.bg1, bg2: p.bg2, text: p.text })
  }

  const reset = () => setState({ ...DEFAULT_STATE })

  const url = createMemo(() => buildBookmarkletURL(state()))
  const t = createMemo(() => I18N[lang()])

  return (
    <div
      class="relative mx-auto box-border flex min-h-screen w-full max-w-[1280px] flex-col gap-10 bg-[#fafaf9] px-5 py-8 text-zinc-800 lg:px-14 lg:py-10"
      style={{
        'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
      }}
    >
      {/* Lang toggle: top-right of container */}
      <div class="absolute top-8 right-5 lg:top-10 lg:right-14">
        <LangToggle value={lang()} onChange={setLang} />
      </div>

      {/* Header */}
      <div>
        <h1
          class="grain-title m-0 text-[52px] leading-none font-extralight tracking-tighter lg:text-[84px]"
          style={{
            'font-family': '"Montserrat", sans-serif',
            'font-style': 'italic',
            color: 'transparent',
            background: `
              repeating-radial-gradient(#fafaf9 0 0.00003%, #52525b 0 0.00008%) 120% 50% / 15vw 15vw,
              repeating-conic-gradient(#fafaf9 0 0.00003%, #52525b 0 0.00008%) 115% 50% / 20vw 20vw
            `,
            'background-blend-mode': 'difference',
            'background-clip': 'text',
            '-webkit-background-clip': 'text',
          }}
        >
          {t().title}
        </h1>
        <p class="mt-3 text-base leading-loose whitespace-pre-line text-zinc-600">{t().subtitle}</p>
      </div>

      {/* Body grid */}
      <div class="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-[minmax(0,6fr)_minmax(0,4fr)]">
        {/* LEFT: Preview + install */}
        <div class="flex flex-col gap-5 self-start lg:sticky lg:top-8">
          <PreviewFrame url={url()} label={state().title} textColor={state().text}>
            <LivePreview state={state()} sampleText={t().sampleText} />
          </PreviewFrame>

          {/* Install row */}
          <div class="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-6">
            <div class="min-w-0 flex-1">
              <div class="mb-0.5 text-sm font-semibold text-zinc-800">{t().install}</div>
              <div class="text-sm leading-snug text-zinc-500">{t().installHint}</div>
            </div>
            <a
              href={url()}
              onClick={(e) => e.preventDefault()}
              draggable="true"
              class="inline-flex shrink-0 cursor-grab items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white no-underline select-none"
            >
              {state().title}
            </a>
            <div class="h-7 w-px bg-zinc-200" />
            <CopyButton text={url()} label={t().copyUrl} confirmLabel={t().copied} />
          </div>
        </div>

        {/* RIGHT: Controls */}
        <div class="flex flex-col gap-8 self-start rounded-xl border border-zinc-200 bg-white p-7">
          <TitleField
            label={t().title_field}
            value={state().title}
            onChange={(v) => update({ title: v })}
          />

          <div>
            <FieldLabel>{t().presets}</FieldLabel>
            <PresetGrid value={state().preset} onChange={applyPreset} />
          </div>

          <div class="grid gap-4">
            <ColorField
              label={t().bg1}
              value={state().bg1}
              onChange={(v) => update({ bg1: v, preset: 'custom' })}
            />
            <ColorField
              label={t().bg2}
              value={state().bg2}
              onChange={(v) => update({ bg2: v, preset: 'custom' })}
            />
            <ColorField
              label={t().text}
              value={state().text}
              onChange={(v) => update({ text: v, preset: 'custom' })}
            />
          </div>

          <div class="grid gap-5">
            <ChipGroup
              label={t().lineHeight}
              options={[1, 1.25, 1.375, 1.5, 1.625, 2]}
              value={state().lineHeight}
              onChange={(v) => update({ lineHeight: v })}
            />
            <SliderField
              label={t().padding}
              value={state().padding}
              onChange={(v) => update({ padding: v })}
              min={8}
              max={64}
              step={8}
            />
            <SliderField
              label={t().margin}
              value={state().margin}
              onChange={(v) => update({ margin: v })}
              min={0}
              max={96}
              step={12}
            />
            <SliderField
              label={t().maxWidth}
              value={state().maxWidth}
              onChange={(v) => update({ maxWidth: v })}
              min={600}
              max={2600}
              step={200}
            />
            <SliderField
              label={t().borderRadius}
              value={state().borderRadius}
              onChange={(v) => update({ borderRadius: v })}
              min={0}
              max={32}
              step={4}
            />
          </div>

          <button
            type="button"
            onClick={reset}
            class="mt-2 cursor-pointer self-center border-none bg-transparent p-0 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-800"
          >
            {t().reset}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div class="text-center text-sm text-zinc-400">
        Made by{' '}
        <a
          href="https://kcabo.vercel.app/"
          target="_blank"
          rel="noopener"
          class="underline transition-colors hover:text-zinc-600"
        >
          kcabo
        </a>
      </div>
    </div>
  )
}

function PreviewFrame(props: { url: string; label: string; textColor: string; children: any }) {
  return (
    <div class="flex h-[320px] flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 lg:h-[460px]">
      {/* Windows-style titlebar */}
      <div class="flex h-9 items-stretch bg-zinc-200">
        <div class="flex flex-1 items-end px-3">
          <div class="flex h-7 max-w-[220px] min-w-[140px] items-center gap-2 rounded-t-lg bg-white px-3 text-xs text-zinc-800">
            <svg width="13" height="13" viewBox="0 0 32 32" class="shrink-0">
              <circle cx="16" cy="16" r="6" fill={props.textColor} />
            </svg>
            <span class="flex-1 truncate">{props.label}</span>
            <span class="text-sm leading-none text-zinc-500">×</span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex h-full w-9 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-300">
            <svg width="10" height="1" viewBox="0 0 10 1">
              <rect width="10" height="1" fill="currentColor" />
            </svg>
          </div>
          <div class="flex h-full w-9 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-300">
            <svg width="9" height="9" viewBox="0 0 9 9">
              <rect
                x="0.5"
                y="0.5"
                width="8"
                height="8"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
              />
            </svg>
          </div>
          <div class="flex h-full w-9 items-center justify-center text-zinc-500 transition-colors hover:bg-red-500 hover:text-white">
            <svg width="9" height="9" viewBox="0 0 9 9">
              <line x1="0" y1="0" x2="9" y2="9" stroke="currentColor" stroke-width="1.2" />
              <line x1="9" y1="0" x2="0" y2="9" stroke="currentColor" stroke-width="1.2" />
            </svg>
          </div>
        </div>
      </div>
      {/* URL bar */}
      <div class="flex h-9 items-center gap-2 border-b border-zinc-200 bg-white px-2.5">
        <div class="size-3.5 rounded-sm bg-zinc-300" />
        <div class="flex h-6 flex-1 items-center overflow-hidden rounded-xl bg-zinc-100 px-2.5 font-mono text-xs whitespace-nowrap text-zinc-500">
          <span class="overflow-hidden text-ellipsis whitespace-nowrap">
            {props.url.slice(0, 60)}
            {props.url.length > 60 ? '…' : ''}
          </span>
        </div>
      </div>
      {/* Viewport */}
      <div class="relative flex-1 overflow-hidden bg-white">{props.children}</div>
    </div>
  )
}
