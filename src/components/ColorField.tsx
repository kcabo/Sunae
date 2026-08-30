/**
 * 入力値はそのまま生成 CSS に埋め込まれるため、hex 以外は state に流さない。
 * `#` や `#ff` のような入力途中の値は無視され、入力欄の表示だけが残る。
 */
const HEX_COLOR = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/iu

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
}

export function ColorField(props: Props) {
  return (
    <div class="flex items-center gap-3">
      <span class="w-30 shrink-0 text-sm font-medium text-zinc-600">{props.label}</span>
      <div class="flex flex-1 items-stretch gap-2 rounded-md border border-zinc-200 bg-white p-1.5">
        <label
          aria-label={props.label}
          class="relative h-7 w-8 shrink-0 cursor-pointer rounded border border-black/8"
          style={{ background: props.value }}
        >
          <input
            type="color"
            value={props.value}
            onInput={(e) => props.onChange(e.currentTarget.value)}
            class="absolute inset-0 cursor-pointer opacity-0"
          />
        </label>
        <input
          type="text"
          value={props.value}
          onInput={(e) => {
            const v = e.currentTarget.value.trim()
            if (HEX_COLOR.test(v)) {
              props.onChange(v)
            }
          }}
          class="min-w-0 flex-1 border-none bg-transparent px-1 font-mono text-sm text-zinc-800 outline-none"
        />
      </div>
    </div>
  )
}
