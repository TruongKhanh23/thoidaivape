<template>
  <div class="space-y-2">
    <h1 class="text-xl font-bold">{{ name }}</h1>
    <p class="text-sm text-gray-500">
      Mã sản phẩm: <span class="uppercase">{{ code }}</span>
    </p>
    <div class="flex items-center space-x-2">
      <span v-if="salePrice" class="text-red-500 text-lg font-semibold">{{
        formatCurrency(salePrice)
      }}</span>
      <span v-if="salePrice" class="line-through text-gray-500">{{ formatCurrency(price) }}</span>
      <span v-else class="text-red-500 text-lg font-semibold">{{ formatCurrency(price) }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { formatCurrency } from '../../utils/index.js'
defineProps({
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
})
</script>
