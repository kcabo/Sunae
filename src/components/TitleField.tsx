import { createEffect, createSignal, For, onCleanup } from 'solid-js'

import { TITLE_TEMPLATES } from '../presets'
import { FieldLabel } from './FieldLabel'

function TemplateMenu(props: { onPick: (title: string) => void }) {
  return (
    <div class="absolute inset-x-0 top-full z-50 mt-1 grid grid-cols-2 gap-0.5 rounded-md border border-zinc-200 bg-white p-1 shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
      <For each={TITLE_TEMPLATES}>
        {(template) => (
          <button
            type="button"
            onClick={() => props.onPick(`${template.emoji} ${template.label}`)}
            class="flex cursor-pointer items-center gap-1.5 rounded border-none bg-transparent px-2.5 py-2 text-left text-sm text-zinc-800 transition-colors hover:bg-zinc-100"
          >
            <span class="text-base">{template.emoji}</span>
            <span>{template.label}</span>
          </button>
        )}
      </For>
    </div>
  )
}

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
}

export function TitleField(props: Props) {
  const [open, setOpen] = createSignal(false)
  let wrapRef: HTMLDivElement | undefined

  // 開いている間だけ、外側のクリックで閉じる
  createEffect(() => {
    if (!open()) {
      return
    }
    const onDocumentDown = (e: MouseEvent) => {
      if (wrapRef && !wrapRef.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocumentDown)
    onCleanup(() => document.removeEventListener('mousedown', onDocumentDown))
  })

  return (
    <div class="relative" ref={wrapRef}>
      <FieldLabel>{props.label}</FieldLabel>
      <div class="flex overflow-hidden rounded-md border border-zinc-200 bg-white">
        <input
          type="text"
          value={props.value}
          onInput={(e) => props.onChange(e.currentTarget.value)}
          class="min-w-0 flex-1 border-none bg-transparent p-3 text-sm text-zinc-800 outline-none"
        />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="templates"
          class="cursor-pointer border-l border-zinc-200 bg-white px-3.5 text-xs text-zinc-600"
        >
          ▼
        </button>
      </div>
      {open() && (
        <TemplateMenu
          onPick={(title) => {
            props.onChange(title)
            setOpen(false)
          }}
        />
      )}
    </div>
  )
}
