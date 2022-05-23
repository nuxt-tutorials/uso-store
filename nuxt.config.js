export default {
  telemetry: false,

  ssr: true,
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
    '~/plugins/injects/requestRepository',
    '~/plugins/injects/featureFlags',
  ],

  components: false,

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/eslint-module',
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
