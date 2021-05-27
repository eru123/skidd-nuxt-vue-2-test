import colors from 'vuetify/es5/util/colors'
import '~/assets/global.scss'
import '@fortawesome/fontawesome-free/css/all.css'
export default function () {
    return {
        defaultAssets: false,
        font: {
            family: 'Roboto'
        },
        icons: {
            iconFont: 'fa'
        },
        lang: {
            t: (key, ...params) => app.i18n.t(key, params)
        },
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: colors.lightBlue.darken4,
                },
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    }
}