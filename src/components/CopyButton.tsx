import { createSignal, onCleanup } from 'solid-js'

/** コピー完了の表示を戻すまでの時間 */
const CONFIRM_DURATION = 1400

/** clipboard API が使えない環境 (非 HTTPS など) 向けのフォールバック */
function copyByExecCommand(text: string): void {
  const textarea = document.createElement('textarea')
  textarea.value = text
  document.body.append(textarea)
  textarea.select()
  try {
    document.execCommand('copy')
  } catch {
    // コピーできない環境では黙って諦める
  }
  textarea.remove()
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    copyByExecCommand(text)
  }
}

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
    await copyToClipboard(props.text)
    setDone(true)
    clearTimeout(timer)
    timer = setTimeout(() => setDone(false), CONFIRM_DURATION)
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
