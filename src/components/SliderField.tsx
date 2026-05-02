interface Props {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
  suffix?: string
}

export function SliderField(props: Props) {
  const suffix = () => props.suffix ?? 'px'

  return (
    <div>
      <div class="flex justify-between items-baseline mb-1.5">
        <span class="text-[13px] text-[#52525b] font-medium">{props.label}</span>
        <span class="text-[13px] font-mono text-[#52525b]">{props.value}{suffix()}</span>
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step ?? 1}
        value={props.value}
        onInput={e => props.onChange(parseFloat((e.target as HTMLInputElement).value))}
        class="w-full h-1 accent-[#111]"
      />
    </div>
  )
}
