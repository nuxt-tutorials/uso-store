import Users from '~/repositories/request/users'

export default ($axios) => ({
  users: Users($axios),
})
