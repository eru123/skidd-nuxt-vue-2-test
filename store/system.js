export const state = () => ({
  loaded: false,
  global: {},
  counter: {}
})

export const mutations = {
  loaded(state, value) {
    state.loaded = Boolean(value)
  },
  global(state, value) {
    state.global = value
  },
  counter(state, value) {
    state.counter = value
  }
}

export const actions = {
  loaded({ commit }) {
    commit('loaded', true)
  },
  global({ commit }) {
    commit('global', {})
  },
  counter({ commit }) {
    commit('counter', {})
  },
}