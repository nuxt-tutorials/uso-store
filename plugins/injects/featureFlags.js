export default ({ store }, inject) => {
  inject('hasFeature', (type) => {
    if (!store.state.auth.user) return false

    const { features } = store.state.auth.user
    const feature = features.find((f) => f === type)
    return !!feature
  })
}
