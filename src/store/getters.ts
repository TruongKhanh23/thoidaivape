import { getters as user } from '@/store/user/getters'
import type { State } from '@/store/state'

export const getters = {
  ...user,
}
