export const state = () => ({
  user: {
    uid: null,
    email: null,
    emailVerified: null,
  },
  data: {
    uid: null,
  },
  authenticated: false,
  isAdmin: false,
  isInAdmin: false,
  loaded: false
})

export const mutations = {
  loaded(state, value) {
    state.loaded = Boolean(value)
  },
  isAdmin(state, value) {
    state.isAdmin = Boolean(value)
  },
  isInAdmin(state, value) {
    state.isInAdmin = Boolean(value)
  },
  authenticated(state, value) {
    state.authenticated = Boolean(value)
  },
  user(state, value) {
    const { uid, email, emailVerified } = value
    state.user = { uid, email, emailVerified }
  },
  data(state, value) {
    state.data = value
  },
}

export const actions = {
  loaded({ commit }) {
    commit('loaded', true)
  },
  logout({ commit }) {
    commit('user', { uid: null, email: null, emailVerified: null })
    commit('data', { uid: null })
    commit('authenticated', false)
    commit('isAdmin', false)
    commit('isInAdmin', false)
    commit('loaded', true)
  }
}