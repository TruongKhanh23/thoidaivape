<template>
  <div class="fixed top-0 left-0 w-full bg-white z-50 py-2">
    <!-- Vùng nhập nội dung tìm kiếm với hiệu ứng trượt xuống -->
    <div class="flex items-center bg-white p-3 rounded-md border-b border-gray-300 shadow-md">
      <button @click="handleSearch" class="text-black mx-2">
        <font-awesome-icon icon="search" />
      </button>
      <input
        v-model="searchText"
        @keyup.enter="handleSearch"
        placeholder="Tìm kiếm sản phẩm"
        class="bg-transparent outline-none text-black placeholder-gray-400 w-full px-3 py-2"
      />
      <!-- Icon đóng -->
      <button @click="closeSearch" class="mx-2 text-black">
        <font-awesome-icon icon="times" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

// Định nghĩa sự kiện emit
const emit = defineEmits()

const searchText = ref('')

// Hàm thực hiện tìm kiếm
function handleSearch() {
  console.log(searchText.value)
}

// Hàm đóng tìm kiếm, sẽ gọi hàm `closeSearch` từ `Header.vue`
function closeSearch() {
  emit('closeSearch')
}
</script>
