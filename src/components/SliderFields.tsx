import { type BookmarkletState, RANGES } from '../bookmarklet'
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
        {...RANGES.padding}
      />
      <SliderField
        label={props.t.margin}
        value={props.state.margin}
        onChange={(v) => props.onChange({ margin: v })}
        {...RANGES.margin}
      />
      <SliderField
        label={props.t.maxWidth}
        value={props.state.maxWidth}
        onChange={(v) => props.onChange({ maxWidth: v })}
        {...RANGES.maxWidth}
      />
      <SliderField
        label={props.t.borderRadius}
        value={props.state.borderRadius}
        onChange={(v) => props.onChange({ borderRadius: v })}
        {...RANGES.borderRadius}
      />
    </div>
  )
}
