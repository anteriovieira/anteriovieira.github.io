const path = require('path')
const locale = require('./locales')

module.exports = {
  modules: [
    ['nuxt-i18n', locale]
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Antério Vieira',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', content: "Perfil de Antério Vieira!" },
      { name: 'description', content: '' },
      { property: 'og:title', content: 'Antério Vieira' },
      { property: 'og:site_name', content: 'Antério Vieira' },
      { property: 'og:url', content: 'https://anteriovieira.github.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Perfil de Antério Vieira!' },
      { property: 'og:image', content: 'https://anteriovieira.github.com/img/cover.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@anteriovieira.github' },
      { property: 'twitter:image', content: 'https://anteriovieira.github.com/img/cover.png' },
      { property: 'twitter:title', content: 'Antério Vieira' },
      { property: 'twitter:description', content: 'Perfil de Antério Vieira!' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#3EB882' }
    ],
    link: [
      { rel: 'fluid-icon', href: 'https://github.com/fluidicon.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;subset=latin-ext' },
    ],
    script: [
      { type: 'text/javascript', src: '/sw.js' }
    ]
  },
  /*
  ** Global CSS
  */
  // css: ['~assets/css/style.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~plugins/gtag', ssr: false },
    { src: '~plugins/analytics', ssr: false },
    { src: '~plugins/cookies', ssr: false },
    { src: '~plugins/offline.js', ssr: false }
  ],
  build: {
    filenames: {
      // TMP: Increment this each time when doing a release to bust the cache
      app: 'app.' + Date.now() + '.js'
    },
    extend (config) {
      // config.resolve.alias['~components'] = path.resolve(__dirname, 'src/components')
    },
  },
}
