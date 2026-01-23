// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import critters from 'astro-critters';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Site URL for canonical links and sitemap
  site: 'https://centurysync.com',
  // base: '/century-village-landing', // Only needed for GitHub Pages subdirectory

  // Integrations
  integrations: [sitemap(), tailwind(), critters(), mdx()],

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
