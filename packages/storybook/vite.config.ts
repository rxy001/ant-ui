import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(() => {
  return {
    plugins: [react()],
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
      alias: {
        '@theme': resolve('../react/src/theme'),
        '@nex-ui/react': resolve('../react/src'),
        '@nex-ui/css-system': resolve('../css-system/src'),
      },
    },
  }
})
