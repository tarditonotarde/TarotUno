import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => ({
  // En producción GitHub Pages necesita el nombre del repo
  base: mode === 'production' ? '/TarotUno/' : '/',

  // 🔑 MUY IMPORTANTE: generar el build en /docs
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },

  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
