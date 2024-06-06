import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import styleX from 'vite-plugin-stylex'

export default defineConfig((config) => {
  return {
    plugins: [
      react(),
      vanillaExtractPlugin({
        unstable_mode: config.mode === 'development' ? 'transform' : 'emitCss',
      }),
      styleX(),
    ],
    resolve: {
      extensions: [
        '.mjs',
        '.js',
        '.mts',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.css',
      ],
    },
  }
})
