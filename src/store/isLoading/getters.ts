import type { State } from '@/store/state'

export const getters = {
  getIsLoading(state: State): boolean {
    return state.isLoading
  },
}
