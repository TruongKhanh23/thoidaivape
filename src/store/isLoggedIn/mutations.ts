import type { State } from '@/store/state'

export const mutations = {
  setIsLoggedIn(state: State, { isLoggedIn }) {
    state.isLoggedIn = isLoggedIn
  },
}
