<template>
    <div
      class="flex items-center justify-center rounded-lg h-48 cursor-pointer"
      :class="bgClass"
      @click="onClick"
    >
      <template v-if="image">
        <img :src="image" :alt="altText" class="object-cover w-full h-full rounded-lg" />
      </template>
      <template v-else>
        <div class="flex items-center justify-center w-full h-full font-bold text-2xl text-center" v-html="text">
        </div>
      </template>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    image: String,
    altText: String,
    text: String,
    bgClass: String,
  })
  
  const emits = defineEmits(['click'])
  
  function onClick() {
    emits('click')
  }
  </script>
  
  <style scoped>
  /* CSS xử lý bởi Tailwind */
  </style>
  