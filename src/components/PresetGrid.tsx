import { For } from 'solid-js'

import { PRESETS } from '../bookmarklet'

interface Props {
  value: string
  onChange: (id: string) => void
}

export function PresetGrid(props: Props) {
  return (
    <div class="grid grid-cols-4 gap-2">
      <For each={PRESETS}>
        {(p) => {
          const active = () => p.id === props.value
          return (
            <button
              type="button"
              onClick={() => props.onChange(p.id)}
              class="cursor-pointer overflow-hidden rounded-lg border bg-white p-0 text-left transition-[border-color,transform] outline-none"
              style={{
                border: active() ? '1.5px solid #111' : '1px solid #e4e4e7',
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = '')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
            >
              <div
                class="relative flex h-11 items-center justify-center border-b border-black/4"
                style={{ background: p.bg1 }}
              >
                <div class="absolute inset-0" style={{ background: p.bg2 }} />
                <div
                  class="relative z-10 flex h-[70%] w-[70%] items-center justify-center rounded text-sm font-medium"
                  style={{ background: p.bg1, color: p.text }}
                >
                  Aa
                </div>
              </div>
              <div class="truncate px-2 py-1.5 text-xs font-medium text-zinc-600">{p.name}</div>
            </button>
          )
        }}
      </For>
    </div>
  )
}
