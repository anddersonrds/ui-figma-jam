import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
