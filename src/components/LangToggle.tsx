import { For } from 'solid-js'
import type { Lang } from '../bookmarklet'

interface Props {
  value: Lang
  onChange: (l: Lang) => void
}

export function LangToggle(props: Props) {
  return (
    <div class="inline-flex border border-zinc-200 rounded-md overflow-hidden">
      <For each={['ja', 'en'] as Lang[]}>
        {l => (
          <button
            type="button"
            onClick={() => props.onChange(l)}
            class="border-none px-3 py-1.5 text-xs font-medium cursor-pointer uppercase tracking-wider transition-colors"
            style={{
              background: props.value === l ? '#e4e4e7' : 'transparent',
              color: props.value === l ? '#27272a' : '#a1a1aa',
            }}
          >
            {l}
          </button>
        )}
      </For>
    </div>
  )
}
