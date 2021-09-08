export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'project',
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
    ],
    script:[
      { src:"/vendor/jquery/jquery.min.js"},
      { src:"/vendor/bootstrap/js/bootstrap.bundle.min.js"},
      { src:"/vendor/jquery-easing/jquery.easing.min.js"},
      { src:"/js/sb-admin-2.min.js"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/vendor/fontawesome-free/css/all.min.css',
    '@/assets/css/sb-admin-2.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy'
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'data',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login:{url:'http://localhost:3001/API/login', method:'get'},
          logout:{url:'http://localhost:3001/API/users', method:'delete'},
          user:{url:'http://localhost:3001/API/users', method:'get'}
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  proxy: {
    '/API/login': { target: 'http://localhost:3001'}
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
