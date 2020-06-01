require('dotenv').config();

export default {
  mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  router: {
    middleware: 'fetch',
  },
  pageTransition: 'transition-page',
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    bodyAttrs: {
      class: 'root',
    },
    title: 'РАКЛЕЧИТСЯ.РФ — истории людей, победивших рак, но не свои привычки',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: {
    color: '#582b71',
    height: '4px',
  },
  css: ['~/assets/css/inter.css', '~/assets/css/global.css'],
  plugins: [],
  buildModules: [],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {
    extend(config, ctx) {},
  },
};
