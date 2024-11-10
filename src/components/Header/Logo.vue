<template>
  <div @click="goHome" class="cursor-pointer">
    <img src="/img/logo_white.jfif" alt="Logo" class="w-16 lg:w-16 h-auto" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<style scoped>
/* Nếu cần, bạn có thể thêm các style tùy chỉnh ở đây */
</style>
