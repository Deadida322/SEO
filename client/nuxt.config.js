import colors from 'vuetify/es5/util/colors'

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        script: [{
            src: 'https://vk.com/js/api/openapi.js?169',
            type: 'text/javascript',
            defer: true
        }],
        title: 'ФИСТ',
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
        '~/assets/styles/main.scss',
        "~/node_modules/vue-wysiwyg/dist/vueWysiwyg.css",
        '~/node_modules/sweetalert2/dist/sweetalert2.min.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/wysiwyg.js'
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
        ['vue-scrollto/nuxt', {
            duration: 1000,
            easing: 'easy-in-out'
        }],
        ['cookie-universal-nuxt', { alias: 'cookiz' }],
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        'vue-sweetalert2/nuxt',

    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'http://127.0.0.1:8000',
    },
    sweetalert: {
        confirmButtonColor: '#41b882',
        cancelButtonColor: '#ff7674'
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        theme: {

            themes: {

            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}