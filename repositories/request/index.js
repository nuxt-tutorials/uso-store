import SupportV2 from '~/repositories/request/v2/support'

export default ($axios) => ({
  v2: {
    support: SupportV2($axios),
  },
})
