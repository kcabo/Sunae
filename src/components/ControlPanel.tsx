import type { BookmarkletState } from '../bookmarklet'
import type { Messages } from '../i18n'
import { PRESETS } from '../presets'
import { ColorFields } from './ColorFields'
import { FieldLabel } from './FieldLabel'
import { LayoutFields } from './LayoutFields'
import { PresetGrid } from './PresetGrid'
import { TitleField } from './TitleField'

interface Props {
  t: Messages
  state: BookmarkletState
  onChange: (patch: Partial<BookmarkletState>) => void
  onReset: () => void
}

export function ControlPanel(props: Props) {
  const applyPreset = (id: string) => {
    const preset = PRESETS.find((p) => p.id === id)
    if (!preset) {
      return
    }
    props.onChange({ preset: preset.id, bg1: preset.bg1, bg2: preset.bg2, text: preset.text })
  }

  return (
    <div class="flex flex-col gap-8 self-start rounded-xl border border-zinc-200 bg-white p-7">
      <TitleField
        label={props.t.title_field}
        value={props.state.title}
        onChange={(v) => props.onChange({ title: v })}
      />

      <div>
        <FieldLabel>{props.t.presets}</FieldLabel>
        <PresetGrid t={props.t} value={props.state.preset} onChange={applyPreset} />
      </div>

      <ColorFields t={props.t} state={props.state} onChange={props.onChange} />
      <LayoutFields t={props.t} state={props.state} onChange={props.onChange} />

      <button
        type="button"
        onClick={props.onReset}
        class="mt-2 cursor-pointer self-center border-none bg-transparent p-0 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-800"
      >
        {props.t.reset}
      </button>
    </div>
  )
}
