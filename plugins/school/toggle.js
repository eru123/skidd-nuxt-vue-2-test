export default function (ctx) {

  const theme = () => {
    ctx.$vuetify.theme = !ctx.$vuetify.theme
  }

  return {
    theme
  }
}