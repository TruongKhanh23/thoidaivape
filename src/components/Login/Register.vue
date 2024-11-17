<template>
  <div class="w-full max-w-md p-6 md:border rounded-3xl sm:shadow bg-white">
    <form class="space-y-6" @submit.prevent="register">
      <div class="flex flex-col items-center justify-center">
        <CText variant="title-uppercase">
          Đăng ký <br />
          Thời đại Vape
        </CText>
      </div>
      <Email v-model="email" />
      <Password v-model="password" />
      <ErrorMessage :message="errorMessage" />
      <CButton type="submit">Đăng ký</CButton>
    </form>
    <div class="mt-4 space-y-2">
      <SignInWithGoogle @action:updateErrorMessage="handleErrorMessage" />
      <CText variant="body-1" class="!text-blue-700">Đã có tài khoản?</CText>
      <CButton variant="white" @click="$emit('action:updateLoginType', 'signIn')">
        Đăng nhập
      </CButton>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import Email from '@/components/Login/Email.vue'
import Password from '@/components/Login/Password.vue'
import ErrorMessage from '@/components/Login/ErrorMessage.vue'
import SignInWithGoogle from '@/components/Login/SignInWithGoogle.vue'

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

function handleErrorMessage(value) {
  errorMessage.value = value
}
</script>

<style scoped></style>
