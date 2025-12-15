import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["28b40ac5c62b.ngrok-free.app"], // Add your ngrok URL here
  }
});
