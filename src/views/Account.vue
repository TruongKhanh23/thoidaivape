<template>
  <CLayout>
    <div class="p-6 w-fit mx-auto bg-white rounded-lg shadow-md min-h-[50vh] space-y-4">
      <!-- Tiêu đề -->
      <CText variant="title">Hồ sơ của tôi</CText>

      <!-- Avatar -->
      <div class="flex justify-center">
        <div
          class="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center"
        >
          <template v-if="user.avatar">
            <img :src="user.avatar" alt="Avatar" class="object-cover w-full h-full" />
          </template>
          <template v-else>
            <font-awesome-icon icon="user" class="text-gray-400 text-6xl" />
          </template>
        </div>
      </div>

      <SignOut />

      <!-- Thông tin tài khoản -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
        <CText variant="body-1" class="!text-left">Tên đăng nhập</CText>
        <CText class="!text-left">{{ user.username }}</CText>

        <CText variant="body-1" class="!text-left">Tên</CText>
        <CText class="!text-left">{{ user.name }}</CText>

        <CText variant="body-1" class="!text-left">Email</CText>
        <CText class="!text-left">{{ user.email }}</CText>
      </div>
    </div>
  </CLayout>
</template>

<script setup>
import SignOut from '@/components/Login/SignOut.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

// Dữ liệu user mẫu
const user = computed(() => {
  return {
    avatar: '', // Đường dẫn ảnh avatar (để trống để hiển thị icon mặc định)
    username: store.getters.getUser.email,
    name: store.getters.getUser.displayName,
    email: store.getters.getUser.email,
  }
})
</script>

<style scoped>
/* Thêm padding hoặc margin tùy chỉnh nếu cần */
</style>
