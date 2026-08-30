import { For } from 'solid-js'

import { PRESETS } from '../presets'

interface Props {
  value: string
  onChange: (id: string) => void
}

export function PresetGrid(props: Props) {
  return (
    <div class="grid grid-cols-4 gap-2">
      <For each={PRESETS}>
        {(p) => (
          <button
            type="button"
            data-active={p.id === props.value || undefined}
            onClick={() => props.onChange(p.id)}
            class="cursor-pointer overflow-hidden rounded-lg border border-zinc-200 bg-white p-0 text-left transition-transform outline-none active:scale-[0.98] data-[active]:border-zinc-900"
          >
            <div
              class="relative flex h-11 items-center justify-center border-b border-black/4"
              style={{ background: p.bg2 }}
            >
              <div
                class="flex size-[70%] items-center justify-center rounded text-sm font-medium"
                style={{ background: p.bg1, color: p.text }}
              >
                Aa
              </div>
            </div>
            <div class="truncate px-2 py-1.5 text-xs font-medium text-zinc-600">{p.name}</div>
          </button>
        )}
      </For>
    </div>
  )
}
