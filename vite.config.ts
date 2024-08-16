import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '',
  plugins: [react(), viteTsconfigPaths()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'main.js',
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name].js',
      },
      preserveEntrySignatures: 'strict',
    },
    minify: true,
    modulePreload: {
      polyfill: false,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
})
