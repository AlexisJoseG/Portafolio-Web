import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://AlexisJoseG.github.io',
  base: '/Portafolio-Web',
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
});