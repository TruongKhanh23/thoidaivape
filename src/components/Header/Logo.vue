<template>
  <div @click="goHome" class="cursor-pointer">
    <img src="/img/original_logo.png" alt="Logo" class="h-20 w-20" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/').then(() => {
    window.scrollTo(0, 0) // Scroll to the top after navigating to home
  })
}
</script>

<style scoped>
/* Nếu cần, bạn có thể thêm các style tùy chỉnh ở đây */
</style>
