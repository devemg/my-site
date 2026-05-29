import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  resolve: {
    alias: {
      '@sections': '/src/sections',
      '@hooks': '/src/hooks',
      '@data': '/src/data',
      '@models': '/src/models',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
    },
  },
})
