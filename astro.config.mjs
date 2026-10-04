import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
const mode = process.env.DAVG_BUILD_MODE;
export default defineConfig({
  site: 'https://davg.ai', output: 'static',
  srcDir: process.env.DAVG_SOURCE_DIR || './src',
  outDir: mode === 'sandbox' ? './dist-sandbox' : './dist',
  integrations: [{ name: 'davg-publication-guard', hooks: {
    'astro:build:start': () => { if (!mode) throw new Error('Use npm run build or npm run build:sandbox so publication policy is enforced.'); },
  }}],
  vite: { plugins: [tailwindcss()] },
});
