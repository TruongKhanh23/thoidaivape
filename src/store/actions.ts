import { actions as user } from '@/store/user/actions'
import { actions as collections } from '@/store/collections/actions'
import { actions as products } from '@/store/products/actions'

import { actions as isLoggedIn } from '@/store/isLoggedIn/actions'
import { actions as isLoading } from '@/store/isLoading/actions'

export const actions = {
  ...isLoggedIn,
  ...isLoading,
  ...user,
  ...collections,
  ...products,
}
