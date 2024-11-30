import type { State } from '@/store/state'

export const getters = {
  getProducts(state: State): object {
    return state.products
  },
}
