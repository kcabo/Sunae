import type { JSX } from 'solid-js'

export function FieldLabel(props: { children: JSX.Element }) {
  return <div class="mb-2.5 text-sm font-medium text-zinc-600">{props.children}</div>
}
