import { createSignal, onCleanup } from 'solid-js'

interface Props {
  text: string
  label?: string
  confirmLabel?: string
}

export function CopyButton(props: Props) {
  const [done, setDone] = createSignal(false)
  let timer: ReturnType<typeof setTimeout> | undefined
  onCleanup(() => clearTimeout(timer))

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(props.text)
    } catch {
      // clipboard API が使えない環境 (非 HTTPS など) 向けのフォールバック
      const ta = document.createElement('textarea')
      ta.value = props.text
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
      } catch {}
      ta.remove()
    }
    setDone(true)
    clearTimeout(timer)
    timer = setTimeout(() => setDone(false), 1400)
  }

  return (
    <button
      type="button"
      data-done={done() || undefined}
      onClick={copy}
      class="cursor-pointer rounded-md border border-zinc-200 bg-white px-3.5 py-2.5 text-sm font-medium text-zinc-800 transition-colors data-[done]:border-zinc-900 data-[done]:bg-zinc-900 data-[done]:text-white"
    >
      {done() ? (props.confirmLabel ?? 'Copied!') : (props.label ?? 'Copy')}
    </button>
  )
}
