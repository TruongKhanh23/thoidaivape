<template>
  <div v-if="isLoggedIn">
    <div class="flex items-center cursor-pointer justify-center font-bold hover:underline">
      <span @click="handleSignOut">Đăng xuất</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import router from '@/router'

const isLoggedIn = ref(false)
const user = ref({
  displayName: '',
  photoUrl: '',
})
const isPopupVisible = ref(false)
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
    document.documentElement.classList.remove('dark')

    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#ffffff')
    }

    router.push('/dang-nhap')
  })
}

const togglePopup = () => {
  isPopupVisible.value = !isPopupVisible.value
}
</script>

<style scoped>
/* Style cho component nếu cần */
</style>
