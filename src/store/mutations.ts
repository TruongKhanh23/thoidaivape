import { mutations as user } from '@/store/user/mutations'
import { mutations as collections } from '@/store/collections/mutations'
import { mutations as isLoggedIn } from '@/store/isLoggedIn/mutations'
import { mutations as products } from '@/store/products/mutations'

export const mutations = {
  ...user,
  ...isLoggedIn,
  ...collections,
  ...products,
}
