import { actions as user } from '@/store/user/actions'
import { actions as collections } from '@/store/collections/actions'
import { actions as products } from '@/store/products/actions'
import { actions as isLoggedIn } from '@/store/isLoggedIn/actions'

export const actions = {
  ...user,
  ...isLoggedIn,
  ...collections,
  ...products,
}
