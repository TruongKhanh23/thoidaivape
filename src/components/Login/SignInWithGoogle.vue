<template>
  <LoadingModal :isOpen="isOpenLoadingModal" />
  <div class="mt-4 space-y-2">
    <CText>hoặc đăng nhập nhanh bằng</CText>
    <CButton variant="white" class="!w-full !py-0" @click="signInWithGoogle">
      <div class="flex flex-row items-center justify-center">
        <img src="/google.svg" alt="Google logo" class="mr-2" /> Google
      </div>
    </CButton>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { open, close } from '@/composables/loadingModal/index.js'
import { handleAuthenticationSuccess } from '@/composables/authentication/index'

import LoadingModal from '@/components/reusable/LoadingModal.vue'

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
      handleAuthenticationSuccess(result.user, router)
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
