/*
https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
// const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
  },
}
