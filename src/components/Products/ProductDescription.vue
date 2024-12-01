<template>
  <div class="space-y-4">
    <h2 class="text-lg font-bold text-center border-b-2 pb-2">MÔ TẢ SẢN PHẨM</h2>
    <div v-html="visibleDescription" class="max-w-3xl mx-auto text-gray-700"></div>
    <button
      v-if="!showFullDescription"
      @click="showFullDescription = true"
      class="border px-4 py-2 rounded-md mx-auto block w-full"
    >
      Xem thêm nội dung +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showFullDescription: false,
    }
  },
  computed: {
    visibleDescription() {
      return this.showFullDescription ? this.description : this.description.slice(0, 300) + '...'
    },
  },
}
</script>
