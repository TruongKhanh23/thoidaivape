<template>
    <div class="flex flex-wrap lg:flex-nowrap gap-4 mx-auto w-full">
      <!-- Banner item 1 -->
      <div
        class="flex items-center justify-center rounded-lg w-full lg:w-1/2 h-48 bg-gradient-to-r from-orange-400 to-yellow-500"
        @click="navigateToProducts"
      >
        <template v-if="banners[0].image">
          <img
            :src="banners[0].image"
            alt="Banner 1"
            class="object-cover w-full h-full rounded-lg"
          />
        </template>
        <template v-else>
          <div class="flex items-center justify-center w-full h-full text-white font-bold text-2xl">
            ULTRA SALE
          </div>
        </template>
      </div>
  
      <!-- Banner item 2 -->
      <div
        class="flex items-center justify-center rounded-lg shadow-lg  w-full lg:w-1/4 h-48 bg-white"
        @click="navigateToProducts"
      >
        <template v-if="banners[1].image">
          <img
            :src="banners[1].image"
            alt="Banner 2"
            class="object-cover w-full h-full rounded-lg"
          />
        </template>
        <template v-else>
          <div class="flex items-center justify-center w-full h-full text-gray-800 font-bold text-2xl">
            12.12
          </div>
        </template>
      </div>
  
      <!-- Banner item 3 -->
      <div
        class="flex items-center justify-center rounded-lg w-full lg:w-1/4 h-48 bg-gradient-to-r from-orange-400 to-yellow-500"
        @click="navigateToProducts"
      >
        <template v-if="banners[2].image">
          <img
            :src="banners[2].image"
            alt="Banner 3"
            class="object-cover w-full h-full rounded-lg"
          />
        </template>
        <template v-else>
          <div class="flex items-center justify-center w-full h-full text-white font-bold text-2xl text-center">
            CHỈ CÓ TẠI <br />THỜI ĐẠI VAPE
          </div>
        </template>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Banner",
    data() {
      return {
        banners: [
          { image: "" }, // image URL cho banner 1 nếu có
          { image: "" }, // image URL cho banner 2 nếu có
          { image: "" } // image URL cho banner 3 nếu có
        ]
      };
    },
    methods: {
      navigateToProducts() {
        this.$router.push({ name: "products" });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Không sử dụng CSS thuần - Tailwind CSS sẽ quản lý toàn bộ style */
  </style>
  