import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    host: true, // This binds Vite to all available network interfaces
    port: 5173, // Optional: Customize port if needed
  },
})
