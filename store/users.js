const initialState = {
  user: null,
  loggedIn: false,
}

export const state = () => ({ ...initialState })

export const mutations = {
  RESET(state) {
    const newState = initialState
    Object.keys(newState).forEach((key) => {
      state[key] = newState[key]
    })
  },
  SET_STATE_AUTH(state, { type, value }) {
    state[type] = value
  },
  SET_KEY_USER(state, { type, value }) {
    state.user[type] = value
  },
  ADD_TOKEN(state, token) {
    this.$axios.setToken(token, 'Bearer')
    state.loggedIn = true
    this.$cookies.set('auth.everest.token', token)
  },
  REMOVE_TOKEN(state) {
    this.$axios.setToken(false)
    state.loggedIn = false
    state.user = null
    this.$cookies.remove('auth.everest.token')
  },
}

export const actions = {
  async login({ commit }, params) {
    const response = await this.$repository.v3.match.auth.postLogin(params)

    if (response.success) {
      commit('ADD_TOKEN', response.result.access_token)
    }

    return response
  },
  async fetchMe({ commit }) {
    const response = await this.$repository.v3.match.auth.getMe()

    if (response.success) {
      commit('SET_STATE_AUTH', { type: 'user', value: response.result })
    }

    return response
  },
}
