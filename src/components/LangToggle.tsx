import { For } from 'solid-js'

import type { Lang } from '../i18n'

const LANGS: Lang[] = ['ja', 'en']

interface Props {
  value: Lang
  onChange: (l: Lang) => void
}

export function LangToggle(props: Props) {
  return (
    <div class="inline-flex overflow-hidden rounded-md border border-zinc-200">
      <For each={LANGS}>
        {(l) => (
          <button
            type="button"
            data-active={props.value === l || undefined}
            onClick={() => props.onChange(l)}
            class="cursor-pointer border-none px-3 py-1.5 text-xs font-medium tracking-wider text-zinc-400 uppercase transition-colors data-[active]:bg-zinc-200 data-[active]:text-zinc-800"
          >
            {l}
          </button>
        )}
      </For>
    </div>
  )
}
