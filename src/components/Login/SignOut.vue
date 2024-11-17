<template>
  <div v-if="isLoggedIn">
    <CText variant="btn" @click="handleSignOut">Đăng xuất</CText>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import router from '@/router'
import { useStore } from 'vuex'

const isLoggedIn = ref(false)
const user = ref({
  displayName: '',
  photoUrl: '',
})
const store = useStore()
const auth = getAuth()

onMounted(() => {
  onAuthStateChanged(auth, (userData) => {
    isLoggedIn.value = !!userData
    if (userData) {
      user.value = {
        displayName: userData.displayName || userData.email || '',
        photoUrl: userData.photoURL || '/default-avatar.webp',
      }
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    store.dispatch('setIsLoggedIn', false)
    router.push('/').then(() => {
      window.scrollTo(0, 0) // Scroll to the top after navigating to home
    })
  })
}
</script>

<style scoped>
/* Style cho component nếu cần */
</style>
