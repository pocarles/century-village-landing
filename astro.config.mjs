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
  integrations: [
    sitemap({
      // Filter out duplicate/old URLs
      filter: (page) => {
        // Exclude duplicate pages (old versions with IDs)
        if (page.includes('/home-8621/')) return false;
        if (page.includes('/terms-of-service-895188/')) return false;
        
        // Exclude test/preview/draft patterns (if they exist)
        if (page.includes('/tmp/')) return false;
        if (page.includes('/_preview/')) return false;
        if (page.includes('/workspace/')) return false;
        if (page.includes('/draft/')) return false;
        
        return true;
      },
      
      // Add lastmod, changefreq, and priority metadata using serialize
      serialize: (item) => {
        const url = item.url;
        const lastmod = new Date().toISOString();
        
        // Homepage: 1.0 priority, daily updates
        if (url === 'https://centurysync.com/') {
          return {
            ...item,
            lastmod,
            changefreq: 'daily',
            priority: 1.0,
          };
        }
        
        // Academy index: 0.9 priority, weekly updates
        if (url.includes('/academy/') && url.endsWith('/academy/')) {
          return {
            ...item,
            lastmod,
            changefreq: 'weekly',
            priority: 0.9,
          };
        }
        
        // Academy articles: 0.8 priority, weekly updates
        if (url.includes('/academy/') && !url.endsWith('/academy/')) {
          return {
            ...item,
            lastmod,
            changefreq: 'weekly',
            priority: 0.8,
          };
        }
        
        // Changelog: 0.7 priority, weekly updates
        if (url.includes('/changelog')) {
          return {
            ...item,
            lastmod,
            changefreq: 'weekly',
            priority: 0.7,
          };
        }
        
        // FAQ/Resources: 0.6 priority, monthly updates
        if (url.includes('/faq') || url.includes('/resources/')) {
          return {
            ...item,
            lastmod,
            changefreq: 'monthly',
            priority: 0.6,
          };
        }
        
        // Legal pages (privacy, terms): 0.3 priority, yearly updates
        if (url.includes('/privacy-policy') || url.includes('/terms-of-service')) {
          return {
            ...item,
            lastmod,
            changefreq: 'yearly',
            priority: 0.3,
          };
        }
        
        // Other pages (fallback): 0.5 priority, monthly updates
        return {
          ...item,
          lastmod,
          changefreq: 'monthly',
          priority: 0.5,
        };
      },
    }),
    tailwind(),
    critters(),
    mdx(),
  ],

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
