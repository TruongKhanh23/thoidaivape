import { getters as user } from '@/store/user/getters'
import { getters as isLoggedIn } from '@/store/isLoggedIn/getters'
import type { State } from '@/store/state'

export const getters = {
  ...user,
  ...isLoggedIn,
}
