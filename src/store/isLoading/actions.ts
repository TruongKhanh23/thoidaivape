export const actions = {
  setIsLoading(context: { commit: Function }, isLoading) {
    console.log('isLoading', isLoading)

    context.commit('setIsLoading', { isLoading })
  },
}
