export const namespaced = true
export const state = () => ({
  loaded: false,
  preload: [],
  title: null,
  alerts: {},
})

export const mutations = {
  loaded(state, value) {
    state.loaded = Boolean(value)
  },
  title(state, value) {
    state.title = value
  },
  preload(state, item) {
    state.preload.push(item)
  },
  alerts(state, value) {
    state.alerts = value
  }
}

export const actions = {
  loaded({ commit }) {
    commit('loaded', true)
  },
  preload({ state }) {
    state.preload = Array()
  },
  addAlert({ state, commit }, alert) {
    const tmp = state.alerts
    tmp[alert.key] = alert
    commit('alerts', tmp)
  },
  removeAlert({ state, commit }, key) {
    const tmp = {};
    for (k in state.alerts) if (key !== k) tmp[k] = state.alerts[k]
    commit('alerts', tmp)
  },
  clearAlert({ commit }) {
    commit('alerts', {})
  }

}