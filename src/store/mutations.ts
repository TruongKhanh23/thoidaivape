import { mutations as user } from '@/store/user/mutations'
import { mutations as collections } from '@/store/collections/mutations'
import { mutations as products } from '@/store/products/mutations'

import { mutations as isLoggedIn } from '@/store/isLoggedIn/mutations'
import { mutations as isLoading } from '@/store/isLoading/mutations'

export const mutations = {
  ...isLoggedIn,
  ...isLoading,
  ...user,
  ...collections,
  ...products,
}
