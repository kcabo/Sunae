import { For } from 'solid-js'

import { FieldLabel } from './FieldLabel'

interface Props {
  label: string
  options: number[]
  value: number
  onChange: (v: number) => void
}

export function ChipGroup(props: Props) {
  return (
    <div>
      <FieldLabel>{props.label}</FieldLabel>
      <div class="grid grid-cols-6 gap-1.5">
        <For each={props.options}>
          {(o) => (
            <button
              type="button"
              data-active={o === props.value || undefined}
              onClick={() => props.onChange(o)}
              class="cursor-pointer rounded-md border border-zinc-200 bg-white px-1 py-3 text-sm font-medium text-zinc-800 transition-colors data-[active]:border-zinc-900 data-[active]:bg-zinc-900 data-[active]:text-white"
            >
              {o}
            </button>
          )}
        </For>
      </div>
    </div>
  )
}
