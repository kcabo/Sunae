import { createSignal, createEffect, onCleanup, For } from 'solid-js'
import { TITLE_TEMPLATES } from '../bookmarklet'

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
}

export function TitleField(props: Props) {
  const [open, setOpen] = createSignal(false)
  let wrapRef: HTMLDivElement | undefined

  createEffect(() => {
    if (!open()) return
    const onDoc = (e: MouseEvent) => {
      if (wrapRef && !wrapRef.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    onCleanup(() => document.removeEventListener('mousedown', onDoc))
  })

  return (
    <div class="relative" ref={wrapRef}>
      <div class="text-[13px] text-[#52525b] mb-2 font-medium">{props.label}</div>
      <div class="flex border border-[#e4e4e7] rounded-md bg-white overflow-hidden">
        <input
          type="text"
          value={props.value}
          onInput={e => props.onChange((e.target as HTMLInputElement).value)}
          class="flex-1 border-none px-3 py-2.5 text-sm text-[#27272a] outline-none bg-transparent min-w-0"
        />
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-label="templates"
          class="border-none border-l border-[#e4e4e7] bg-white text-[#52525b] cursor-pointer px-3.5 text-xs"
          style={{ "border-left": '1px solid #e4e4e7' }}
        >
          ▼
        </button>
      </div>
      {open() && (
        <div class="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e4e4e7] rounded-md shadow-[0_8px_20px_rgba(0,0,0,0.08)] p-1 z-50 grid grid-cols-2 gap-0.5">
          <For each={TITLE_TEMPLATES}>
            {t => (
              <button
                type="button"
                onClick={() => { props.onChange(`${t.emoji} ${t.label}`); setOpen(false) }}
                class="border-none bg-transparent px-2.5 py-2 text-[13px] text-left cursor-pointer rounded text-[#27272a] flex gap-1.5 items-center hover:bg-[#f4f4f5] transition-colors"
              >
                <span class="text-base">{t.emoji}</span>
                <span>{t.label}</span>
              </button>
            )}
          </For>
        </div>
      )}
    </div>
  )
}
