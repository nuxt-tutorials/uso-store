export default ($axios) => ({
  getUsers() {
    return $axios
      .get(`/users`)
      .then(({ data }) => data)
      .catch(({ data }) => data)
  },
  postUser(params) {
    return $axios
      .post(`/users/add`, params)
      .then(({ data }) => data)
      .catch(({ data }) => data)
  },
  getUser(id) {
    return $axios
      .get(`/users/${id}`)
      .then(({ data }) => data)
      .catch(({ data }) => data)
  },
  deleteUser(id) {
    return $axios
      .delete(`/users/delete/${id}`)
      .then(({ data }) => data)
      .catch(({ data }) => data)
  },
})
