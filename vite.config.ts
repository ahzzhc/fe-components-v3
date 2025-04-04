import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      outDir: 'dist/types'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist/es',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VElement',
      fileName: 'v-element',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        'async-validator',
        '@popperjs/core'
      ],
      output: {
        exports: 'named',
        // globals: {
        //   vue: 'Vue'
        // },
        assetFileNames: chunkInfo => {
          if (chunkInfo.name === 'v-element.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        }
      }
    }
  }
})
