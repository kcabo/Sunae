import { FieldLabel } from './FieldLabel'

/**
 * 入力値はそのまま生成 CSS に埋め込まれるため、hex 以外は state に流さない。
 * `#` や `#ff` のような入力途中の値は無視され、入力欄の表示だけが残る。
 */
const HEX_COLOR = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
}

export function ColorField(props: Props) {
  return (
    <div>
      <FieldLabel>{props.label}</FieldLabel>
      <div class="flex items-stretch gap-2 rounded-md border border-zinc-200 bg-white p-1.5">
        <label
          class="relative h-8 w-9 shrink-0 cursor-pointer rounded border border-black/8"
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
          onInput={(e) => {
            const v = e.currentTarget.value.trim()
            if (HEX_COLOR.test(v)) props.onChange(v)
          }}
          class="flex-1 border-none bg-transparent px-1 font-mono text-sm text-zinc-800 outline-none"
        />
      </div>
    </div>
  )
}
