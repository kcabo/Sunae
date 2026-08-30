const LABEL_CLS = 'text-sm text-zinc-600 mb-2 font-medium'

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
}

export function ColorField(props: Props) {
  return (
    <div>
      <div class={LABEL_CLS}>{props.label}</div>
      <div class="flex items-stretch gap-2 rounded-md border border-zinc-200 bg-white p-1">
        <label
          class="relative h-7 w-8 shrink-0 cursor-pointer rounded border border-black/8"
          style={{ background: props.value }}
        >
          <input
            type="color"
            value={props.value}
            onInput={(e) => props.onChange((e.target as HTMLInputElement).value)}
            class="absolute inset-0 cursor-pointer opacity-0"
          />
        </label>
        <input
          type="text"
          value={props.value}
          onInput={(e) => props.onChange((e.target as HTMLInputElement).value)}
          class="flex-1 border-none bg-transparent px-1 font-mono text-sm text-zinc-800 outline-none"
        />
      </div>
    </div>
  )
}
