<template>
  <div class="py-4">
    <p class="text-center font-bold uppercase mb-8 text-2xl">{{ title }}</p>
    <div class="grid gap-4 grid-cols-2 sm:grid-cols-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-lg cursor-pointer text-center"
        @click="goToProductDetails(product.id)"
      >
        <!-- Hình sản phẩm -->
        <div
          :style="{ background: product.image || getRandomGradient() }"
          class="h-40 sm:h-60 w-full rounded-t-lg mb-4 flex items-center justify-center text-white text-xl font-bold text-center"
        >
          <span v-if="!product.image">{{ product.name }}</span>
        </div>

        <div class="p-4 pt-0">
          <!-- Tên sản phẩm -->
          <h3 class="text-sm sm:text-lg font-semibold line-clamp-3 min-h-[3rem] sm:min-h-[3.5rem]">
            {{ product.name }}
          </h3>

          <div class="text-sm md:text-lg">
            <p class="text-gray-500 mb-2 truncate min-h-[1.5rem]">
              {{ product.description }}
            </p>

            <div class="flex flex-row space-x-2 items-center justify-center px-4 md:px-0">
              <p v-if="product.discountedPrice" class="font-bold text-[#F13D55]">
                {{ formatCurrency(product.discountedPrice) }}
              </p>

              <p
                :class="
                  product.discountedPrice
                    ? 'text-gray-400 line-through'
                    : 'font-bold text-[#F13D55]'
                "
              >
                {{ formatCurrency(product.price) }}
              </p>
            </div>

            <p class="text-gray-500 mt-2">Đã bán: {{ product.sold }}</p>
          </div>
        </div>
      </div>
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

export default {
  name: 'ProductList',
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
      'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
      'linear-gradient(135deg, #fcb69f 0%, #ffeb3b 100%)',
      'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
      'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
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

    products.value = isMobile ? products.value.slice(0, 4) : products.value

    const getRandomGradient = () => {
      return gradients[Math.floor(Math.random() * gradients.length)]
    }

    const goToProductDetails = (id) => {
      router.push({ name: 'productDetails', params: { id } }).then(() => {
        window.scrollTo(0, 0) // Scroll to the top after navigating to home
      })
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
      goToProductDetails,
      goToProductsPage,
      formatCurrency,
    }
  },
}
</script>

<style scoped>
/* Tailwind CSS sẽ quản lý toàn bộ style, không cần CSS tùy chỉnh thêm */
</style>
