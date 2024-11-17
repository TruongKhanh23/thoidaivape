import store from '@/store'

export const handleAuthenticationSuccess = (user, router) => {
  store.dispatch('setUser', user)
  store.dispatch('setIsLoggedIn', true)

  router.push({ name: 'home' }).then(() => {
    window.scrollTo(0, 0)
  })
}
