import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint2'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    eslintPlugin({
      cache: false, // 禁用eslint缓存
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false, // 打包后的分析文件会出现在打包好的文件包下
      filename: 'visualizer.html', // 分析图生成的文件名
      open: true, // 如果存在本地服务端口，将在打包后自动展示
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    // css预处理
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: '@import "./src/styles/index.scss";',
    //     javascriptEnabled: true,
    //   },
    // },
  },
  build: {
    assetsDir: 'statics', // 静态资源的存放目录
    assetsInlineLimit: 4096, // 图片转 base64 编码的阈值
    terserOptions: {
      compress: {
        // warnings: false,
        drop_console: true, // 打包时删除console
        drop_debugger: true, // 打包时删除 debugger
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
    // Disable file size reporting
    reportCompressedSize: false,
    // Disable source map generation to reduce bundle size (important for production)
    sourcemap: false, // Disable this for production to minimize bundle size
  },
  server: {
    host: '0.0.0.0',
    open: false,
    port: 5183,
  },
})
