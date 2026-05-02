// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kcabo.github.io',
  base: '/Sunae',
  integrations: [solidJs()],

  vite: {
    plugins: [tailwindcss()]
  }
});