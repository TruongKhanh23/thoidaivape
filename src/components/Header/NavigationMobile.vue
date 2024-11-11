<!-- NavigationMobile.vue -->
<template>
  <div v-if="isOpen" class="fixed inset-0 z-50">
    <!-- Lớp mờ phía sau modal -->
    <div class="absolute inset-0 bg-white opacity-50" @click="closeNavigation"></div>

    <!-- Navigation modal trượt từ trái ra -->
    <div
      class="absolute top-0 left-0 h-full bg-gray-100 shadow-lg p-4 transition-transform duration-300 ease-out"
      :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
      style="width: 70vw"
    >
      <!-- Icon đóng modal -->
      <button @click="closeNavigation" class="text-xl mb-4">
        <font-awesome-icon icon="times" />
      </button>

      <!-- Nội dung Navigation -->
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.name">
            <a
              @click="closeNavigation()"
              :href="`/bo-suu-tap/${convertToSlug(item.name)}`"
              class="text-black text-lg hover:text-green-500"
            >
              {{ item.name }}
            </a>
          </li>
          <!-- Add more links as needed -->
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, reactive } from 'vue'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faTimes)

const props = defineProps({
  isOpen: Boolean, // Điều khiển mở modal
})

const emit = defineEmits(['close'])

const menuItems = reactive([
  { name: 'Sale' },
  { name: 'Podsystem' },
  { name: 'Vape & Box' },
  { name: 'Saltnic' },
  { name: 'Freebase' },
  {
    name: 'Phụ kiện',
    subMenu: ['Đầu pod', 'Occ & coil'],
  },
  { name: 'Bài viết' },
  { name: 'Thông Tin' },
])

// Đóng modal và phát sự kiện close để thông báo cho component cha
function closeNavigation() {
  emit('close')
}

// Xử lý việc đóng modal khi nhấn phím Escape
function handleEscape(event) {
  if (event.key === 'Escape') {
    closeNavigation()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
function convertToSlug(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/\s+/g, '-')
}
</script>

<style scoped>
/* Transition cho modal trượt từ trái ra */
.translate-x-0 {
  transform: translateX(0);
}
.-translate-x-full {
  transform: translateX(-100%);
}
</style>
