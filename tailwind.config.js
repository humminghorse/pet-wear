module.exports = {
  content: ['./{pages,components,layouts,plugins}/**/*.{vue,js,ts}'],
  // 参考: https://daisyui.com/theme-generator/
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#191D24',

          secondary: '#6b7280',

          accent: '#2490d0',

          neutral: '#f3f4f6',

          'base-100': '#fff',

          info: '#7dd3fc',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
