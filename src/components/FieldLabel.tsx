import type { JSX } from 'solid-js'

/** 項目の上に置くラベル */
export function FieldLabel(props: { children: JSX.Element }) {
  return <div class="mb-2.5 text-sm font-medium text-zinc-600">{props.children}</div>
}

/** 入力と横に並べるラベル */
export function InlineFieldLabel(props: { children: JSX.Element }) {
  return <span class="w-30 shrink-0 text-sm font-medium text-zinc-600">{props.children}</span>
}
