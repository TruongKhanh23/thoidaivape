<template>
  <div
    class="bg-white rounded-lg shadow-lg cursor-pointer text-center"
    @click="goToProductDetails(product.id)"
  >
    <!-- Hình sản phẩm -->
    <div
      :style="{ background: product.thumbnail || getRandomGradient() }"
      class="h-40 sm:h-60 w-full rounded-t-lg mb-4 flex items-center justify-center text-white text-xl font-bold text-center px-4"
    >
      <span v-if="!product.thumbnail">{{ product.name }}</span>
      <img else :src="product.thumbnail" alt="thumbnail" />
    </div>

    <div class="p-4 pt-0 text-xs sm:text-base">
      <!-- Tên sản phẩm -->
      <h3
        class="uppercasebase font-semibold min-h-[3rem] sm:min-h-[3.5rem] line-clamp-3 mb-2 sm:mb-0"
      >
        {{ product.name }}
      </h3>

      <p class="text-gray-500 mb-2 line-clamp-2 min-h-[1.5rem] sm:min-h-[3rem]">
        {{ product.description }}
      </p>

      <div
        class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2 items-center justify-end sm:justify-center text-center px-4 md:px-0 min-h-[2.5rem] sm:min-h-[2rem]"
      >
        <p :class="product.salePrice ? 'text-gray-400 line-through' : 'font-bold text-[#F13D55]'">
          {{ formatCurrency(product.price) }}
        </p>
        <p v-if="product.salePrice" class="font-bold text-[#F13D55]">
          {{ formatCurrency(product.salePrice) }}
        </p>
      </div>

      <p class="text-gray-500 mt-2">Đã bán: {{ product.soldAmount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
    formatCurrency: {
      type: Function,
      required: true,
    },
    getRandomGradient: {
      type: Function,
      required: true,
    },
  },
  methods: {
    goToProductDetails(id) {
      this.$router.push({ name: 'productDetails', params: { id } }).then(() => {
        window.scrollTo(0, 0) // Scroll to the top after navigating to home
      })
    },
  },
}
</script>

<style scoped>
/* Tailwind CSS sẽ quản lý toàn bộ style, không cần CSS tùy chỉnh thêm */
</style>
