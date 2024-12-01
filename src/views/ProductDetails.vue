<template>
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Cột 1: ProductImages -->
    <ProductImages :images="product.images" />

    <!-- Cột 2: Các thành phần khác -->
    <div>
      <ProductInfo
        :name="product.name"
        :code="product.code"
        :price="product.price"
        :salePrice="product.salePrice"
      />
      <ProductInput :variants="variants" :defaultAmount="1" @updateInput="handleInputUpdate" />
      <ProductButtons @addToCart="handleAddToCart" />
      <ProductTags :tags="product.tags" />
      <ProductPolicy />
    </div>

    <!-- Hàng 2: ProductDescription -->
    <div class="col-span-2">
      <ProductDescription :description="product.description" />
    </div>
  </div>
</template>

<script setup>
import ProductImages from '@/components/Products/ProductImages.vue'
import ProductInfo from '@/components/Products/ProductInfo.vue'
import ProductInput from '@/components/Products/ProductInput.vue'
import ProductButtons from '@/components/Products/ProductButtons.vue'
import ProductTags from '@/components/Products/ProductTags.vue'
import ProductPolicy from '@/components/Products/ProductPolicy.vue'
import ProductDescription from '@/components/Products/ProductDescription.vue'
import { getProductById } from '@/composables/product'
import { useRoute } from 'vue-router'
import { computed, ref, watch, onMounted } from 'vue'

const route = useRoute()
const productId = computed(() => route.params.id)
const product = ref({})

watch(productId, async () => {
  product.value = await getProductById(productId.value)
})

onMounted(async () => {
  product.value = await getProductById(productId.value)
})

const variants = ['Màu đỏ', 'Màu xanh', 'Màu đen']

function handleInputUpdate(data) {
  console.log('Updated Input:', data)
}
function handleAddToCart(product) {
  console.log('Add to Cart:', product)
}
</script>
