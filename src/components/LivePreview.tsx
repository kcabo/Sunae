import { createEffect, createSignal, on, onCleanup } from 'solid-js'
import { type BookmarkletState, buildBookmarkletCSS, buildBookmarkletHTML } from '../bookmarklet'

/** プレビュー枠内では body を枠いっぱいに見せたいので min-height だけ上書きする */
const PREVIEW_CSS_PATCH = 'body{min-height:100vh!important;}'

interface Props {
  state: BookmarkletState
  sampleText?: string
  virtualWidth?: number
}

export function LivePreview(props: Props) {
  const virtualWidth = () => props.virtualWidth ?? 1000
  let wrapRef: HTMLDivElement | undefined
  let iframeRef: HTMLIFrameElement | undefined
  const [scale, setScale] = createSignal(1)

  createEffect(() => {
    if (!wrapRef) return
    const ro = new ResizeObserver(entries => {
      for (const e of entries) {
        const w = e.contentRect.width
        setScale(w > 0 ? w / virtualWidth() : 1)
      }
    })
    ro.observe(wrapRef)
    onCleanup(() => ro.disconnect())
  })

  // サンプル文言が変わったときだけ iframe を作り直す。
  // on() のコールバックは非追跡なので、state の変更ではリロードされない。
  createEffect(
    on(
      () => props.sampleText,
      text => {
        const iframe = iframeRef
        if (!iframe) return
        iframe.srcdoc = buildBookmarkletHTML(props.state).replace(
          '</style>',
          `${PREVIEW_CSS_PATCH}</style>`,
        )
        const onLoad = () => {
          const doc = iframe.contentDocument
          if (!doc?.body) return
          doc.body.innerHTML = (text ?? '')
            .split('\n')
            .map(l => (l.length === 0 ? '<br>' : `<div>${l.replace(/</g, '&lt;')}</div>`))
            .join('')
        }
        iframe.addEventListener('load', onLoad)
        onCleanup(() => iframe.removeEventListener('load', onLoad))
      },
    ),
  )

  // 設定変更はスタイルの差し替えだけで反映する (入力内容を保ったまま更新できる)
  createEffect(() => {
    const iframe = iframeRef
    const doc = iframe?.contentDocument
    if (!doc?.head) return

    let styleEl = doc.head.querySelector('style')
    if (!styleEl) {
      styleEl = doc.createElement('style')
      doc.head.appendChild(styleEl)
    }
    styleEl.textContent = buildBookmarkletCSS(props.state) + PREVIEW_CSS_PATCH
    doc.title = props.state.title
  })

  return (
    <div ref={wrapRef} class="relative size-full overflow-hidden bg-white">
      <iframe
        ref={iframeRef}
        class="sunae-iframe block border-none"
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
