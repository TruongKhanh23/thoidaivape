<template>
  <Slider :list="images" :attrs="{ perPage: 1 }">
    <template #content="{ data }">
      <img :src="data" class="rounded-xl cursor-pointer h-[90vw] w-screen md:h-full md:w-auto" />
    </template>
  </Slider>
</template>

<script setup>
import Slider from '@/components/reusable/Slider.vue'
import { defineProps } from 'vue'
defineProps({
  images: {
    type: Array,
    default: [],
    required: true,
  },
})
</script>
