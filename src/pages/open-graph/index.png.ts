import { readFileSync } from 'node:fs'

import { Resvg } from '@resvg/resvg-js'
import type { APIRoute } from 'astro'
import satori from 'satori'

import { I18N } from '../../i18n'

const WIDTH = 1200
const HEIGHT = 630
/** 四辺で共通の安全余白。上下左右をこの一つの値だけで揃える */
const INSET = 72
/** 下端の装飾バー。余白の外側に置く */
const BAR = 12
/** ロゴは余白を切り落とした 99x104。この比率を保ったまま高さで指定する */
const LOGO_H = 180
const LOGO_W = Math.round((LOGO_H * 99) / 104)
/** ロゴだけキャンバス幅の 5% ぶん右へ寄せる */
const LOGO_OFFSET = Math.round(WIDTH * 0.05)

const FONTS = {
  montserrat: 'https://cdn.jsdelivr.net/fontsource/fonts/montserrat@latest/latin-200-italic.ttf',
  notoSansJP:
    'https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-jp@latest/japanese-400-normal.ttf',
}

const load = async (url: string) => await (await fetch(url)).arrayBuffer()
const [montserrat, notoSansJP] = await Promise.all([load(FONTS.montserrat), load(FONTS.notoSansJP)])
const logo = `data:image/png;base64,${readFileSync('src/assets/og-logo.png').toString('base64')}`

/** satori は React 要素の形を期待するため、素のオブジェクトで組み立てる */
const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, children },
})

const markup = el(
  'div',
  {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: `${INSET}px`,
    paddingBottom: `${INSET - BAR}px`,
    backgroundImage: 'linear-gradient(180deg, #fafaf9 0%, #ebebe8 100%)',
    borderBottom: `${BAR}px solid #27272a`,
  },
  [
    el('div', { display: 'flex' }, [
      {
        type: 'img',
        props: {
          src: logo,
          style: { display: 'flex', width: LOGO_W, height: LOGO_H, marginLeft: LOGO_OFFSET },
        },
      },
    ]),
    // 見出しと説明は左端を安全余白に揃える
    el('div', { display: 'flex', flexDirection: 'column' }, [
      el(
        'div',
        {
          fontFamily: 'Montserrat',
          fontStyle: 'italic',
          fontSize: 148,
          lineHeight: 1,
          color: '#27272a',
        },
        I18N.ja.title,
      ),
      el(
        'div',
        {
          fontFamily: 'Noto Sans JP',
          fontSize: 34,
          lineHeight: 1,
          color: '#71717a',
          marginTop: 28,
        },
        I18N.ja.ogDescription,
      ),
    ]),
  ],
)

export const GET: APIRoute = async () => {
  const svg = await satori(markup as never, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: 'Montserrat', data: montserrat, weight: 200, style: 'italic' },
      { name: 'Noto Sans JP', data: notoSansJP, weight: 400, style: 'normal' },
    ],
  })
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng()
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } })
}
