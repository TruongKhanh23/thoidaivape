import type { State } from '@/store/state'

export const mutations = {
  setProducts(state: State, { products }) {
    state.products = products
  },
}
