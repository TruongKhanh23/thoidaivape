export interface State {
  user: object
  isLoggedIn: boolean
  isLoading: boolean
  collections: object
}
export const state: State = {
  user: {},
  isLoggedIn: false,
  isLoading: true,
  collections: [],
}
