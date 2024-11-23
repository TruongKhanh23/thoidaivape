import { getters as user } from '@/store/user/getters'
import { getters as collections } from '@/store/collections/getters'
import { getters as isLoggedIn } from '@/store/isLoggedIn/getters'
import { getters as products } from '@/store/products/getters'

export const getters = {
  ...user,
  ...isLoggedIn,
  ...collections,
  ...products,
}
