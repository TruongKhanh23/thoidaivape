<template>
  <div class="flex justify-center items-center w-full">
    <div class="w-full overflow-hidden rounded-lg relative">
      <div
        class="slider-container flex transition-transform duration-700 ease-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        @mousedown="startDragging"
        @mousemove="drag"
        @mouseup="endDragging"
        @mouseleave="endDragging"
        @touchstart="startDragging"
        @touchmove="drag"
        @touchend="endDragging"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :style="{ background: slide.color }"
          class="slide flex justify-center items-center w-full md:w-[100%] lg:w-[100%] h-[80vh] sm:h-[80vh] text-white text-4xl font-semibold"
          @click="navigate(slide.path)"
        >
          <!-- Nội dung quảng cáo ở đây, ví dụ: tên sản phẩm -->
          {{ slide.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    // Danh sách các slide với màu gradient ngẫu nhiên
    const slides = ref([
      {
        color: 'linear-gradient(135deg, #000000, #3e2723)', // Màu xám
        path: '/bo-suu-tap/vape-box',
        label: 'Quảng Cáo 1',
      },
      {
        color: 'linear-gradient(135deg, #000000, #434343)', // Màu đen
        path: '/bo-suu-tap/vape-kit',
        label: 'Quảng Cáo 2',
      },
      {
        color: 'linear-gradient(135deg, #4e342e, #3e2723)', // Màu nâu
        path: '/bo-suu-tap/vape-juice',
        label: 'Quảng Cáo 3',
      },
    ])

    const currentIndex = ref(0)
    const intervalId = ref(null)
    const isDragging = ref(false)
    const startX = ref(0)
    const translateX = ref(0)

    // Chạy slider tự động
    const startAutoSlide = () => {
      intervalId.value = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slides.value.length
      }, 3000) // 3 giây mỗi slide
    }

    // Dừng slider khi người dùng rê chuột
    const stopAutoSlide = () => {
      clearInterval(intervalId.value)
    }

    // Điều khiển kéo thả
    const startDragging = (e) => {
      stopAutoSlide()
      isDragging.value = true
      startX.value = e.touches ? e.touches[0].clientX : e.clientX
      translateX.value = 0
    }

    const drag = (e) => {
      if (!isDragging.value) return
      const currentX = e.touches ? e.touches[0].clientX : e.clientX
      translateX.value = currentX - startX.value
    }

    const endDragging = () => {
      if (!isDragging.value) return
      if (translateX.value > 50) {
        currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
      } else if (translateX.value < -50) {
        currentIndex.value = (currentIndex.value + 1) % slides.value.length
      }
      isDragging.value = false
      translateX.value = 0
      startAutoSlide()
    }

    // Điều hướng đến đường dẫn khi nhấp vào slide
    const navigate = (path) => {
      window.location.href = path
    }

    // Khởi động khi component mount và dừng khi unmount
    onMounted(() => {
      startAutoSlide()
    })

    onUnmounted(() => {
      stopAutoSlide()
    })

    return { slides, currentIndex, startDragging, drag, endDragging, navigate }
  },
}
</script>

<style scoped>
.slider-container {
  display: flex;
  width: 100%;
}

.slide {
  min-width: 100%;
}
</style>

<style>
@media (max-width: 640px) {
  .slider-container .slide {
    height: 30vh;
  }
}
</style>
