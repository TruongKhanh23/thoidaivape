<template>
  <LoadingModal :isOpen="isOpenLoadingModal" />
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
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { open, close } from '@/composables/loadingModal/index.js'

import LoadingModal from '@/components/reusable/LoadingModal.vue'

const store = useStore()
const router = useRouter()
const isOpenLoadingModal = ref(false)

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
      console.error('Error during Google sign-in:', error)
      alert(error.message)
    })
  isOpenLoadingModal.value = close()
}
</script>
