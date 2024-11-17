<template>
  <div class="text-center mx-auto my-4 p-4 pt-8 pb-12 bg-white border border-gray-300 rounded-lg">
    <h1 class="text-3xl font-bold uppercase">{{ collectionInfo.title }}</h1>
    <p v-if="!isMobile" class="mt-4 text-gray-600">
      {{ collectionInfo.description }}
    </p>
    <div v-else class="mt-4 text-gray-600">
      <p :class="{ 'line-clamp-3': !showFull }">
        {{ collectionInfo.description }}
      </p>
      <button
        v-if="collectionInfo.description?.length > 150"
        @click="toggleShowFull"
        class="text-blue-500 mt-2"
      >
        {{ showFull ? 'Thu gọn' : 'Xem thêm' }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CollectionInformation',
  props: {
    collectionInfo: {
      type: Object,
      required: () => {},
    },
  },
  setup() {
    const isMobile = ref(window.innerWidth < 768)
    const showFull = ref(false)

    const toggleShowFull = () => {
      showFull.value = !showFull.value
    }

    return {
      isMobile,
      showFull,
      toggleShowFull,
    }
  },
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
