<template>
  <div class="flex space-x-4">
    <button
      @click="addToCart"
      class="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-md flex items-center space-x-2"
    >
      <font-awesome-icon icon="cart-shopping" />
      <span>Thêm vào giỏ</span>
    </button>
    <button
      class="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-md flex items-center space-x-2"
    >
      <font-awesome-icon icon="check" />
      <span>Mua ngay</span>
    </button>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)

export default {
  methods: {
    addToCart() {
      this.$emit('addToCart')
    },
  },
}
</script>
