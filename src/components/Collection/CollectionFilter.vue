<template>
  <div class="space-y-4 p-4 border rounded-lg bg-gray-50">
    <div class="flex justify-between items-center" @click="toggleFilter">
      <CText variant="subtitle">BỘ LỌC SẢN PHẨM</CText>
      <font-awesome-icon :icon="['fas', isOpen ? 'angle-up' : 'angle-down']" />
    </div>

    <div v-if="isOpen" class="space-y-4">
      <div
        v-for="(options, filterKey) in filters"
        :key="filterKey"
        class="filter-section space-y-2"
      >
        <CText variant="body-1" class="!text-left">{{ getFilterDisplayName(filterKey) }}</CText>
        <div>
          <label
            v-for="option in options"
            :key="option"
            class="flex items-center space-x-2 w-fit cursor-pointer"
          >
            <input
              type="checkbox"
              :value="option"
              v-model="selected[filterKey]"
              @change="emitFilters"
              class="checkbox"
            />
            <CText as="span">{{ option }}</CText>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { filterNames } from '@/assets/dummy/collection.js'

/** Props */
const props = defineProps({
  filters: {
    type: Object,
    required: true,
  },
  selectedFilters: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['applyFilters'])

const selected = ref(JSON.parse(JSON.stringify(props.selectedFilters)))

const isMobile = ref(window.innerWidth < 1024)
const isOpen = ref(isMobile.value ? false : true)

const toggleFilter = () => {
  isOpen.value = !isOpen.value
}

const emitFilters = () => {
  emit('applyFilters', selected.value)
}

const getFilterDisplayName = (key) => {
  return filterNames[key] || key
}
</script>

<style scoped>
.checkbox {
  accent-color: #2563eb; /* Tailwind Blue 500 */
}
</style>
