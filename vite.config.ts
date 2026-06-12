import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the build works when hosted on a subpath (e.g. GitHub Pages)
export default defineConfig({
  base: './',
  plugins: [react()],
})
