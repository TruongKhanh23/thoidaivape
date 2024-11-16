<template>
  <p v-if="message" :class="errorClass">
    {{ message }}
  </p>
</template>

<script setup>
import { computed } from 'vue'

// Props để nhận message và tùy chỉnh class
defineProps({
  message: {
    type: String,
    default: '',
  },
  additionalClasses: {
    type: String,
    default: '',
  },
})

// Class mặc định kèm theo class bổ sung
const errorClass = computed(() => `text-red-500 ${additionalClasses}`)
</script>
