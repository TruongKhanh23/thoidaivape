<template>
  <div
    class="flex flex-col sm:flex-row sm:space-y-0 space-y-2 justify-between items-center p-4 bg-gray-100 rounded-lg"
  >
    <CText as="span" variant="body-2">Tổng sản phẩm: {{ totalProducts }}</CText>
    <div class="flex flex-row items-center space-x-2">
      <CText variant="body-1">Sắp xếp theo:</CText>
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
