<template>
  <div class="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
    <span class="text-sm font-semibold">Tổng sản phẩm: {{ totalProducts }}</span>
    <select
      v-model="selectedSort"
      @change="sortProducts"
      class="text-sm px-4 py-2 border rounded-md focus:outline-none"
    >
      <option value="newest">Mới nhất</option>
      <option value="priceHighToLow">Giá cao đến thấp</option>
      <option value="priceLowToHigh">Giá thấp đến cao</option>
      <option value="alphabetical">A-Z</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    totalProducts: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      selectedSort: 'newest', // Default sorting option
    }
  },
  methods: {
    sortProducts() {
      this.$emit('sortProducts', this.selectedSort)
    },
  },
}
</script>
