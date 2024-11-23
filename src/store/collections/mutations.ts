import type { State } from '@/store/state'

export const mutations = {
  setCollections(state: State, { collections }) {
    state.collections = collections
  },
}
