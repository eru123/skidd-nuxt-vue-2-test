const APP_TITLE = process.env.VUE_APP_SHORT_TITLE
const APP_DESC = process.env.VUE_APP_DESCRIPTION
const APP_HOST = process.env.VUE_APP_HOST
const APP_ICON = `${APP_HOST}/icon.png`

export default {
    publicRuntimeConfig: {
        longTitle: process.env.VUE_APP_TITLE,
        shortTitle: process.env.VUE_APP_SHORT_TITLE,
    },
    privateRuntimeConfig: {},
    head: {
        titleTemplate: `%s | ${APP_TITLE}`,
        title: APP_TITLE,
        // Test on: https://cards-dev.twitter.com/validator
        // Test on: https://developers.facebook.com/tools/debug/
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: APP_TITLE,
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: APP_DESC,
            },
            {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: APP_ICON,
            },
            {
                hid: 'twitter:image:alt',
                name: 'twitter:image:alt',
                content: APP_TITLE,
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: APP_TITLE,
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: APP_DESC,
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: APP_ICON,
            },
            {
                hid: 'og:image:secure_url',
                property: 'og:image:secure_url',
                content: APP_ICON,
            },
            {
                hid: 'og:image:alt',
                property: 'og:image:alt',
                content: APP_ICON,
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    server: { host: '0.0.0.0', },
    // serverMiddleware: ['~/api/index'],
    css: [],
    plugins: [
        // '~/plugins/firebase.js',
        { src: '~/plugins/school/index.js', mode: 'client' },
        '~/plugins/lstore.client.js',
        // '~/plugins/func.js',
        // '~/plugins/vue-clipboard2.js',
        // '~/plugins/vuetify.js',
        '~/plugins/global-components.js',
    ],
    components: true,
    buildModules: [
        '@nuxtjs/tailwindcss',
        ['@nuxtjs/vuetify', { optionsPath: './vuetify.options.js' }]
    ],
    modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/firebase'],
    env: {
        VUE_APP_TITLE: process.env.VUE_APP_TITLE,
        VUE_APP_SHORT_TITLE: process.env.VUE_APP_SHORT_TITLE,
        VUE_APP_DESCRIPTION: process.env.VUE_APP_DESCRIPTION,
        VUE_APP_HOST: process.env.VUE_APP_HOST,
        VUE_APP_FIREBASE_APIKEY: process.env.VUE_APP_FIREBASE_APIKEY,
        VUE_APP_FIREBASE_AUTHDOMAIN: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
        VUE_APP_FIREBASE_DATABASEURL: process.env.VUE_APP_FIREBASE_DATABASEURL,
        VUE_APP_FIREBASE_PROJECTID: process.env.VUE_APP_FIREBASE_PROJECTID,
        VUE_APP_FIREBASE_STORAGEBUCKET: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
        VUE_APP_FIREBASE_MESSAGINGSENDERID:
            process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
        VUE_APP_FIREBASE_APPID: process.env.VUE_APP_FIREBASE_APPID,
        VUE_APP_FIREBASE_MEASUREMENTID: process.env.VUE_APP_FIREBASE_MEASUREMENTID,
        VUE_APP_EMU: process.env.VUE_APP_EMU,
        VUE_APP_EMU_AUTH: process.env.VUE_APP_EMU_AUTH,
        VUE_APP_EMU_RDB: process.env.VUE_APP_EMU_RDB,
        VUE_APP_EMU_STORE: process.env.VUE_APP_EMU_STORE,
    },
    firebase: {
        config: {
            apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
            authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
            databaseURL: process.env.VUE_APP_FIREBASE_DATABASEURL,
            projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
            storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
            messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
            appId: process.env.VUE_APP_FIREBASE_APPID,
            measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENTID,
        },
        services: {
            auth: {
                static: true,
                preload: true,
                persistence: 'local',
                emulatorPort:
                    process.env.NODE_ENV === 'development' && process.env.VUE_APP_EMU
                        ? process.env.VUE_APP_EMU_AUTH
                        : undefined,
                emulatorHost:
                    process.env.NODE_ENV === 'development' && process.env.VUE_APP_EMU
                        ? process.env.VUE_APP_EMU
                        : undefined,
            },
            firestore: {
                static: true,
                preload: true,
                emulatorPort:
                    process.env.NODE_ENV === 'development' && process.env.VUE_APP_EMU
                        ? process.env.VUE_APP_EMU_STORE
                        : undefined,
                emulatorHost:
                    process.env.NODE_ENV === 'development' && process.env.VUE_APP_EMU
                        ? process.env.VUE_APP_EMU
                        : undefined,
            },
            storage: {
                static: true,
                preload: true,
            },
            database: true,
            performance: true,
            functions: true,
            analytics: true,
        },
        lazy: false,
    },
    build: {
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
    },
    loading: {
        color: '#29B6F6',
        height: '5px',
        continuous: true,
    },
}