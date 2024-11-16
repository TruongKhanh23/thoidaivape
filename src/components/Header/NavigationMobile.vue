<template>
  <div v-if="isOpen" class="fixed inset-0 z-50">
    <!-- Lớp mờ phía sau modal -->
    <div class="absolute inset-0 bg-[#3c4043] opacity-50" @click="closeNavigation"></div>

    <!-- Navigation modal trượt từ trái ra -->
    <div
      class="absolute top-0 left-0 h-full bg-[#3c4043] text-white shadow-lg p-4 transition-transform duration-300 ease-out"
      :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
      style="width: 75vw"
    >
      <!-- Icon đóng modal -->
      <button @click="closeNavigation" class="text-xl mb-4">
        <font-awesome-icon icon="times" />
      </button>

      <hr class="font-bold border border-white mb-4" />
      <!-- Nội dung Navigation -->
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.name">
            <div class="flex flex-col items-start justify-between my-2 font-semibold pr-4">
              <a
                @click="toggleSubMenu(item)"
                class="text-lg hover:text-green-500 flex items-center w-full uppercase"
              >
                <!-- Text menu item -->
                <span>{{ item.name }}</span>

                <!-- Biểu tượng mũi tên -->
                <font-awesome-icon
                  v-if="item.subMenu"
                  :icon="['fas', item.isOpen ? 'angle-up' : 'angle-down']"
                  class="ml-2"
                />
              </a>

              <!-- SubMenu -->
              <ul v-if="item.subMenu && item.isOpen" class="ml-6 my-2 space-y-2 uppercase">
                <li v-for="subItem in item.subMenu" :key="subItem.name">
                  <a @click="navigateTo(subItem)" class="text-white hover:text-green-500">
                    {{ subItem.name }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { faTimes, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const router = useRouter()

library.add(faTimes, faAngleDown, faAngleUp)

const props = defineProps({
  isOpen: Boolean, // Điều khiển mở modal
})

const emit = defineEmits(['close'])

const menuItems = reactive([
  { name: 'Sale', path: 'sale', view: 'products' },
  { name: 'Podsystem', path: 'podsystem', view: 'products' },
  { name: 'Vape & Box', path: 'vape-box', view: 'products' },
  { name: 'Saltnic', path: 'saltnic', view: 'products' },
  { name: 'Freebase', path: 'freebase', view: 'products' },
  {
    name: 'Phụ kiện',
    path: 'phu-kien',
    view: 'products',
    subMenu: [
      { name: 'Đầu pod', path: 'dau-pod', view: 'products' },
      { name: 'Occ & coil', path: 'occ-coil', view: 'products' },
    ],
    isHovered: false,
    isOpen: false, // Điều khiển việc mở subMenu
  },
  { name: 'Bài viết', path: 'bai-viet', view: 'news' },
  { name: 'Thông Tin', path: 'thong-tin', view: 'about' },
])

function toggleSubMenu(item) {
  if (item.subMenu) {
    item.isOpen = !item.isOpen // Đảo trạng thái của isOpen khi nhấp vào menu cha
  } else {
    navigateTo(item) // Nếu không có subMenu, điều hướng như bình thường
  }
}

function navigateTo(item) {
  closeNavigation()
  router.push({ name: item.view, params: { id: item.path } }).then(() => {
    window.scrollTo(0, 0) // Scroll to the top after navigating to home
  })
}

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
</script>

<style scoped>
/* Transition cho modal trượt từ trái ra */
.translate-x-0 {
  transform: translateX(0);
}
.-translate-x-full {
  transform: translateX(-100%);
}

/* Đảm bảo subMenu thụt vào */
.ml-6 {
  margin-left: 1.5rem; /* Điều chỉnh độ thụt đầu dòng của subMenu */
}

.space-y-2 > * + * {
  margin-top: 0.5rem; /* Khoảng cách giữa các item trong subMenu */
}
</style>
