import colors from 'vuetify/es5/util/colors'

export default {
  publicRuntimeConfig: {
    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
      baseURL: `${process.env.BASE_URL}/api`
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - gestion-paye-app',
    title: 'gestion-paye-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scroll.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      default: 'light',
      themes: {
        light: {
          primary: '#F5DA00',
          secondary: '#3C8638',
          tertiary: '#3167AF',
          accent: '#3167AF',
          error: '#FF0000',
          info: '#3167AF',
          success: '#6CB766',
          warning: '#FF0000'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
      middleware: ['auth']
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get' }
        }
      }
    }
  }
}
