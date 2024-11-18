<template>
  <div class="grid grid-rows-2 gap-4 w-full">
    <div class="grid grid-cols-3 gap-4">
      <!-- Hàng đầu tiên -->
      <div
        v-for="(collection, index) in collections.slice(0, 2)"
        :key="collection.name"
        :class="index === 0 ? 'col-span-2' : 'col-span-1'"
        class="rounded-lg overflow-hidden cursor-pointer"
        @click="goToCollection(collection.name)"
      >
        <div
          v-if="collection.image"
          :style="{ backgroundImage: `url(${collection.image})` }"
          class="bg-cover bg-center h-40 sm:h-60 flex items-center justify-center text-white text-xl md:text-4xl font-bold"
        >
          <span class="bg-black bg-opacity-50 p-2 rounded uppercase">{{ collection.name }}</span>
        </div>
        <div
          v-else
          :style="{ background: getRandomGradient() }"
          class="h-40 sm:h-60 flex items-center justify-center text-white text-xl md:text-4xl font-bold"
        >
          <span class="bg-opacity-50 p-2 rounded uppercase">{{ collection.name }}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <!-- Hàng thứ hai -->
      <div
        v-for="(collection, index) in collections.slice(2, 4)"
        :key="collection.name"
        :class="index === 0 ? 'col-span-1' : 'col-span-2'"
        class="rounded-lg overflow-hidden cursor-pointer"
        @click="goToCollection(collection.name)"
      >
        <div
          v-if="collection.image"
          :style="{ backgroundImage: `url(${collection.image})` }"
          class="bg-cover bg-center h-40 sm:h-60 flex items-center justify-center text-white text-xl md:text-4xl font-bold"
        >
          <span class="bg-opacity-50 p-2 rounded uppercase">{{ collection.name }}</span>
        </div>
        <div
          v-else
          :style="{ background: getRandomGradient() }"
          class="h-40 sm:h-60 flex items-center justify-center text-white text-xl md:text-4xl font-bold"
        >
          <span class="bg-opacity-50 p-2 rounded uppercase">{{ collection.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'ProductCollections',
  setup() {
    const router = useRouter()

    const collections = ref([
      { name: 'Freebase', image: '' },
      { name: 'Pod Mod', image: '' },
      { name: 'All - In - One', image: '' },
      { name: 'Pod 1 lần', image: '' },
    ])

    const gradients = [
      'linear-gradient(135deg, #2c3e50 0%, #4b79a1 100%)',
      'linear-gradient(135deg, #232526 0%, #414345 100%)',
      'linear-gradient(135deg, #3a3d40 0%, #181818 100%)',
      'linear-gradient(135deg, #0f2027 0%, #203a43 100%)',
    ]

    const getRandomGradient = () => {
      return gradients[Math.floor(Math.random() * gradients.length)]
    }

    const goToCollection = (name) => {
      router.push({ name: 'collection', params: { id: name } }).then(() => {
        window.scrollTo(0, 0)
      })
    }

    return {
      collections,
      getRandomGradient,
      goToCollection,
    }
  },
}
</script>

<style scoped>
/* Tailwind CSS được dùng toàn bộ, không cần CSS tùy chỉnh thêm */
</style>
