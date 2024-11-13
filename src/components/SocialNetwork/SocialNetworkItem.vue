<template>
  <div
    class="relative flex flex-col items-center justify-center text-center rounded-lg shadow-lg h-60 cursor-pointer"
    :class="backgroundClass"
    @click="openSocialNetwork"
  >
    <!-- Icon -->
    <div v-if="icon" class="mb-2 text-white text-4xl">
      <FontAwesomeIcon :icon="icon" />
    </div>

    <!-- Tên cửa hàng -->
    <span class="text-white font-semibold">THỜI ĐẠI VAPE</span>

    <!-- Tên mạng xã hội -->
    <span class="text-white font-bold text-lg uppercase">{{ data.name }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTiktok, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

// Props của component
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

// Chọn icon và lớp nền dựa trên mạng xã hội
const icons = {
  TIKTOK: faTiktok,
  INSTAGRAM: faInstagram,
  FACEBOOK: faFacebook,
}
const gradients = {
  TIKTOK: 'bg-gradient-to-r from-gray-800 to-black',
  INSTAGRAM: 'bg-gradient-to-r from-yellow-400 to-pink-500',
  FACEBOOK: 'bg-gradient-to-r from-blue-500 to-blue-700',
}

const icon = icons[props.data.name.toUpperCase()]
const backgroundClass = props.data.image ? '' : gradients[props.data.name.toUpperCase()]

// Hàm mở liên kết mạng xã hội
function openSocialNetwork() {
  const appUrls = {
    TIKTOK: 'tiktok://user?screen_name=vapethoidai',
    INSTAGRAM: 'instagram://user?username=thoidaivape_coffee',
    FACEBOOK: 'fb://page/61558601394024',
  }

  // Kiểm tra nếu người dùng có cài đặt ứng dụng mạng xã hội
  if (appUrls[props.data.name.toUpperCase()] && navigator.userAgent.includes('Mobile')) {
    window.open(appUrls[props.data.name.toUpperCase()], '_blank')
  } else {
    window.open(props.data.path, '_blank')
  }
}
</script>

<style scoped>
/* Đảm bảo các phần tử con nằm gọn trong thẻ div container */
</style>
