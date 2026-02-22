import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- must import

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // now JS knows what this is
  ],
})
