import { createSignal, createEffect, onCleanup } from 'solid-js'

import { buildBookmarkletHTML, type BookmarkletState } from '../bookmarklet'

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
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        const w = e.contentRect.width
        setScale(w > 0 ? w / virtualWidth() : 1)
      }
    })
    ro.observe(wrapRef)
    onCleanup(() => ro.disconnect())
  })

  // Full reload when sampleText changes
  createEffect(() => {
    const text = props.sampleText
    const iframe = iframeRef
    if (!iframe) return
    const html = buildBookmarkletHTML(props.state).replace(
      '</style>',
      'body{min-height:100vh!important;}</style>',
    )
    iframe.srcdoc = html
    const onLoad = () => {
      try {
        const doc = iframe.contentDocument
        if (!doc?.body) return
        const lines = (text || '').split('\n')
        doc.body.innerHTML = lines
          .map((l) => (l.length === 0 ? '<br>' : `<div>${l.replace(/</g, '&lt;')}</div>`))
          .join('')
      } catch {}
    }
    iframe.addEventListener('load', onLoad)
    onCleanup(() => iframe.removeEventListener('load', onLoad))
  })

  // Style-only swap when state changes
  createEffect(() => {
    const s = props.state
    const iframe = iframeRef
    if (!iframe) return
    try {
      const doc = iframe.contentDocument
      if (!doc?.head) return
      const newHTML = buildBookmarkletHTML(s)
      const m = newHTML.match(/<style>([\s\S]*?)<\/style>/)
      if (!m) return
      let styleEl = doc.head.querySelector('style')
      if (!styleEl) {
        styleEl = doc.createElement('style')
        doc.head.appendChild(styleEl)
      }
      styleEl.textContent = m[1] + 'body{min-height:100vh!important;}'
      const tm = newHTML.match(/<title>([\s\S]*?)<\/title>/)
      if (tm) doc.title = tm[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    } catch {}
  })

  return (
    <div ref={wrapRef} class="relative h-full w-full overflow-hidden bg-white">
      <style>{`.sunae-iframe::-webkit-scrollbar{display:none}`}</style>
      <iframe
        ref={iframeRef}
        class="sunae-iframe block border-none"
        title="bookmarklet-preview"
        sandbox="allow-same-origin"
        scrolling="no"
        style={{
          width: `${virtualWidth()}px`,
          height: scale() > 0 ? `${100 / scale()}%` : '100%',
          transform: `scale(${scale()})`,
          'transform-origin': 'top left',
          background: '#fff',
          'scrollbar-width': 'none',
        }}
      />
    </div>
  )
}
