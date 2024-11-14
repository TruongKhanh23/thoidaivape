import './assets/main.css'

import { createApp } from 'vue'
import { firebaseApp } from './firebaseConfig'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import App from './App.vue'
import router from './router'
import store from './store'
import FontAwesomeIcon from './fontAwesome'

import 'vue3-toastify/dist/index.css'
import { toast } from 'vue3-toastify'

const auth = getAuth(firebaseApp)
let isInitialized = false

onAuthStateChanged(auth, (user) => {
  checkInternetConnection()

  if (!isInitialized) {
    if (user) {
      router.push('/').then(() => {
        window.scrollTo(0, 0) // Scroll to the top after navigating to home
      })
    }
    const app = createApp(App)
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.use(router)
    app.use(store)
    app.mount('#app')
    isInitialized = true
  }
})

// Detect offline/online status and notify the user
const handleOffline = () => {
  toast.error('Bạn đã mất kết nối internet. Vui lòng kiểm tra kết nối của bạn.')
}

const handleOnline = () => {
  toast.success('Kết nối internet đã được khôi phục. Hãy nhấn F5 để thử lại.')
}

const checkInternetConnection = () => {
  if (!navigator.onLine) {
    toast.error('Bạn đã mất kết nối internet. Vui lòng kiểm tra kết nối của bạn.')
  }
}

window.addEventListener('offline', handleOffline)
window.addEventListener('online', handleOnline)
