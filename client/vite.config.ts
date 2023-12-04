import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [react()],
    base: '/store',
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: process.env.VITE_API_URI,
          // for dev only:
          //   target: 'https://my-server-pv9y.onrender.com',
          changeOrigin: true,
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  }
  )
}
