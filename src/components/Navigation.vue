<template>
  <nav class="bg-white py-4 w-[100%] md:w-[100%] lg:w-[60%] mx-auto">
    <ul class="flex justify-between items-center space-x-6">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="relative"
        @mouseover="item.isHovered = true"
        @mouseleave="item.isHovered = false"
      >
        <a
          :href="`/bo-suu-tap/${item.name.toLowerCase().replace(' ', '-')}`"
          :class="[
            'text-black hover:text-green-500 transition-colors duration-300 flex items-center uppercase font-semibold',
            item.name === 'Sale' ? 'sale-item' : '',
          ]"
        >
          {{ item.name }}
          <font-awesome-icon
            v-if="item.subMenu"
            :icon="item.isHovered ? 'chevron-up' : 'chevron-down'"
            class="ml-1 transition-transform duration-300"
          />
        </a>
        <ul
          v-if="item.subMenu && item.isHovered"
          class="absolute left-0 bg-white shadow-md rounded-md py-2 w-48"
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
    isHovered: false,
  },
  { name: 'Bài viết' },
  { name: 'Thông Tin' },
])
</script>

<style scoped>
/* Tăng độ rộng submenu */
ul.w-48 {
  width: 200%;
}

/* Đổi màu cho các mục khi hover */
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: #87d068;
}

/* Giữ focus khi hover */
li.relative:hover > ul {
  display: block;
}
ul.absolute {
  display: none;
  position: absolute;
}

/* Phong cách đặc biệt cho mục Sale */
.sale-item {
  background: linear-gradient(to right, #ff7e5f, #f48220);
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: transform 0.3s ease-in-out;
}
.sale-item:hover {
  transform: scale(1.2);
}
</style>
