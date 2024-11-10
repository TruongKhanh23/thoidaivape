<template>
  <div class="flex justify-center items-center p-4 w-full">
    <div class="grid grid-cols-3 items-center w-[60%]">
      <!-- Column 1: Search Component -->
      <div class="flex justify-start">
        <Search />
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
        <button @click="goToCart" class="p-2 text-xl">
          <font-awesome-icon icon="shopping-cart" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from './Search.vue'
import Logo from './Logo.vue'

function goToLogin() {
  window.location.href = '/login'
}

function goToCart() {
  window.location.href = '/cart'
}
</script>
