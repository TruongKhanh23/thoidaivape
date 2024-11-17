<template>
  <CLayout>
    <div class="flex justify-center min-h-screen">
      <div
        class="flex flex-col items-center justify-center space-y-4 w-[100%] md:w-[100%] lg:w-[60%] px-2"
      >
        <Slider />
        <ProductList :isHomePage="true" :title="'Ultra Sale'" />
        <ProductCollections />
        <ProductList :isHomePage="true" :title="'Pod 1 lần'" />
        <ProductList :isHomePage="true" :title="'Tinh dầu Salt Nicotine'" />
        <Banner />
        <ProductList :isHomePage="true" :title="'Pod Mod'" />
        <SocialNetworks />
        <NewsList />
        <Warning />
      </div>
    </div>
  </CLayout>
</template>

<script setup>
import Banner from '@/components/Banner/Banner.vue'
import NewsList from '@/components/News/NewsList.vue'
import ProductCollections from '@/components/Products/ProductCollections.vue'
import ProductList from '@/components/Products/ProductList.vue'
import Slider from '@/components/Slider.vue'
import SocialNetworks from '@/components/SocialNetwork/SocialNetworks.vue'
import Warning from '@/components/Warning.vue'
</script>
