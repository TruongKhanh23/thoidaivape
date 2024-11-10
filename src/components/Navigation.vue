<template>
  <nav class="bg-white py-4">
    <ul class="flex space-x-6 justify-center">
      <li v-for="item in menuItems" :key="item.name" class="relative">
        <!-- Điều hướng đến đường dẫn mới khi click vào mục chính -->
        <a
          :href="`/bo-suu-tap/${item.name.toLowerCase().replace(' ', '-')}`"
          @mouseover="item.isHovered = true"
          @mouseleave="item.isHovered = false"
          class="text-black hover:text-green-500 transition-colors duration-300 flex items-center"
        >
          {{ item.name }}
          <!-- Hiển thị icon mũi tên cho mục có subMenu -->
          <font-awesome-icon
            v-if="item.subMenu"
            :icon="item.isHovered ? 'chevron-up' : 'chevron-down'"
            class="ml-1 transition-transform duration-300"
          />
        </a>

        <!-- Submenu xổ xuống khi hover vào mục có subMenu -->
        <ul
          v-if="item.subMenu && item.isHovered"
          class="absolute left-0 mt-2 bg-white shadow-md rounded-md py-2"
        >
          <li
            v-for="subItem in item.subMenu"
            :key="subItem"
            class="px-4 py-2 hover:text-green-500 transition-colors duration-300"
          >
            <a :href="`/bo-suu-tap/${subItem.toLowerCase().replace(' ', '-')}`">{{ subItem }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { reactive } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

// Đăng ký các icon cần thiết
library.add(faChevronDown, faChevronUp)

const menuItems = reactive([
  { name: 'Sale' },
  { name: 'Podsystem' },
  { name: 'Vape - Box' },
  { name: 'Saltnic' },
  { name: 'Freebase' },
  {
    name: 'Phụ kiện',
    subMenu: ['Đầu pod', 'Occ - coil'],
    isHovered: false, // Biến để theo dõi trạng thái hover
  },
  { name: 'Bài viết' },
  { name: 'Thông Tin' },
])
</script>

<style scoped>
/* Tăng độ rộng và làm nền trắng cho thanh điều hướng */
nav {
  background-color: white;
}

/* Thiết lập màu khi hover cho các mục */
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: #87d068;
}
</style>
