import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Manuperex.github.io/morty-y-rick/",
  plugins: [react()],
})
