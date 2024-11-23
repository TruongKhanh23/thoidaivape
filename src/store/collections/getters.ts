import type { State } from '@/store/state'

export const getters = {
  getCollections(state: State): object {
    return state.collections
  },
}
