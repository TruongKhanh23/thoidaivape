<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    @click="navigateToDetails"
  >
    <!-- Phần hình ảnh hoặc màu gradient -->
    <div class="relative">
      <template v-if="news.image">
        <img
          :src="news.image"
          alt="News Image"
          class="w-full h-32 object-cover rounded-t-lg lg:h-40"
          @error="onImageError"
        />
      </template>
      <template v-else>
        <div
          :class="randomGradient"
          class="w-full h-32 lg:h-40 rounded-t-lg flex items-center justify-center text-white font-bold"
        >
          No Image Available
        </div>
      </template>
    </div>

    <!-- Phần chữ -->
    <div class="p-4 flex flex-col lg:flex-row lg:space-x-4">
      <div class="lg:w-full flex flex-col justify-between">
        <h3 class="font-bold text-sm line-clamp-2 mb-2">{{ news.title }}</h3>
        <div class="flex justify-between text-gray-500 text-sm">
          <span>{{ news.date }}</span>
          <span>{{ news.views }} views</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps, ref } from 'vue'

const props = defineProps({
  news: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

// Các lớp gradient ngẫu nhiên
const gradients = [
  'bg-gradient-to-r from-blue-500 to-purple-500',
  'bg-gradient-to-r from-green-500 to-teal-500',
  'bg-gradient-to-r from-orange-500 to-yellow-500',
  'bg-gradient-to-r from-pink-500 to-red-500',
]

// Chọn ngẫu nhiên màu gradient cho các bài viết không có ảnh
const randomGradient = ref(gradients[Math.floor(Math.random() * gradients.length)])

function navigateToDetails() {
  router.push({ name: 'newsDetails', params: { id: props.news.id } }).then(() => {
    window.scrollTo(0, 0)
  })
}

// Xử lý lỗi ảnh, nếu ảnh không tồn tại hoặc lỗi thì dùng gradient thay thế
function onImageError(event) {
  event.target.style.display = 'none'
}
</script>
