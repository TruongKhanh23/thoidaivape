export const actions = {
  setCollections(context: { commit: Function }, collections) {
    context.commit('setCollections', { collections })
  },
}
