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
        {p => {
          const active = () => p.id === props.value
          return (
            <button
              type="button"
              onClick={() => props.onChange(p.id)}
              class="border rounded-lg bg-white p-0 overflow-hidden cursor-pointer text-left transition-[border-color,transform] outline-none"
              style={{
                border: active() ? '1.5px solid #111' : '1px solid #e4e4e7',
              }}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={e => (e.currentTarget.style.transform = '')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}
            >
              <div
                class="h-[42px] flex items-center justify-center relative border-b border-black/[0.04]"
                style={{ background: p.bg1 }}
              >
                <div class="absolute inset-0" style={{ background: p.bg2 }} />
                <div
                  class="relative z-10 w-[70%] h-[70%] rounded flex items-center justify-center text-sm font-medium"
                  style={{ background: p.bg1, color: p.text }}
                >
                  Aa
                </div>
              </div>
              <div class="px-2 py-1.5 text-[12px] text-[#52525b] font-medium truncate">
                {p.name}
              </div>
            </button>
          )
        }}
      </For>
    </div>
  )
}
