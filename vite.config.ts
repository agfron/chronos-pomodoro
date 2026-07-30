import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    fs: {
      strict: false,
    },
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
