export interface State {
  count: number
  user: object
  isLoggedIn: boolean
  isLoading: boolean
  products: object
  collections: object
}
export const state: State = {
  count: 0,
  user: {},
  isLoggedIn: false,
  isLoading: true,
  products: [],
  collections: [],
}
