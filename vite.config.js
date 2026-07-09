import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
    proxy: {
      '/career': {
        target: 'https://www.ghlindia.com',
        changeOrigin: true,
        secure: true,
      },
      '/apply_now': {
        target: 'https://www.ghlindia.com',
        changeOrigin: true,
        secure: true,
      },
      '/apply_now1': {
        target: 'https://www.ghlindia.com',
        changeOrigin: true,
        secure: true,
      },
      '/economy-insight': {
        target: 'https://www.ghlindia.com',
        changeOrigin: true,
        secure: true,
      },
      '/economy-insightdetails': {
        target: 'https://www.ghlindia.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
