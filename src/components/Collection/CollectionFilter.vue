<template>
  <div class="space-y-4 p-4 border rounded-lg bg-gray-50">
    <div class="flex justify-between items-center" @click="toggleFilter">
      <span class="font-bold">BỘ LỌC SẢN PHẨM</span>
      <font-awesome-icon :icon="['fas', isOpen ? 'angle-up' : 'angle-down']" />
    </div>

    <div v-if="isOpen" class="space-y-4">
      <!-- Brand Filter -->
      <div v-if="filters.brand" class="filter-section">
        <h3 class="text-sm font-semibold mb-2">Thương hiệu</h3>
        <div>
          <label
            v-for="brand in filters.brand"
            :key="brand"
            class="flex items-center space-x-2 w-fit"
          >
            <input type="checkbox" :value="brand" v-model="selected.brand" class="checkbox" />
            <span>{{ brand }}</span>
          </label>
        </div>
      </div>

      <!-- Price Filter -->
      <div v-if="filters.price" class="filter-section">
        <h3 class="text-sm font-semibold mb-2">Giá</h3>
        <div>
          <label v-for="price in filters.price" :key="price" class="flex items-center space-x-2">
            <input type="checkbox" :value="price" v-model="selected.price" class="checkbox" />
            <span>{{ price }}</span>
          </label>
        </div>
      </div>

      <!-- Apply Filters Button -->
      <button
        @click="applyFilters"
        class="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
      >
        Áp dụng bộ lọc
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'CollectionFilter',
  components: { FontAwesomeIcon },
  props: {
    filters: {
      type: Object,
      required: true,
    },
    selectedFilters: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: JSON.parse(JSON.stringify(this.selectedFilters)), // Clone selectedFilters
    }
  },
  methods: {
    applyFilters() {
      this.$emit('applyFilters', this.selected)
    },
  },
  setup() {
    const isMobile = ref(window.innerWidth < 1024)
    const isOpen = ref(isMobile.value ? false : true)
    const toggleFilter = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      toggleFilter,
    }
  },
}
</script>

<style scoped>
.checkbox {
  accent-color: #2563eb; /* Tailwind Blue 500 */
}
</style>
