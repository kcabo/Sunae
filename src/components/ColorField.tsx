const LABEL_CLS = 'text-[13px] text-[#52525b] mb-2 font-medium'

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
}

export function ColorField(props: Props) {
  return (
    <div>
      <div class={LABEL_CLS}>{props.label}</div>
      <div class="flex gap-2 items-stretch border border-[#e4e4e7] rounded-md p-1 bg-white">
        <label
          class="w-8 h-7 rounded cursor-pointer border border-black/[0.08] shrink-0 relative"
          style={{ background: props.value }}
        >
          <input
            type="color"
            value={props.value}
            onInput={e => props.onChange((e.target as HTMLInputElement).value)}
            class="absolute inset-0 opacity-0 cursor-pointer"
          />
        </label>
        <input
          type="text"
          value={props.value}
          onInput={e => props.onChange((e.target as HTMLInputElement).value)}
          class="flex-1 border-none outline-none font-mono text-[13px] text-[#27272a] bg-transparent px-1"
        />
      </div>
    </div>
  )
}
