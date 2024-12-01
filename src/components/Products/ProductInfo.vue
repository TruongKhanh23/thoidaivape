<template>
  <div class="space-y-2">
    <h1 class="text-xl font-bold">{{ name }}</h1>
    <p class="text-sm text-gray-500">Mã sản phẩm: {{ code }}</p>
    <div class="flex items-center space-x-2">
      <span v-if="salePrice" class="text-red-500 text-lg font-semibold">{{ salePrice }}đ</span>
      <span v-if="salePrice" class="line-through text-gray-500">{{ price }}đ</span>
      <span v-else class="text-red-500 text-lg font-semibold">{{ price }}đ</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    code: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    salePrice: {
      type: Number,
      default: 0,
    },
  },
}
</script>
