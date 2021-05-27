import firebase from './firebase'
import toggle from './toggle'
import app from './app'
export default (ctx, inject) => {

  inject('school', {
    fire: firebase(ctx),
    toggle: toggle(ctx),
    app: app(ctx),
  })
}
