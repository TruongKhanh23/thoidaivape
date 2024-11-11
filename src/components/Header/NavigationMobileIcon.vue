<template>
  <NavigationMobile :isOpen="isNavOpen" @close="closeNavigation" />
  <!-- Search và icon navigation cho mobile -->
  <button @click="toggleNavigation" class="p-2 text-xl sm:hidden">
    <font-awesome-icon :icon="isNavOpen ? 'times' : 'bars'" />
  </button>
</template>
<script setup>
import { ref } from 'vue'
import NavigationMobile from './NavigationMobile.vue'

const isNavOpen = ref(false)

function toggleNavigation() {
  console.log('click')

  isNavOpen.value = !isNavOpen.value // Toggle navigation modal visibility
}

function closeNavigation() {
  isNavOpen.value = false // Close the modal
}
</script>
