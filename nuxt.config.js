import { defineNuxtConfig } from 'nuxt'; // 参考: https://qiita.com/teracy164/items/e86f94d8ea4a5d663b66

export default defineNuxtConfig({
  css: ['~/assets/css/app.css'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
