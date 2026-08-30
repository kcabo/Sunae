import type { Messages } from '../i18n'

/** 砂を散らしたようなノイズで文字を塗る。背景を差の合成で重ねて粒状にしている */
const GRAIN_TEXT = {
  'font-family': '"Montserrat", sans-serif',
  'font-style': 'italic',
  color: 'transparent',
  background: `
    repeating-radial-gradient(#fafaf9 0 0.00003%, #52525b 0 0.00008%) 120% 50% / 15vw 15vw,
    repeating-conic-gradient(#fafaf9 0 0.00003%, #52525b 0 0.00008%) 115% 50% / 20vw 20vw
  `,
  'background-blend-mode': 'difference',
  'background-clip': 'text',
  '-webkit-background-clip': 'text',
}

export function SiteHeader(props: { t: Messages }) {
  return (
    <div>
      <h1
        class="grain-title m-0 text-[52px] leading-none font-extralight tracking-tighter lg:text-[84px]"
        style={GRAIN_TEXT}
      >
        {props.t.title}
      </h1>
      <p class="mt-3 text-base leading-loose whitespace-pre-line text-zinc-600">
        {props.t.subtitle}
      </p>
    </div>
  )
}
