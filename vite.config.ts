import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite serves the app in development and bundles production files into dist/.
export default defineConfig({
  // React handles TSX and development refresh; Tailwind processes its CSS import.
  plugins: [react(), tailwindcss()],
})
