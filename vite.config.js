import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: "Anjali's Boutique",
        short_name: 'Anjali BTQ',
        description: 'Premium female tailor and boutique in Akola.',
        theme_color: '#e91e8c', // Using the primary pink color
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/images/anjali_logo_512.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/anjali_logo_512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/images/anjali_logo_512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})

