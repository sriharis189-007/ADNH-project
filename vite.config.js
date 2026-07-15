import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so assets work when GitHub Pages serves from main branch root
  base: './',
})
