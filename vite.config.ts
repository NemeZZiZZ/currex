import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/currex/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,
      includeAssets: ["icon-192.png", "icon-512.png", "icon.svg"],
      manifest: {
        name: "currex - Multi-currency Calculator",
        short_name: "currex",
        description:
          "Multi-currency calculator for converting fiat and crypto in real time",
        theme_color: "#0D1117",
        background_color: "#0D1117",
        display: "standalone",
        orientation: "portrait-primary",
        start_url: "/currex/",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.exchangerate-api\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "exchange-rates-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/api\.coingecko\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "crypto-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 5173,
    strictPort: true,
  },
  envPrefix: ["VITE_"],
  build: {
    target: "es2020",
    minify: "esbuild",
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
