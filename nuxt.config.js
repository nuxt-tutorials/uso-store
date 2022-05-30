export default {
  telemetry: false,

  ssr: false,
  target: 'static',

  head: {
    title: 'Home',
    titleTemplate: `%s | Nuxt`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  plugins: [
    '~/plugins/axios',
    '~/plugins/injects/requestRepository',
  ],

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: process.env.NUXT_ENV_API,
  },

  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
