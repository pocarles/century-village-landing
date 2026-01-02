// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Site URL for canonical links and sitemap
  site: 'https://centurysync.com',

  // Integrations
  integrations: [sitemap()],

  // Static output for GitHub Pages
  output: 'static',

  // Build optimizations
  build: {
    // Inline small CSS/JS for better performance
    inlineStylesheets: 'auto',
  },

  // Compression and minification
  compressHTML: true,

  vite: {
    build: {
      // Minify CSS
      cssMinify: true,
      // Minify JS
      minify: 'esbuild',
    },
  },
});
