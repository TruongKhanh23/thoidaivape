<template>
  <div
    class="bg-white rounded-lg shadow-lg cursor-pointer text-center"
    @click="goToProductDetails(product.id)"
  >
    <!-- Hình sản phẩm -->
    <div
      :style="{ background: product.image || getRandomGradient() }"
      class="h-40 sm:h-60 w-full rounded-t-lg mb-4 flex items-center justify-center text-white text-xl font-bold text-center px-4"
    >
      <span v-if="!product.image">{{ product.name }}</span>
    </div>

    <div class="p-4 pt-0">
      <!-- Tên sản phẩm -->
      <h3 class="text-sm sm:text-lg font-semibold line-clamp-3 min-h-[3rem] sm:min-h-[3.5rem]">
        {{ product.name }}
      </h3>

      <div class="text-xs md:text-lg">
        <p class="text-gray-500 mb-2 line-clamp-2 min-h-[1.5rem]">
          {{ product.description }}
        </p>

        <div class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2 items-center justify-end sm:justify-center text-center px-4 md:px-0 min-h-[2.5rem]">
          <p
            :class="
              product.discountedPrice ? 'text-gray-400 line-through' : 'font-bold text-[#F13D55]'
            "
          >
            {{ formatCurrency(product.price) }}
          </p>
          <p v-if="product.discountedPrice" class="font-bold text-[#F13D55]">
            {{ formatCurrency(product.discountedPrice) }}
          </p>
        </div>

        <p class="text-gray-500 mt-2">Đã bán: {{ product.sold }}</p>
      </div>
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
