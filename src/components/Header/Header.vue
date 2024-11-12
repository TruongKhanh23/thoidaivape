<!-- Header.vue -->
<template>
  <div class="flex justify-center items-center p-4 w-full">
    <div class="grid grid-cols-3 items-center w-[100%] md:w-[100%] lg:w-[70%]">
      <!-- Column 1: Search Component -->
      <div class="flex justify-start">
        <NavigationMobileIcon />
        <SearchMobile v-if="isSearchVisible && isMobile" @closeSearch="closeSearch" />
        <Search v-if="!isSearchVisible && !isMobile" />
        <button v-if="!isSearchVisible && isMobile" @click="openSearch" class="p-2 text-xl">
          <font-awesome-icon icon="search" />
        </button>
      </div>

      <!-- Column 2: Logo Component -->
      <div class="flex justify-center">
        <Logo />
      </div>

      <!-- Column 3: User and Cart Icons -->
      <div class="flex justify-end space-x-4">
        <button @click="navigateTo('login')" class="p-2 text-xl">
          <font-awesome-icon icon="user" />
        </button>
        <IconCart @click="navigateTo('cart')" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchMobile from './SearchMobile.vue'
import Search from './Search.vue'
import Logo from './Logo.vue'
import IconCart from './IconCart.vue'
import NavigationMobileIcon from './NavigationMobileIcon.vue'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons' // Import icon bars và times
import { library } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'vue-router'

const router = useRouter()

library.add(faBars, faTimes) // Thêm vào thư viện FontAwesome

const isSearchVisible = ref(false)
const isMobile = ref(window.innerWidth < 1024)

// Hàm mở tìm kiếm
function openSearch() {
  isSearchVisible.value = true
}

// Hàm đóng tìm kiếm
function closeSearch() {
  isSearchVisible.value = false
}

function navigateTo(view) {
  router.push({ name: view }).then(() => {
    window.scrollTo(0, 0) // Scroll to the top after navigating to home
  })
}
</script>
