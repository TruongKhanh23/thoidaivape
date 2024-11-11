// src/fontAwesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faTimes, faUser, faShoppingCart)

export default FontAwesomeIcon
