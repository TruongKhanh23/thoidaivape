<template>
  <div class="space-y-4 p-4 border rounded-lg bg-gray-50">
    <div class="flex justify-between items-center" @click="toggleFilter">
      <CText variant="body-1">BỘ LỌC SẢN PHẨM</CText>
      <font-awesome-icon :icon="['fas', isOpen ? 'angle-up' : 'angle-down']" />
    </div>

    <div v-if="isOpen" class="space-y-4">
      <!-- Brand Filter -->
      <div v-if="filters.brand" class="filter-section space-y-2">
        <CText variant="label" class="!text-left">Thương hiệu</CText>
        <div>
          <label
            v-for="brand in filters.brand"
            :key="brand"
            class="flex items-center space-x-2 w-fit"
          >
            <input
              type="checkbox"
              :value="brand"
              v-model="selected.brand"
              @change="emitFilters"
              class="checkbox"
            />
            <span>{{ brand }}</span>
          </label>
        </div>
      </div>

      <!-- Price Filter -->
      <div v-if="filters.price" class="filter-section space-y-2">
        <CText variant="label" class="!text-left">Giá</CText>
        <div>
          <label v-for="price in filters.price" :key="price" class="flex items-center space-x-2">
            <input
              type="checkbox"
              :value="price"
              v-model="selected.price"
              @change="emitFilters"
              class="checkbox"
            />
            <span>{{ price }}</span>
          </label>
        </div>
      </div>
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
    emitFilters() {
      this.$emit('applyFilters', this.selected) // Emit ngay khi checkbox thay đổi
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
