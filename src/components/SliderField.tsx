import { For } from 'solid-js'

interface Props {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step: number
}

/** つまみの幅。目盛りの位置をつまみの可動範囲に合わせるために使う */
const THUMB_WIDTH = 28

export function SliderField(props: Props) {
  const stepCount = () => Math.round((props.max - props.min) / props.step)
  const ticks = () => Array.from({ length: stepCount() + 1 })
  const ratio = () => (props.value - props.min) / (props.max - props.min)

  return (
    <div>
      <div class="mb-2 flex items-baseline justify-between">
        <span class="text-sm font-medium text-zinc-600">{props.label}</span>
        <span class="font-mono text-sm text-zinc-500">{props.value}px</span>
      </div>

      {/* つまみがトラックから少しはみ出すよう、トラックだけを内側で切り抜く */}
      <div class="relative flex h-10 items-center">
        <div class="absolute inset-x-0 h-9 overflow-hidden rounded-md border border-zinc-200 bg-white">
          {/* つまみの中心までを塗る */}
          <div
            class="absolute left-0 h-full bg-zinc-900"
            style={{ width: `calc(${THUMB_WIDTH / 2}px + ${ratio()} * (100% - ${THUMB_WIDTH}px))` }}
          />

          {/* 目盛り。両端をつまみの可動範囲に合わせ、あとは等間隔に置く。
              白い地の上でも黒い塗りの上でも見えるよう中間の明度にする */}
          <div
            class="absolute inset-y-0 flex items-center justify-between"
            style={{ left: `${THUMB_WIDTH / 2}px`, right: `${THUMB_WIDTH / 2}px` }}
          >
            <For each={ticks()}>{() => <div class="size-1 rounded-full bg-zinc-500" />}</For>
          </div>
        </div>

        <input
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          value={props.value}
          onInput={(e) => props.onChange(Number(e.currentTarget.value))}
          class="sunae-slider absolute inset-0 w-full"
        />
      </div>
    </div>
  )
}
