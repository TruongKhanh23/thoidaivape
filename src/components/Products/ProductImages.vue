<template>
  <div class="relative">
    <div class="overflow-hidden">
      <img :src="images[0]" class="w-full object-cover" />
    </div>
    <div class="flex justify-center mt-4 space-x-2">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        class="w-16 h-16 cursor-pointer border border-gray-300 rounded-md"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: [],
      required: true,
    },
  },
}
</script>
