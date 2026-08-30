import { For } from 'solid-js'

import type { Lang } from '../bookmarklet'

interface Props {
  value: Lang
  onChange: (l: Lang) => void
}

export function LangToggle(props: Props) {
  return (
    <div class="inline-flex overflow-hidden rounded-md border border-zinc-200">
      <For each={['ja', 'en'] as Lang[]}>
        {(l) => (
          <button
            type="button"
            onClick={() => props.onChange(l)}
            class="cursor-pointer border-none px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors"
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
