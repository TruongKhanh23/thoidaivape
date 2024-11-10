<!-- Header.vue -->
<template>
  <div class="flex justify-center items-center p-4 w-full">
    <div class="grid grid-cols-3 items-center w-[100%] md:w-[100%] lg:w-[70%]">
      <!-- Column 1: Search Component -->
      <div class="flex justify-start">
        <!-- Hiển thị SearchMobile trên mobile -->
        <SearchMobile v-if="isSearchVisible && isMobile" @closeSearch="closeSearch" />

        <!-- Hiển thị Search trên desktop -->
        <Search v-if="!isSearchVisible && !isMobile" />

        <!-- Hiển thị icon tìm kiếm nếu không có vùng nhập nội dung -->
        <button v-if="!isSearchVisible && isMobile" @click="openSearch" class="p-2 text-xl">
          <font-awesome-icon icon="search" />
        </button>
      </div>

      <!-- Column 2: Logo Component (Centered) -->
      <div class="flex justify-center">
        <Logo />
      </div>

      <!-- Column 3: User and Cart Icons (Aligned Right) -->
      <div class="flex justify-end space-x-4">
        <button @click="goToLogin" class="p-2 text-xl">
          <font-awesome-icon icon="user" />
        </button>
        <!-- Sử dụng IconCart component -->
        <IconCart @click="goToCart" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchMobile from './SearchMobile.vue'
import Search from './Search.vue'
import Logo from './Logo.vue'
import IconCart from './IconCart.vue' // Import IconCart component

const isSearchVisible = ref(false) // Define the state of the search visibility
const isMobile = ref(window.innerWidth < 1024) // Check if the screen width is mobile

// Hàm mở tìm kiếm
function openSearch() {
  isSearchVisible.value = true
}

// Hàm đóng tìm kiếm
function closeSearch() {
  isSearchVisible.value = false
}

function goToLogin() {
  window.location.href = '/login'
}

function goToCart() {
  window.location.href = '/cart'
}
</script>
