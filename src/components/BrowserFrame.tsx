import type { JSX } from 'solid-js'

/** URL バーに表示する data: URL の最大文字数 */
const URL_PREVIEW_LENGTH = 60

function WindowTitleBar(props: { label: string; textColor: string }) {
  return (
    <div class="flex h-9 items-stretch bg-zinc-200">
      <div class="flex flex-1 items-end px-3">
        <div class="flex h-7 max-w-[220px] min-w-[140px] items-center gap-2 rounded-t-lg bg-white px-3 text-xs text-zinc-800">
          <svg width="13" height="13" viewBox="0 0 32 32" class="shrink-0">
            <circle cx="16" cy="16" r="6" fill={props.textColor} />
          </svg>
          <span class="flex-1 truncate">{props.label}</span>
          <span class="text-sm leading-none text-zinc-500">×</span>
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex h-full w-9 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-300">
          <svg width="10" height="1" viewBox="0 0 10 1">
            <rect width="10" height="1" fill="currentColor" />
          </svg>
        </div>
        <div class="flex h-full w-9 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-300">
          <svg width="9" height="9" viewBox="0 0 9 9">
            <rect x="0.5" y="0.5" width="8" height="8" fill="none" stroke="currentColor" />
          </svg>
        </div>
        <div class="flex h-full w-9 items-center justify-center text-zinc-500 transition-colors hover:bg-red-500 hover:text-white">
          <svg width="9" height="9" viewBox="0 0 9 9">
            <line x1="0" y1="0" x2="9" y2="9" stroke="currentColor" stroke-width="1.2" />
            <line x1="9" y1="0" x2="0" y2="9" stroke="currentColor" stroke-width="1.2" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function AddressBar(props: { url: string }) {
  const shown = () => props.url.slice(0, URL_PREVIEW_LENGTH)
  const truncated = () => props.url.length > URL_PREVIEW_LENGTH

  return (
    <div class="flex h-9 items-center gap-2 border-b border-zinc-200 bg-white px-2.5">
      <div class="size-3.5 rounded-sm bg-zinc-300" />
      <div class="flex h-6 flex-1 items-center overflow-hidden rounded-xl bg-zinc-100 px-2.5 font-mono text-xs whitespace-nowrap text-zinc-500">
        <span class="overflow-hidden text-ellipsis whitespace-nowrap">
          {shown()}
          {truncated() ? '…' : ''}
        </span>
      </div>
    </div>
  )
}

interface Props {
  url: string
  label: string
  textColor: string
  children: JSX.Element
}

/** ブックマークレットを開いたときの見え方を、ブラウザの窓を模して見せる */
export function BrowserFrame(props: Props) {
  return (
    <div class="flex h-[320px] flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 lg:h-[460px]">
      <WindowTitleBar label={props.label} textColor={props.textColor} />
      <AddressBar url={props.url} />
      <div class="relative flex-1 overflow-hidden bg-white">{props.children}</div>
    </div>
  )
}
