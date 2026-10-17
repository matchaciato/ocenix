import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-router/')
          ) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'vendor-icons'
          }
          if (id.includes('node_modules/marked/')) {
            return 'vendor-markdown'
          }
        },
      },
    },
  },
})
