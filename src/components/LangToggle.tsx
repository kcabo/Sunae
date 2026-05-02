import { For } from 'solid-js'
import type { Lang } from '../bookmarklet'

interface Props {
  value: Lang
  onChange: (l: Lang) => void
}

export function LangToggle(props: Props) {
  return (
    <div class="inline-flex border border-[#e4e4e7] rounded-md overflow-hidden">
      <For each={['ja', 'en'] as Lang[]}>
        {l => (
          <button
            type="button"
            onClick={() => props.onChange(l)}
            class="border-none px-3 py-1.5 text-xs font-medium cursor-pointer uppercase tracking-[0.06em] transition-colors"
            style={{
              background: props.value === l ? '#111' : '#fff',
              color: props.value === l ? '#fff' : '#52525b',
            }}
          >
            {l}
          </button>
        )}
      </For>
    </div>
  )
}
