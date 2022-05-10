import { defineNuxtConfig } from 'nuxt3';

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
