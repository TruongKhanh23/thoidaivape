<template>
  <LoadingModal :isOpen="isOpenLoadingModal" />
  <form class="space-y-6" @submit.prevent="login">
    <div class="flex flex-col items-center justify-center">
      <h5 class="text-xl font-medium !text-center">
        ĐĂNG NHẬP <br />
        THỜI ĐẠI VAPE
      </h5>
    </div>
    <Email v-model="email" />
    <Password v-model="password" />
    <ErrorMessage :message="errorMessage" />
    <div class="flex items-start">
      <RememberMeCheckbox v-model="rememberMe" />
      <ForgotPasswordLink @click="$emit('action:openResetPasswordModal', true)" />
    </div>
    <CButton type="submit">Đăng nhập</CButton>
  </form>
  <SignInWithGoogle @action:updateErrorMessage="handleErrorMessage" />
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue'
import { useStore } from 'vuex'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { open, close } from '@/composables/loadingModal/index.js'

import Email from '@/components/Login/Email.vue'
import Password from '@/components/Login/Password.vue'
import RememberMeCheckbox from '@/components/Login/RememberMeCheckbox.vue'
import ForgotPasswordLink from '@/components/Login/ForgotPasswordLink.vue'
import LoadingModal from '@/components/reusable/LoadingModal.vue'
import SignInWithGoogle from '@/components/Login/SignInWithGoogle.vue'
import ErrorMessage from '@/components/Login/ErrorMessage.vue'

const emit = defineEmits(['action:openResetPasswordModal'])

const store = useStore()
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
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('userCredential', userCredential)
    store.dispatch('setUser', auth.currentUser)
    store.dispatch('setIsLoggedIn', true)

    if (rememberMe.value) {
      localStorage.setItem('email', email.value)
      localStorage.setItem('password', password.value)
      localStorage.setItem('rememberMe', rememberMe.value)
    } else {
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      localStorage.removeItem('rememberMe')
    }

    router.push('/').then(() => {
      window.scrollTo(0, 0) // Scroll to the top after navigating to home
    })
  } catch (error) {
    console.log('error code', error.code)
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage.value = 'Invalid Email'
        break
      case 'auth/user-not-found':
        errorMessage.value = 'No account with that email was found'
        break
      case 'auth/wrong-password':
        errorMessage.value = 'Incorrect password'
        break
      default:
        errorMessage.value = 'Email or password was incorrect'
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
