import { createMemo, createSignal } from 'solid-js'

import { type BookmarkletState, DEFAULT_STATE, buildBookmarkletURL } from '../bookmarklet'
import { I18N, type Lang } from '../i18n'
import { BrowserFrame } from './BrowserFrame'
import { ControlPanel } from './ControlPanel'
import { InstallRow } from './InstallRow'
import { LangToggle } from './LangToggle'
import { LivePreview } from './LivePreview'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

const BODY_FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'

export default function App() {
  const [lang, setLang] = createSignal<Lang>('ja')
  const [state, setState] = createSignal<BookmarkletState>({ ...DEFAULT_STATE })

  const update = (patch: Partial<BookmarkletState>) => setState((s) => ({ ...s, ...patch }))
  const reset = () => setState({ ...DEFAULT_STATE })

  const url = createMemo(() => buildBookmarkletURL(state()))
  const t = createMemo(() => I18N[lang()])

  return (
    <div
      class="relative mx-auto box-border flex min-h-screen w-full max-w-[1280px] flex-col gap-10 bg-[#fafaf9] px-5 py-8 text-zinc-800 lg:px-14 lg:py-10"
      style={{ 'font-family': BODY_FONT }}
    >
      <div class="absolute top-8 right-5 lg:top-10 lg:right-14">
        <LangToggle value={lang()} onChange={setLang} />
      </div>

      <SiteHeader t={t()} />

      <div class="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div class="flex flex-col gap-5 self-start lg:sticky lg:top-8">
          <BrowserFrame url={url()} label={state().title} textColor={state().text}>
            <LivePreview state={state()} sampleText={t().sampleText} />
          </BrowserFrame>
          <InstallRow t={t()} url={url()} title={state().title} />
        </div>

        <ControlPanel t={t()} state={state()} onChange={update} onReset={reset} />
      </div>

      <SiteFooter />
    </div>
  )
}
