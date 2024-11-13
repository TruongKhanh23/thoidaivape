<template>
  <div class="flex justify-center min-h-screen pt-2 pb-4">
    <div
      class="flex flex-col items-center justify-center space-y-4 w-[100%] md:w-[100%] lg:w-[60%] px-2"
    >
      <Slider />
      <ProductList :title="'Ultra Sale'" />
      <ProductCollections />
      <ProductList :title="'Pod 1 lần'" />
      <ProductList :title="'Tinh dầu Salt Nicotine'" />
      <Banner />
      <ProductList :title="'Pod Mod'" />
      <p
        class="flex items-center justify-center min-h-[10vh] border border-[#000000] w-full rounded-lg"
      >
        Mạng xã hội
      </p>
      <NewsList />
      <Warning />
    </div>
  </div>
</template>

<script setup>
import Banner from '@/components/Banner/Banner.vue'
import NewsList from '@/components/News/NewsList.vue'
import ProductCollections from '@/components/Products/ProductCollections.vue'
import ProductList from '@/components/Products/ProductList.vue'
import Slider from '@/components/Slider.vue'
import VuexSample from '@/components/VuexSample.vue'
import Warning from '@/components/Warning.vue'
</script>
