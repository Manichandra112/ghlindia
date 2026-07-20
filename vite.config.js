import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const proxyConfig = {
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
  '/financial-iq': {
    target: 'https://www.ghlindia.com',
    changeOrigin: true,
    secure: true,
  },
  '/financial-iqdetails': {
    target: 'https://www.ghlindia.com',
    changeOrigin: true,
    secure: true,
  },
  '/educational-videos': {
    target: 'https://www.ghlindia.com',
    changeOrigin: true,
    secure: true,
  },
  '/newsimg': {
    target: 'https://www.ghlindia.com',
    changeOrigin: true,
    secure: true,
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
    proxy: proxyConfig,
  },
  preview: {
    host: true,
    allowedHosts: true,
    proxy: proxyConfig,
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
})

