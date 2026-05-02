import { createSignal } from 'solid-js'

interface Props {
  text: string
  label?: string
  confirmLabel?: string
}

export function CopyButton(props: Props) {
  const [done, setDone] = createSignal(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(props.text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = props.text
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch {}
      ta.remove()
    }
    setDone(true)
    setTimeout(() => setDone(false), 1400)
  }

  return (
    <button
      type="button"
      onClick={copy}
      class="border rounded-md text-[13px] font-medium cursor-pointer px-3.5 py-[9px] transition-all"
      style={{
        border: '1px solid #e4e4e7',
        background: done() ? '#111' : '#fff',
        color: done() ? '#fff' : '#27272a',
      }}
    >
      {done() ? (props.confirmLabel ?? 'Copied!') : (props.label ?? 'Copy')}
    </button>
  )
}
