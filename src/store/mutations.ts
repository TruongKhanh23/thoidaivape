import type { State } from '@/store/state'
import { mutations as user } from '@/store/user/mutations'

export const mutations = {
  ...user,
}
