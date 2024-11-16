<template>
  <div class="w-full max-w-md p-6 md:border rounded-3xl sm:shadow">
    <form class="space-y-6" @submit.prevent="register">
      <div class="flex flex-col items-center justify-center">
        <h5 class="text-xl font-medium !text-center">
          ĐĂNG KÝ <br />
          THỜI ĐẠI VAPE
        </h5>
      </div>

      <div>
        <label for="email" class="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@company.com"
          v-model="email"
          required
        />
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium">Mật khẩu</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          v-model="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
      <button
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Đăng ký
      </button>
    </form>
    <div class="mt-4 space-y-2">
      <p class="text-center">hoặc đăng nhập nhanh bằng</p>
      <button
        type="button"
        class="w-full border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center"
        @click="signInWithGoogle"
      >
        <div class="flex flex-row items-center justify-center">
          <img src="/google.svg" alt="Google logo" class="mr-2" /> Google
        </div>
      </button>
      <div class="text-sm text-center font-medium text-blue-700 dark:text-blue-500">
        Đã có tài khoản?
      </div>
      <button
        class="w-full border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
        @click="$emit('action:updateLoginType', 'signIn')"
      >
        Đăng nhập
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const emit = defineEmits(['action:updateLoginType'])

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const register = () => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      // Đăng nhập ngay sau khi tạo tài khoản
      signInWithEmailAndPassword(auth, email.value, password.value)
      store.dispatch('setIsLoggedIn', true)
      store.dispatch('setUser', auth.currentUser)

      router.push('/').then(() => {
        window.scrollTo(0, 0) // Scroll to the top after navigating to home
      })
    })
    .catch((error) => {
      // Bắt lỗi và hiển thị thông báo lỗi bằng tiếng Việt
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage.value = 'Email này đã được sử dụng. Vui lòng chọn email khác.'
          break
        case 'auth/invalid-email':
          errorMessage.value = 'Email không hợp lệ. Vui lòng kiểm tra lại.'
          break
        case 'auth/weak-password':
          errorMessage.value = 'Mật khẩu quá yếu. Mật khẩu phải có ít nhất 6 ký tự.'
          break
        case 'auth/operation-not-allowed':
          errorMessage.value = 'Đăng ký không thành công. Vui lòng thử lại sau.'
          break
        default:
          errorMessage.value = 'Đã xảy ra lỗi. Vui lòng thử lại.'
      }
      console.log(error.code)
    })
}

const signInWithGoogle = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      store.dispatch('setUser', result.user)
      router.push('/').then(() => {
        window.scrollTo(0, 0) // Scroll to the top after navigating to home
      })
    })
    .catch((error) => {
      // Bắt lỗi và hiển thị thông báo lỗi bằng tiếng Việt
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage.value = 'Bạn đã đóng cửa sổ đăng nhập Google trước khi hoàn tất.'
          break
        case 'auth/cancelled-popup-request':
          errorMessage.value = 'Đã có lỗi xảy ra khi đăng nhập bằng Google. Vui lòng thử lại.'
          break
        case 'auth/network-request-failed':
          errorMessage.value = 'Lỗi kết nối mạng. Vui lòng kiểm tra lại kết nối.'
          break
        default:
          errorMessage.value = 'Đã xảy ra lỗi khi đăng nhập bằng Google. Vui lòng thử lại.'
      }
      console.error('Error during Google sign-in:', error)
    })
}
</script>

<style scoped></style>
