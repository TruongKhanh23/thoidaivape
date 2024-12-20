import { getters as user } from '@/store/user/getters'
import { getters as collections } from '@/store/collections/getters'
import { getters as products } from '@/store/products/getters'

import { getters as isLoggedIn } from '@/store/isLoggedIn/getters'
import { getters as isLoading } from '@/store/isLoading/getters'

export const getters = {
  ...isLoggedIn,
  ...isLoading,
  ...user,
  ...collections,
  ...products,
}
