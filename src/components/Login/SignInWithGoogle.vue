<template>
  <LoadingModal :isOpen="isOpenLoadingModal" />
  <div class="mt-4 space-y-2">
    <p class="text-center">hoặc đăng nhập nhanh bằng</p>
    <CButton variant="white" class="py-0" @click="signInWithGoogle">
      <div class="flex flex-row items-center justify-center">
        <img src="/google.svg" alt="Google logo" class="mr-2" /> Google
      </div>
    </CButton>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { open, close } from '@/composables/loadingModal/index.js'

import LoadingModal from '@/components/reusable/LoadingModal.vue'

const store = useStore()
const router = useRouter()

const isOpenLoadingModal = ref(false)
const errorMessage = ref('')

const emits = defineEmits(['action:openResetPasswordModal', 'action:updateErrorMessage'])

const signInWithGoogle = () => {
  isOpenLoadingModal.value = open()
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      store.dispatch('setUser', result.user)
      store.dispatch('setIsLoggedIn', true)
      router.push('/').then(() => {
        window.scrollTo(0, 0) // Scroll to the top after navigating to home
      })
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage.value = 'Bạn đã đóng cửa sổ đăng nhập Google trước khi hoàn tất.'
          emits('action:updateErrorMessage', errorMessage.value)
          break
        case 'auth/cancelled-popup-request':
          errorMessage.value = 'Đã có lỗi xảy ra khi đăng nhập bằng Google. Vui lòng thử lại.'
          emits('action:updateErrorMessage', errorMessage.value)

          break
        case 'auth/network-request-failed':
          errorMessage.value = 'Lỗi kết nối mạng. Vui lòng kiểm tra lại kết nối.'
          emits('action:updateErrorMessage', errorMessage.value)
          break
        default:
          errorMessage.value = 'Đã xảy ra lỗi khi đăng nhập bằng Google. Vui lòng thử lại.'
          emits('action:updateErrorMessage', errorMessage.value)
      }
      console.error('Error during Google sign-in:', error)
    })
  isOpenLoadingModal.value = close()
}
</script>
