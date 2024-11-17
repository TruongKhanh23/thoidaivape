import type { State } from '@/store/state'

export const getters = {
  getIsLoggedIn(state: State): boolean {
    return state.isLoggedIn
  },
}
