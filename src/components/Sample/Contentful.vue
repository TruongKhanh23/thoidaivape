<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-if="product">{{ product.fields.name }}</li>
      <li v-else>Loading...</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
import client from '@/contentfulConfig'

export default {
  name: 'Products',
  async setup() {
    const product = ref(null)

    const entries = await client.getEntries({
      content_type: 'product',
      limit: 100, // Số lượng entry mỗi trang
      skip: 0, // Bắt đầu từ entry đầu tiên
    })

    console.log('entries: ', entries)

    return { product }
  },
}
</script>

<style scoped>
/* Bạn có thể thêm các kiểu CSS tùy chỉnh ở đây */
</style>
