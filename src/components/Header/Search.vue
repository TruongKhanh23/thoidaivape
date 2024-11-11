<template>
  <div class="flex items-center">
    <!-- Tăng kích thước icon và màu sắc khi tìm kiếm -->
    <button @click="toggleSearch" class="p-2 text-xl">
      <font-awesome-icon :icon="isSearching ? 'times' : 'search'" />
    </button>
    <div
      v-if="isSearching"
      class="ml-2 flex items-center bg-[#F1F3F7] rounded-full px-3 w-[300px] md:w-[400px] lg:w-[400px]"
    >
      <!-- Vùng input mở rộng, nền trong suốt và font chữ sáng -->
      <input
        v-model="searchText"
        @keyup.enter="handleSearch"
        placeholder="Tìm kiếm sản phẩm"
        class="bg-transparent outline-none text-black placeholder-gray-400 w-full px-3 py-2"
      />
      <!-- Icon tìm kiếm -->
      <button @click="handleSearch" class="ml-2 text-black">
        <font-awesome-icon icon="search" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSearching = ref(false)
const searchText = ref('')

function toggleSearch() {
  isSearching.value = !isSearching.value
  if (!isSearching.value) searchText.value = ''
}

function handleSearch() {
  console.log(searchText.value)
}
</script>
