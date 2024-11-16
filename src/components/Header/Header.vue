<!-- Header.vue -->
<template>
  <div class="flex justify-center items-center">
    <div class="bg-[#3c4043] w-full flex items-center justify-center">
      <div class="grid grid-cols-3 items-center w-[100%] md:w-[100%] lg:w-[70%] py-4 sm:py-2">
        <!-- Column 1: Search Component -->
        <div class="flex justify-start">
          <NavigationMobileIcon />
          <SearchMobile v-if="isSearchVisible && isMobile" @closeSearch="closeSearch" />
          <Search v-if="!isSearchVisible && !isMobile" />
          <button v-if="!isSearchVisible && isMobile" @click="openSearch" class="p-2 text-xl">
            <font-awesome-icon icon="search" class="text-white" />
          </button>
        </div>

        <!-- Column 2: Logo Component -->
        <div class="flex justify-center">
          <Logo />
        </div>

        <!-- Column 3: User and Cart Icons -->
        <div class="flex justify-end space-x-4">
          <button @click="navigateToAccount()" class="p-2 text-xl">
            <font-awesome-icon icon="user" class="text-white" />
          </button>
          <IconCart @click="navigateTo('cart')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SearchMobile from './SearchMobile.vue'
import Search from './Search.vue'
import Logo from './Logo.vue'
import IconCart from './IconCart.vue'
import NavigationMobileIcon from './NavigationMobileIcon.vue'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons' // Import icon bars và times
import { library } from '@fortawesome/fontawesome-svg-core'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

library.add(faBars, faTimes) // Thêm vào thư viện FontAwesome

const isSearchVisible = ref(false)
const isMobile = ref(window.innerWidth < 1024)
const isLoggedIn = computed(() => store.getters.getIsLoggedIn)

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

function navigateToAccount() {
  if (isLoggedIn.value) {
    router.push({ name: 'account' }).then(() => {
      window.scrollTo(0, 0) // Scroll to the top after navigating to home
    })
  } else {
    router.push({ name: 'login' }).then(() => {
      window.scrollTo(0, 0) // Scroll to the top after navigating to home
    })
  }
}
</script>
