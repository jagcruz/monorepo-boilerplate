import { resolve } from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  resolve: { alias: { src: resolve('src/') } },
  build: { lib: { entry: resolve(__dirname, 'src/main.ts'), formats: ['es'] } }
});
