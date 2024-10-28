import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [react()],
  server:{
    proxy:{
      "/api":{
        target:"http://127.0.0.1:8000",
        changeOrigin:true,
        headers:{
        Accept:"application/json",
        // "Content-Type":"multipart/form-data;application/json",

        }
      }
    }

  },
  resolve: {
    alias: {
      '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.js'),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      '@tailwindConfig',
      
    ]
  }, 
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
