<template>
  <LoadingModal :isOpen="isOpenLoadingModal" />
  <form class="space-y-6" @submit.prevent="login">
    <Email v-model="email" />
    <Password v-model="password" />
    <ErrorMessage :message="errorMessage" />
    <div class="flex items-start">
      <RememberMeCheckbox v-model="rememberMe" />
      <ForgotPasswordLink @click="$emit('action:openResetPasswordModal', true)" />
    </div>
    <CButton class="!w-full" type="submit">Đăng nhập</CButton>
  </form>
  <SignInWithGoogle @action:updateErrorMessage="handleErrorMessage" />
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { open, close } from '@/composables/loadingModal/index.js'
import { handleAuthenticationSuccess } from '@/composables/authentication/index'

import Email from '@/components/Login/Email.vue'
import Password from '@/components/Login/Password.vue'
import RememberMeCheckbox from '@/components/Login/RememberMeCheckbox.vue'
import ForgotPasswordLink from '@/components/Login/ForgotPasswordLink.vue'
import LoadingModal from '@/components/reusable/LoadingModal.vue'
import SignInWithGoogle from '@/components/Login/SignInWithGoogle.vue'
import ErrorMessage from '@/components/Login/ErrorMessage.vue'

const emit = defineEmits(['action:openResetPasswordModal'])

const router = useRouter()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const errorMessage = ref('')
const isOpenLoadingModal = ref(false)

onMounted(async () => {
  const savedEmail = localStorage.getItem('email')
  const savedPassword = localStorage.getItem('password')
  const savedRememberMe = localStorage.getItem('rememberMe') === 'true'

  if (savedRememberMe && savedEmail && savedPassword) {
    email.value = savedEmail
    password.value = savedPassword
    rememberMe.value = savedRememberMe
  }
})

const login = async () => {
  isOpenLoadingModal.value = open()
  const auth = getAuth()

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)

    if (rememberMe.value) {
      localStorage.setItem('email', email.value)
      localStorage.setItem('password', password.value)
      localStorage.setItem('rememberMe', rememberMe.value)
    } else {
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      localStorage.removeItem('rememberMe')
    }

    handleAuthenticationSuccess(auth.currentUser, router)
  } catch (error) {
    console.log('error code', error.code)
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage.value = 'Email không hợp lệ'
        break
      case 'auth/user-not-found':
        errorMessage.value = 'Không tìm thấy tài khoản với email này'
        break
      case 'auth/wrong-password':
        errorMessage.value = 'Sai mật khẩu'
        break
      default:
        errorMessage.value = 'Email hoặc mật khẩu không chính xác'
        break
    }
  } finally {
    isOpenLoadingModal.value = close()
  }
}

function handleErrorMessage(value) {
  errorMessage.value = value
}
</script>
