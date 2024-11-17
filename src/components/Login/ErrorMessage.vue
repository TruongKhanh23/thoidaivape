<template>
  <p v-if="message" class="text-red-500">
    {{ message }}
  </p>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: '',
  },
})
</script>
