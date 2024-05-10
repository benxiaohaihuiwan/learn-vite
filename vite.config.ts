import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspector from 'vite-plugin-vue-inspector';

import  {resolve}  from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 5175
  },
  resolve:{
    alias:{
      "@": resolve(__dirname,'./src')
    }
  },
  plugins: [vue(),Inspector({
    openInEditorHost: 'http://localhost:5173',
  }),],
})
