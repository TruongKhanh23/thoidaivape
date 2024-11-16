<template>
  <div class="w-full max-w-md p-6 md:border rounded-3xl sm:shadow bg-white">
    <form class="space-y-6" @submit.prevent="register">
      <div class="flex flex-col items-center justify-center">
        <h5 class="text-xl font-medium !text-center">
          ĐĂNG KÝ <br />
          THỜI ĐẠI VAPE
        </h5>
      </div>
      <Email v-model="email" />
      <Password v-model="password" />
      <ErrorMessage :message="errorMessage" />
      <CButton type="submit">Đăng ký</CButton>
    </form>
    <div class="mt-4 space-y-2">
      <p class="text-center">hoặc đăng nhập nhanh bằng</p>
      <CButton variant="white" class="py-0" @click="signInWithGoogle">
        <div class="flex flex-row items-center justify-center">
          <img src="/google.svg" alt="Google logo" class="mr-2" /> Google
        </div>
      </CButton>
      <div class="text-sm text-center font-medium text-blue-700 dark:text-blue-500">
        Đã có tài khoản?
      </div>
      <CButton variant="white" @click="$emit('action:updateLoginType', 'signIn')">
        Đăng nhập
      </CButton>
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

import Email from '@/components/Login/Email.vue'
import Password from '@/components/Login/Password.vue'
import ErrorMessage from '@/components/Login/ErrorMessage.vue'

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
