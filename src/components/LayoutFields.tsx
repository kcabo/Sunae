import type { BookmarkletState } from '../bookmarklet'
import type { Messages } from '../i18n'
import { ChipGroup } from './ChipGroup'
import { SliderField } from './SliderField'

const LINE_HEIGHTS = [1, 1.25, 1.375, 1.5, 1.625, 2]

interface Props {
  t: Messages
  state: BookmarkletState
  onChange: (patch: Partial<BookmarkletState>) => void
}

export function LayoutFields(props: Props) {
  return (
    <div class="grid gap-5">
      <ChipGroup
        label={props.t.lineHeight}
        options={LINE_HEIGHTS}
        value={props.state.lineHeight}
        onChange={(v) => props.onChange({ lineHeight: v })}
      />

      <div class="grid grid-cols-2 gap-x-6 gap-y-5">
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
    </div>
  )
}
