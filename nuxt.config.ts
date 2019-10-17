import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  env: {
    NODE_ENV: 'dev'
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  styleResources: {
    scss: ['@/assets/sass/variables.scss']
  },
  css: [
    '@/assets/sass/external-grid.scss',
    '@/assets/sass/vrwebdesign-main.scss',
    'animate.css/animate.css',
    '@/assets/sass/main.scss',
  ],
  vuetify: {
    customVariables: ['@/assets/sass/_variables.scss',
      '@/assets/sass/app.scss'],
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuetify.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '~/modules/nuxt-date-picker'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */

  /*
  ** Build configuration
  */
  build: {


    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
