import { For } from 'solid-js'

import type { Messages } from '../i18n'
import { DARK_PRESETS, LIGHT_PRESETS } from '../presets'

type Preset = (typeof LIGHT_PRESETS)[number]

interface SectionProps {
  label: string
  presets: Preset[]
  value: string
  onChange: (id: string) => void
}

/**
 * 外枠を外側背景 (bg2)、内側を本文の地 (bg1) で塗り、名前を本文色で載せる。
 * 1 タイルで 3 色すべてが見えるので、名前を下に添えるより高さが半分で済む。
 */
function PresetSection(props: SectionProps) {
  return (
    <div>
      <div class="mb-1.5 text-[11px] font-medium text-zinc-400">{props.label}</div>
      <div class="grid grid-cols-5 gap-2">
        <For each={props.presets}>
          {(p) => (
            <button
              type="button"
              title={p.name}
              data-active={p.id === props.value || undefined}
              onClick={() => props.onChange(p.id)}
              class="cursor-pointer rounded-lg border border-zinc-200 p-2 transition-transform outline-none active:scale-[0.98] data-[active]:border-zinc-900"
              style={{ background: p.bg2 }}
            >
              <div
                class="truncate rounded px-1 py-1.5 text-center text-[11px] font-medium"
                style={{ background: p.bg1, color: p.text }}
              >
                {p.name}
              </div>
            </button>
          )}
        </For>
      </div>
    </div>
  )
}

interface Props {
  t: Messages
  value: string
  onChange: (id: string) => void
}

export function PresetGrid(props: Props) {
  return (
    <div class="grid gap-4">
      <PresetSection
        label={props.t.light}
        presets={LIGHT_PRESETS}
        value={props.value}
        onChange={props.onChange}
      />
      <PresetSection
        label={props.t.dark}
        presets={DARK_PRESETS}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}
