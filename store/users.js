const initialState = {
  users: [],
  user: null
}

export const state = () => ({...initialState})

export const mutations = {
  SET_STATE_USERS(state, {type, value}) {
    state[type] = value
  },
  ADD_USER(state, user) {
    state.users.push(user)
  },
  DELETE_USER(state, id) {
    const index = state.users.findIndex(user => user.id === id)

    if (index !== -1) {
      state.users.splice(index, 1)
    }
  },
}

export const actions = {
  async fetchUsers({commit}) {
    const response = await this.$repository.users.getUsers()

    if (response.success) {
      commit('SET_STATE_USERS', {
        type: 'users',
        value: response.result,
      })
    }

    return response
  },
  async addUser({state, commit}, params) {
    const response = await this.$repository.users.postUser(params)

    if (response.success) {
      commit('ADD_USER', {
        id: response.id,
        ...params,
      })
    }

    return response
  },
  async fetchUser({state, commit}, id) {
    const response = await this.$repository.users.getUser(id)

    if (response.success) {
      commit('SET_STATE_USERS', {
        type: 'user',
        value: response.result,
      })
    }

    return response
  },
  async deleteUser({state, commit}, id) {
    const response = await this.$repository.users.deleteUser(id)

    if (response.success) {
      commit('DELETE_USER', id)
    }

    return response
  },
}
