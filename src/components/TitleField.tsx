import { createSignal, createEffect, onCleanup, For } from 'solid-js'

import { TITLE_TEMPLATES } from '../presets'
import { FieldLabel } from './FieldLabel'

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
      <FieldLabel>{props.label}</FieldLabel>
      <div class="flex overflow-hidden rounded-md border border-zinc-200 bg-white">
        <input
          type="text"
          value={props.value}
          onInput={(e) => props.onChange((e.target as HTMLInputElement).value)}
          class="min-w-0 flex-1 border-none bg-transparent px-3 py-2.5 text-sm text-zinc-800 outline-none"
        />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="templates"
          class="cursor-pointer border-l border-none border-zinc-200 bg-white px-3.5 text-xs text-zinc-600"
          style={{ 'border-left': '1px solid #e4e4e7' }}
        >
          ▼
        </button>
      </div>
      {open() && (
        <div class="absolute inset-x-0 top-full z-50 mt-1 grid grid-cols-2 gap-0.5 rounded-md border border-zinc-200 bg-white p-1 shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
          <For each={TITLE_TEMPLATES}>
            {(t) => (
              <button
                type="button"
                onClick={() => {
                  props.onChange(`${t.emoji} ${t.label}`)
                  setOpen(false)
                }}
                class="flex cursor-pointer items-center gap-1.5 rounded border-none bg-transparent px-2.5 py-2 text-left text-sm text-zinc-800 transition-colors hover:bg-zinc-100"
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
