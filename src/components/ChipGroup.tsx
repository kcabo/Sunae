import { For } from 'solid-js'

const LABEL_CLS = 'text-sm text-zinc-600 mb-2 font-medium'

interface Option {
  value: number
  label: string
}

interface Props {
  label: string
  options: (number | Option)[]
  value: number
  onChange: (v: number) => void
}

export function ChipGroup(props: Props) {
  return (
    <div>
      <div class={LABEL_CLS}>{props.label}</div>
      <div class="grid grid-cols-6 gap-1">
        <For each={props.options}>
          {(o) => {
            const v = typeof o === 'object' ? o.value : o
            const lbl = typeof o === 'object' ? o.label : String(o)
            const active = () => v === props.value
            return (
              <button
                type="button"
                onClick={() => props.onChange(v)}
                class="cursor-pointer rounded-md border px-1 py-2.5 text-sm font-medium transition-all"
                style={{
                  border: active() ? '1px solid #111' : '1px solid #e4e4e7',
                  background: active() ? '#111' : '#fff',
                  color: active() ? '#fff' : '#27272a',
                }}
              >
                {lbl}
              </button>
            )
          }}
        </For>
      </div>
    </div>
  )
}
