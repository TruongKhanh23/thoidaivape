<template>
  <div class="py-4">
    <p class="text-center font-bold uppercase mb-8 text-2xl">{{ title }}</p>
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
    <div class="text-center mt-8">
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ProductCard from './ProductCard.vue'

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
  },
  setup() {
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

    const products = ref([
      {
        id: 1,
        name: 'Vape Kit Pro',
        description: 'Bộ sản phẩm Vape Kit chất lượng cao',
        price: 1000000,
        discountedPrice: 850000,
        sold: 120,
      },
      {
        id: 2,
        name: 'Pod System Alpha',
        description: 'Pod system nhỏ gọn, dễ mang theo',
        price: 750000,
        sold: 80,
      },
      {
        id: 3,
        name: 'Juice Vaping Hương Dâu',
        description: 'Tinh dầu hương dâu cho trải nghiệm tuyệt vời',
        price: 150000,
        discountedPrice: 120000,
        sold: 50,
      },
      {
        id: 4,
        name: 'Box Mod MaxPower',
        description: 'Thiết bị Box Mod công suất cao',
        price: 1800000,
        discountedPrice: 1500000,
        sold: 45,
      },
      {
        id: 5,
        name: 'Vape Pen Basic',
        description: 'Bút vape nhỏ gọn, tiện dụng',
        price: 500000,
        discountedPrice: 450000,
        sold: 70,
      },
      {
        id: 6,
        name: 'Juice Vaping Hương Táo',
        description: 'Tinh dầu hương táo cho trải nghiệm sảng khoái',
        price: 150000,
        discountedPrice: 130000,
        sold: 30,
      },
      {
        id: 7,
        name: 'Pod System Beta',
        description: 'Thiết kế hiện đại, dễ sử dụng',
        price: 800000,
        discountedPrice: 700000,
        sold: 90,
      },
      {
        id: 8,
        name: 'Box Mod SuperPro',
        description: 'Box Mod cao cấp cho người chuyên nghiệp',
        price: 2000000,
        discountedPrice: 1800000,
        sold: 40,
      },
    ])

    products.value = isMobile ? products.value.slice(0, 6) : products.value

    const getRandomGradient = () => {
      return gradients[Math.floor(Math.random() * gradients.length)]
    }

    const goToProductsPage = (id) => {
      router.push({ name: 'products', params: { id } }).then(() => {
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
