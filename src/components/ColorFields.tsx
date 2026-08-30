import type { BookmarkletState } from '../bookmarklet'
import type { Messages } from '../i18n'
import { ColorField } from './ColorField'

interface Props {
  t: Messages
  state: BookmarkletState
  onChange: (patch: Partial<BookmarkletState>) => void
}

/** 色を直接いじったらプリセットの選択は外れる */
export function ColorFields(props: Props) {
  const pick = (patch: Partial<BookmarkletState>) => props.onChange({ ...patch, preset: 'custom' })

  return (
    <div class="grid gap-4">
      <ColorField label={props.t.bg1} value={props.state.bg1} onChange={(v) => pick({ bg1: v })} />
      <ColorField label={props.t.bg2} value={props.state.bg2} onChange={(v) => pick({ bg2: v })} />
      <ColorField
        label={props.t.text}
        value={props.state.text}
        onChange={(v) => pick({ text: v })}
      />
    </div>
  )
}
