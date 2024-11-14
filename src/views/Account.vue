<template>
  <div class="p-6 w-fit mx-auto bg-white rounded-lg shadow-md min-h-[50vh]">
    <!-- Tiêu đề -->
    <h2 class="text-2xl font-bold mb-6 text-center">Hồ sơ của tôi</h2>

    <!-- Avatar -->
    <div class="flex justify-center">
      <div
        class="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center"
      >
        <template v-if="user.avatar">
          <img :src="user.avatar" alt="Avatar" class="object-cover w-full h-full" />
        </template>
        <template v-else>
          <i class="fas fa-user text-gray-400 text-6xl"></i>
        </template>
      </div>
    </div>

    <SignOut class="mb-6 mt-2" />

    <!-- Thông tin tài khoản -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
      <div class="font-semibold text-gray-600">Tên đăng nhập</div>
      <div>{{ user.username }}</div>

      <div class="font-semibold text-gray-600">Tên</div>
      <div>{{ user.name }}</div>

      <div class="font-semibold text-gray-600">Email</div>
      <div>{{ user.email }}</div>
    </div>
  </div>
</template>

<script setup>
import SignOut from '@/components/Login/SignOut.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

// Dữ liệu user mẫu
const user = computed(() => {
  return {
    avatar: store.getters.getUser.photoURL, // Đường dẫn ảnh avatar (để trống để hiển thị icon mặc định)
    username: store.getters.getUser.email,
    name: store.getters.getUser.displayName,
    email: store.getters.getUser.email,
  }
})
</script>

<style scoped>
/* Thêm padding hoặc margin tùy chỉnh nếu cần */
</style>
