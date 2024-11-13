<template>
  <div class="flex flex-col lg:flex-row space-y-2 space-l-2 lg:space-y-0 lg:space-x-4 w-full">
    <!-- Cột A - TikTok và Instagram -->
    <div class="lg:w-1/2 flex flex-row gap-2 sm:gap-4">
      <SocialNetworkItem
        v-for="network in networksA"
        :key="network.name"
        :data="network"
        class="w-full lg:w-1/2"
      />
    </div>

    <!-- Cột B - Facebook -->
    <div class="lg:w-1/2 w-full">
      <SocialNetworkItem :data="networksB[0]" />
    </div>
  </div>
</template>

<script setup>
import SocialNetworkItem from './SocialNetworkItem.vue'

const networksA = [
  {
    name: 'TIKTOK',
    image: '',
    path: 'https://www.tiktok.com/@vapethoidai',
  },
  {
    name: 'INSTAGRAM',
    image: '',
    path: 'https://www.instagram.com/thoidaivape_coffee/',
  },
]

const networksB = [
  {
    name: 'FACEBOOK',
    image: '',
    path: 'https://www.facebook.com/p/Th%E1%BB%9Di-%C4%90%E1%BA%A1i-%F0%9D%90%95%F0%9D%9F%92%F0%9D%90%A9%F0%9D%90%9E-%F0%9D%90%82%F0%9D%90%A8%F0%9D%90%9F%F0%9D%90%9F%F0%9D%90%9E%F0%9D%90%9E-61558601394024/?_rdr',
  },
]
</script>

<style scoped>
/* Thiết lập chiều rộng và kiểu hiển thị */
@media (min-width: 1024px) {
  .flex-row {
    display: flex;
    flex-direction: row;
  }
}

@media (max-width: 1024px) {
  .flex-col {
    display: flex;
    flex-direction: column;
  }
}
</style>
