<template>
  <nav class="bg-[#3c4043] text-white py-4 w-[100%] hidden md:block">
    <div class="mx-auto md:w-[100%] lg:w-[60%]">
      <ul class="flex justify-between items-center space-x-6">
        <li
          v-for="item in menuItems"
          :key="item.name"
          class="relative"
          @mouseover="item.isHovered = true"
          @mouseleave="item.isHovered = false"
        >
          <a
            @click="navigateTo(item)"
            :class="[
              'text-white hover:text-green-500 transition-colors duration-300 flex items-center uppercase font-semibold cursor-pointer',
              item.name === 'Sale' ? 'sale-item' : '',
            ]"
          >
            <!-- Hiển thị icon nếu item.name là "Sale" -->
            <font-awesome-icon v-if="item.name === 'Sale'" icon="tag" class="mr-2" />
            {{ item.name }}
            <font-awesome-icon
              v-if="item.subMenu"
              :icon="item.isHovered ? 'chevron-up' : 'chevron-down'"
              class="ml-1 transition-transform duration-300 text-xs"
            />
          </a>
          <ul
            v-if="item.subMenu && item.isHovered"
            class="absolute left-0 bg-[#3c4043] shadow-md rounded-md py-2 w-48 cursor-pointer z-10"
          >
            <li
              v-for="subItem in item.subMenu"
              :key="subItem"
              class="px-4 py-2 hover:text-green-500 transition-colors duration-300"
            >
              <a @click="navigateTo(subItem)">{{ subItem.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { reactive } from 'vue'
import router from '../router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp, faTag } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown, faChevronUp, faTag)

const menuItems = reactive([
  { name: 'Sale', path: 'sale', view: 'collection' },
  { name: 'Podsystem', path: 'podsystem', view: 'collection' },
  { name: 'Vape & Box', path: 'vape-box', view: 'collection' },
  { name: 'Saltnic', path: 'saltnic', view: 'collection' },
  { name: 'Freebase', path: 'freebase', view: 'collection' },
  {
    name: 'Phụ kiện',
    path: 'phu-kien',
    view: 'collection',
    subMenu: [
      { name: 'Đầu pod', path: 'dau-pod', view: 'collection' },
      { name: 'Occ & coil', path: 'occ-coil', view: 'collection' },
    ],
    isHovered: false,
  },
  { name: 'Bài viết', path: 'bai-viet', view: 'news' },
  { name: 'Thông Tin', path: 'thong-tin', view: 'about' },
])

function navigateTo(item) {
  router.push({ name: item.view, params: { id: item.path } }).then(() => {
    window.scrollTo(0, 0) // Scroll to the top after navigating to home
  })
}
</script>

<style scoped>
/* Tăng độ rộng submenu */
ul.w-48 {
  width: 200%;
}

/* Đổi màu cho các mục khi hover */
a {
  color: white;
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
