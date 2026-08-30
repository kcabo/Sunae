import type { Messages } from '../i18n'
import { CopyButton } from './CopyButton'

interface Props {
  t: Messages
  url: string
  title: string
}

export function InstallRow(props: Props) {
  return (
    <div class="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-6">
      <div class="min-w-0 flex-1">
        <div class="mb-0.5 text-sm font-semibold text-zinc-800">{props.t.install}</div>
        {/* 日本語を文節で折り返す。非対応ブラウザでは通常の折り返しになる */}
        <div class="text-sm leading-snug [word-break:auto-phrase] text-zinc-500">
          {props.t.installHint}
        </div>
      </div>
      {/* ブックマークバーへドラッグさせるためのリンク。クリックでの遷移はブラウザが塞ぐ */}
      <a
        href={props.url}
        onClick={(e) => e.preventDefault()}
        draggable="true"
        class="inline-flex shrink-0 cursor-grab items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white no-underline select-none"
      >
        {props.title}
      </a>
      <div class="h-7 w-px bg-zinc-200" />
      <CopyButton text={props.url} label={props.t.copyUrl} confirmLabel={props.t.copied} />
    </div>
  )
}
