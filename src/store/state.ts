export interface State {
  user: object
  isLoggedIn: boolean
  isLoading: boolean
  products: object
  collections: object
}
export const state: State = {
  user: {},
  isLoggedIn: false,
  isLoading: true,
  products: [],
  collections: [],
}
