export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    bodyAttrs: {
      class: 'root',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
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
