interface Props {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
}

export function SliderField(props: Props) {
  return (
    <div>
      <div class="mb-1.5 flex items-baseline justify-between">
        <span class="text-sm font-medium text-zinc-600">{props.label}</span>
        <span class="font-mono text-sm text-zinc-600">{props.value}px</span>
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step ?? 1}
        value={props.value}
        onInput={(e) => props.onChange(parseFloat((e.target as HTMLInputElement).value))}
        class="h-1 w-full accent-zinc-900"
      />
    </div>
  )
}
