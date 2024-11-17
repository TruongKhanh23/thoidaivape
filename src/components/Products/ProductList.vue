<template>
  <div class="w-full min-h-[50vh]">
    <p v-if="isHomePage" class="text-center font-bold uppercase mb-8 text-2xl">{{ title }}</p>
    <div class="grid gap-4 grid-cols-3 sm:grid-cols-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :formatCurrency="formatCurrency"
        :getRandomGradient="getRandomGradient"
      />
    </div>

    <!-- Nút Xem Thêm -->
    <div v-if="isHomePage" class="text-center mt-8">
      <button
        @click="goToProductsPage(title)"
        class="bg-[#797a7d] text-white py-2 px-6 rounded hover:bg-black"
      >
        Xem thêm
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ProductCard from './ProductCard.vue'
import { dummyProducts } from '@/assets/dummy/products.js'

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    products: {
      type: Array,
      default: dummyProducts,
    },
    isHomePage: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const router = useRouter()
    const isMobile = ref(window.innerWidth < 1024)

    const gradients = [
      'linear-gradient(135deg, #2e2e2e 0%, #4f4f4f 100%)', // Xám đậm sang xám nhạt
      'linear-gradient(135deg, #1f1f1f 0%, #3a3a3a 100%)', // Đen sang xám đen
      'linear-gradient(135deg, #121212 0%, #2b2b2b 100%)', // Đen thuần sang xám tối
      'linear-gradient(135deg, #1c1c1c 0%, #272727 100%)', // Đen mờ sang xám
      'linear-gradient(135deg, #232526 0%, #414345 100%)', // Xanh đen nhạt sang đen xám
      'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', // Xanh đen đậm sang xanh đen tối
      'linear-gradient(135deg, #0f0f0f 0%, #333333 100%)', // Đen thuần sang xám đậm
      'linear-gradient(135deg, #191919 0%, #383838 100%)', // Xám đậm sang xám tối
    ]

    const products = computed(() => {
      const result = props.products ?? dummyProducts
      return props.isHomePage ? result.slice(0, 6) : result
    })

    const getRandomGradient = () => {
      return gradients[Math.floor(Math.random() * gradients.length)]
    }

    const goToProductsPage = (id) => {
      router.push({ name: 'collection', params: { id } }).then(() => {
        window.scrollTo(0, 0) // Scroll to the top after navigating to home
      })
    }

    const formatCurrency = (amount) => {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(amount)
    }

    return {
      products,
      getRandomGradient,
      goToProductsPage,
      formatCurrency,
    }
  },
}
</script>

<style scoped>
/* Tailwind CSS sẽ quản lý toàn bộ style, không cần CSS tùy chỉnh thêm */
</style>
