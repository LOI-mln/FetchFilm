import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, '../data'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:4500'
    },
    fs: {
      allow: ['..']
    }
  }
})