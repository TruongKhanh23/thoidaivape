export const actions = {
  setIsLoggedIn(context: { commit: Function }, isLoggedIn) {
    context.commit('setIsLoggedIn', { isLoggedIn })
  },
}
