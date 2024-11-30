export const actions = {
  setProducts(context: { commit: Function }, products) {
    context.commit('setProducts', { products })
  },
}
