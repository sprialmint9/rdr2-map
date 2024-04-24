import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import fs from 'fs';

import path from 'path';
function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['./src/assets/**'],
  server: {
    host: '0.0.0.0',
    https: {
      cert: fs.readFileSync(path.join(__dirname, 'keys/myapp.dev+4.pem')),
      key: fs.readFileSync(path.join(__dirname, 'keys/myapp.dev+4-key.pem')),
    },
  },
  preview: {
    https: {
      cert: fs.readFileSync(path.join(__dirname, 'keys/myapp.dev+4.pem')),
      key: fs.readFileSync(path.join(__dirname, 'keys/myapp.dev+4-key.pem')),
    },
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'RDR2 Map',
        short_name: 'RDR2 Map',
        description: '荒野大镖客：救赎2全收集地图',
        start_url: '.',
        display: 'standalone',
        display_override: ['fullscreen', 'minimal-ui'],
        orientation: 'portrait-primary',
        theme_color: 'auto',
        background_color: '#f2f2f2',
        icons: [
          {
            src: '/icons/57.png',
            sizes: '57x57',
            type: 'image/png',
          },
          {
            src: '/icons/60.png',
            sizes: '60x60',
            type: 'image/png',
          },
          {
            src: '/icons/72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/icons/76.png',
            sizes: '76x76',
            type: 'image/png',
          },
          {
            src: '/icons/114.png',
            sizes: '114x114',
            type: 'image/png',
          },
          {
            src: '/icons/120.png',
            sizes: '120x120',
            type: 'image/png',
          },
          {
            src: '/icons/128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: '/icons/144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/icons/152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: '/icons/180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/icons/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/icons/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
        screenshots: [
          {
            src: '/screenshot/540x720.png',
            type: 'image/png',
            sizes: '540x720',
            form_factor: 'narrow',
          },
          {
            src: '/screenshot/720x540.png',
            type: 'image/jpg',
            sizes: '720x540',
            form_factor: 'wide',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,woff2,json,ts,tsx,jsx,txt}'],
        cleanupOutdatedCaches: false,
        runtimeCaching: [
          {
            urlPattern: /^\.js/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'site-js',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^\.css/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'site-css',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/mcdn.gtimg.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'mcdn-img-cache',
              expiration: {
                maxEntries: 4180,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^\.[svg|woff2|json|txt]/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'site-assets',
              expiration: {
                maxEntries: 4180,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
});
