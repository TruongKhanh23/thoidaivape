<template>
    <div class="flex flex-col lg:flex-row gap-4 w-full mx-auto">
      <!-- Cột 1 (Banner ULTRA SALE) chiếm 50% chiều rộng -->
      <BannerItem
        :image="banners[0].image"
        altText="Banner 1"
        text="ULTRA SALE"
        bgClass="bg-gradient-to-r from-orange-400 to-yellow-500 w-full lg:w-1/2 text-white"
        @click="navigateToProducts('ultra-sale')"
      />
  
      <!-- Cột 2 (Chứa Banner 2 và Banner 3) chiếm 50% chiều rộng -->
      <div class="flex flex-col gap-4 w-full lg:w-1/2">
        <div class="flex gap-4 w-full">
          <!-- Banner item 2 -->
          <BannerItem
            :image="banners[1].image"
            altText="Banner 2"
            text="12.12"
            bgClass="bg-white w-1/2 shadow-lg text-orange-400 border-2"
            @click="navigateToProducts('12.12')"
          />
  
          <!-- Banner item 3 -->
          <BannerItem
            :image="banners[2].image"
            altText="Banner 3"
            text="CHỈ CÓ TẠI<br />THỜI ĐẠI VAPE"
            bgClass="bg-gradient-to-r from-orange-400 to-yellow-500 w-1/2 text-white"
            @click="navigateToProducts('chi-co-tai-thoidaivape')"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import BannerItem from './BannerItem.vue'
  
  const router = useRouter()
  
  const banners = [
    { image: '' }, // image URL cho banner 1 nếu có
    { image: '' }, // image URL cho banner 2 nếu có
    { image: '' }, // image URL cho banner 3 nếu có
  ]
  
  function navigateToProducts(id) {
    router.push({ name: 'products', params: { id: id } }).then(() => {
      window.scrollTo(0, 0)
    })
  }
  </script>
  
  <style scoped>
  /* Không sử dụng CSS thuần - Tailwind CSS sẽ quản lý toàn bộ style */
  </style>
  