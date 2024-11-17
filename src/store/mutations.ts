import type { State } from '@/store/state'
import { mutations as user } from '@/store/user/mutations'
import { mutations as isLoggedIn } from '@/store/isLoggedIn/mutations'

export const mutations = {
  ...user,
  ...isLoggedIn,
}
