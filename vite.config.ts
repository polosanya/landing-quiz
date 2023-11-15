import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/landing-quiz/',
  css: {
    preprocessorOptions: {
      scss: {
        modules: true,
      },
    },
  },
  resolve: {
    alias: {
      src: "/src",
      '@components': '/src/components',
      '@screens': '/src/screens',
      '@assets': '/src/assets',
      '@helpers': '/src/helpers',
      '@api': '/src/api',
    },
  },
})
