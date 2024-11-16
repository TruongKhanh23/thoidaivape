<template>
  <button :class="buttonClasses" @click="handleClick">
    <slot v-if="$slots.default"></slot>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

// Props để truyền vào component
const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // Biến thể mặc định
  },
  text: {
    type: String,
    default: '', // Dùng khi không truyền slot
  },
})

// Emits sự kiện click
const emit = defineEmits(['click'])

// Các đối tượng nhỏ cho màu sắc và border
// Các đối tượng nhỏ cho màu sắc và border
const backgroundColors = {
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
  success: 'bg-green-500',
  danger: 'bg-red-500',
  white: 'bg-white',
}

const textColors = {
  primary: 'text-white',
  secondary: 'text-white',
  success: 'text-white',
  danger: 'text-white',
  white: 'text-black',
}

const borders = {
  primary: 'border border-blue-500',
  secondary: 'border border-gray-500',
  success: 'border border-green-500',
  danger: 'border border-red-500',
  white: 'border border-gray-300',
}

const hoverEffects = {
  primary: 'hover:bg-white hover:text-blue-500',
  secondary: 'hover:bg-white hover:text-gray-500',
  success: 'hover:bg-white hover:text-green-500',
  danger: 'hover:bg-white hover:text-red-500',
  white: 'hover:bg-gray-100 hover:text-black',
}

const defaultClasses = 'py-3 px-4 rounded-lg font-semibold transition-colors duration-300 w-full'

// Tính toán class cuối cùng
const buttonClasses = computed(() => {
  const bgClass = backgroundColors[props.variant] || backgroundColors.primary
  const textClass = textColors[props.variant] || textColors.primary
  const borderClass = borders[props.variant] || borders.primary
  const hoverClass = hoverEffects[props.variant] || hoverEffects.primary

  return `${defaultClasses} ${bgClass} ${textClass} ${borderClass} ${hoverClass}`
})

// Hàm xử lý khi click
function handleClick(event) {
  emit('click', event)
}
</script>

<style scoped>
/* Thêm các CSS scoped nếu cần */
</style>
