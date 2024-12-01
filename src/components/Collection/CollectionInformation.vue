<template>
  <div class="text-center mx-auto px-4 py-8 bg-white border border-gray-300 rounded-lg space-y-4">
    <CText variant="title-3">{{ title }}</CText>
    <CText v-if="!isMobile" v-html="description"></CText>
    <div v-else class="space-y-4">
      <CText :class="{ 'line-clamp-3': !showFull }">{{ description }}</CText>
      <CText variant="btn" v-if="description?.length > 150" @click="toggleShowFull">
        {{ showFull ? 'Thu gọn' : 'Xem thêm' }}
      </CText>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CollectionInformation',
  props: {
    title: {
      type: String,
      required: '',
    },
    description: {
      type: String,
      required: '',
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
