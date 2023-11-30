import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        '/api': {
          // target: 'http://localHost:5000',
          // for dev only:
          target: 'https://my-server-pv9y.onrender.com:5000',
          changeOrigin: true,
        }
      }
    },
    build: {
      rollupOptions: {
          output:{
              manualChunks(id) {
                  if (id.includes('node_modules')) {
                      return id.toString().split('node_modules/')[1].split('/')[0].toString();
                  }
              }
          }
      }
  }
  })