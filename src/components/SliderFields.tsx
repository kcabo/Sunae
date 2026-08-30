import type { BookmarkletState } from '../bookmarklet'
import type { Messages } from '../i18n'
import { SliderField } from './SliderField'

interface Props {
  t: Messages
  state: BookmarkletState
  onChange: (patch: Partial<BookmarkletState>) => void
}

export function SliderFields(props: Props) {
  return (
    <div class="grid grid-cols-2 gap-6">
      <SliderField
        label={props.t.padding}
        value={props.state.padding}
        onChange={(v) => props.onChange({ padding: v })}
        min={0}
        max={64}
        step={16}
      />
      <SliderField
        label={props.t.margin}
        value={props.state.margin}
        onChange={(v) => props.onChange({ margin: v })}
        min={0}
        max={96}
        step={24}
      />
      <SliderField
        label={props.t.maxWidth}
        value={props.state.maxWidth}
        onChange={(v) => props.onChange({ maxWidth: v })}
        min={800}
        max={1600}
        step={200}
      />
      <SliderField
        label={props.t.borderRadius}
        value={props.state.borderRadius}
        onChange={(v) => props.onChange({ borderRadius: v })}
        min={0}
        max={32}
        step={8}
      />
    </div>
  )
}
