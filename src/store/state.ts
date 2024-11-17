export interface State {
  count: number
  user: object,
  isLoggedIn: boolean,
}
export const state: State = {
  count: 0,
  user: {},
  isLoggedIn: false
}
