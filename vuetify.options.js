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
        }
    }
}