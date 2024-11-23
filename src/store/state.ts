export interface State {
  count: number
  user: object
  isLoggedIn: boolean
  products: object
  collections: object
}
export const state: State = {
  count: 0,
  user: {},
  isLoggedIn: false,
  products: [],
  collections: [],
}
