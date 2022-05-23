export default ($axios) => ({
  getTimezones() {
    return $axios
      .get(`/api/v2/support/timezones`)
      .then(({ data }) => data)
      .catch(({ data }) => data)
  },
})
