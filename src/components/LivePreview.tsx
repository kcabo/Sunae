import { createEffect, createSignal, on, onCleanup } from 'solid-js'

import { type BookmarkletState, buildBookmarkletCSS, buildBookmarkletHTML } from '../bookmarklet'

/** プレビュー枠は縮小表示なので、枠いっぱいに見せつつ内側のスクロールを止める */
const PREVIEW_CSS_PATCH = 'html{overflow:hidden;}body{min-height:100vh!important;}'
/** iframe を描く仮想の横幅。実寸に合わせて縮小して表示する */
const DEFAULT_VIRTUAL_WIDTH = 1000

/** サンプル文言を contenteditable に流し込める HTML にする */
function toPreviewHTML(text: string): string {
  return text
    .split('\n')
    .map((line) => (line.length === 0 ? '<br>' : `<div>${line.replaceAll('<', '&lt;')}</div>`))
    .join('')
}

function styleElementOf(doc: Document): HTMLStyleElement {
  const existing = doc.head.querySelector('style')
  if (existing) {
    return existing
  }
  const created = doc.createElement('style')
  doc.head.append(created)
  return created
}

/** 枠の実寸を監視して、仮想幅に対する縮小率を返す */
function useScale(getWrap: () => HTMLDivElement | undefined, virtualWidth: () => number) {
  const [scale, setScale] = createSignal(1)

  createEffect(() => {
    const wrap = getWrap()
    if (!wrap) {
      return
    }
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect
        setScale(width > 0 ? width / virtualWidth() : 1)
      }
    })
    observer.observe(wrap)
    onCleanup(() => observer.disconnect())
  })

  return scale
}

/**
 * サンプル文言が変わったときだけ iframe を作り直す。
 * on() のコールバックは非追跡なので、state の変更ではリロードされない。
 */
function useReloadOnSampleText(getIframe: () => HTMLIFrameElement | undefined, props: Props): void {
  createEffect(
    on(
      () => props.sampleText,
      (text) => {
        const iframe = getIframe()
        if (!iframe) {
          return
        }
        iframe.srcdoc = buildBookmarkletHTML(props.state).replace(
          '</style>',
          `${PREVIEW_CSS_PATCH}</style>`,
        )
        const onLoad = () => {
          const doc = iframe.contentDocument
          if (doc?.body) {
            doc.body.innerHTML = toPreviewHTML(text ?? '')
          }
        }
        iframe.addEventListener('load', onLoad)
        onCleanup(() => iframe.removeEventListener('load', onLoad))
      },
    ),
  )
}

/** 設定変更はスタイルの差し替えだけで反映する (入力内容を保ったまま更新できる) */
function useStyleSync(getIframe: () => HTMLIFrameElement | undefined, props: Props): void {
  createEffect(() => {
    const doc = getIframe()?.contentDocument
    if (!doc?.head) {
      return
    }
    styleElementOf(doc).textContent = buildBookmarkletCSS(props.state) + PREVIEW_CSS_PATCH
    doc.title = props.state.title
  })
}

interface Props {
  state: BookmarkletState
  sampleText?: string
  virtualWidth?: number
}

export function LivePreview(props: Props) {
  const virtualWidth = () => props.virtualWidth ?? DEFAULT_VIRTUAL_WIDTH
  let wrapRef: HTMLDivElement | undefined
  let iframeRef: HTMLIFrameElement | undefined

  const scale = useScale(() => wrapRef, virtualWidth)
  useReloadOnSampleText(() => iframeRef, props)
  useStyleSync(() => iframeRef, props)

  return (
    <div ref={wrapRef} class="relative size-full overflow-hidden bg-white">
      <iframe
        ref={iframeRef}
        class="block border-none"
        title="bookmarklet-preview"
        sandbox="allow-same-origin"
        style={{
          width: `${virtualWidth()}px`,
          height: scale() > 0 ? `${100 / scale()}%` : '100%',
          transform: `scale(${scale()})`,
          'transform-origin': 'top left',
          background: '#fff',
        }}
      />
    </div>
  )
}
