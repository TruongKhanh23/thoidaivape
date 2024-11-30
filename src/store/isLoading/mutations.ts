import type { State } from '@/store/state'

export const mutations = {
  setIsLoading(state: State, { isLoading }) {
    state.isLoading = isLoading
  },
}
