import repositories from '~/repositories/request'

export default (ctx, inject) => {
  inject('repository', repositories(ctx.$axios))
}
