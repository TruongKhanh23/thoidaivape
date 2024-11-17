<template>
  <CLayout>
    <div class="container mx-auto space-y-4 px-2 sm:px-0">
      <!-- Collection Information -->
      <CollectionInformation :title="productId" :description="collectionInfoDummy.description" />

      <div class="flex flex-col lg:flex-row gap-4">
        <!-- Sidebar Filters -->
        <div class="lg:w-1/4">
          <CollectionFilter
            :filters="filters"
            :selectedFilters="selectedFilters"
            @applyFilters="applyFilters"
          />
        </div>

        <!-- Main Content -->
        <div class="lg:w-3/4 space-y-4">
          <CollectionSort :totalProducts="filteredProducts.length" @sortProducts="sortProducts" />
          <ProductList :products="paginatedProducts" :title="productId" />
          <Pagination
            class="py-4"
            :totalItems="filteredProducts.length"
            :itemsPerPage="itemsPerPage"
            :currentPage="currentPage"
            @changePage="changePage"
          />
        </div>
      </div>
    </div>
  </CLayout>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import CollectionInformation from '@/components/Collection/CollectionInformation.vue'
import CollectionFilter from '@/components/Collection/CollectionFilter.vue'
import CollectionSort from '@/components/Collection/CollectionSort.vue'
import ProductList from '@/components/Products/ProductList.vue'
import Pagination from '@/components/Collection/Pagination.vue'

import { dummyProducts } from '@/assets/dummy/products.js'
import { collectionInfoDummy } from '@/assets/dummy/collection.js'

export default {
  name: 'Collection',
  components: {
    CollectionInformation,
    CollectionFilter,
    CollectionSort,
    ProductList,
    Pagination,
  },
  setup() {
    const route = useRoute()
    const productId = computed(() => route.params.id)
    const products = ref(dummyProducts)

    // Thông tin collection
    const collectionInfo = ref(collectionInfoDummy)

    // Bộ lọc sản phẩm
    const filters = ref({
      brand: ['Brand A', 'Brand B', 'Brand C'],
      price: ['Dưới 500K', '500K - 1M', 'Trên 1M'],
      hits: ['Dưới 100', '100 - 200', 'Trên 200'],
      power: ['Dưới 50W', '50W - 100W', 'Trên 100W'],
    })
    const selectedFilters = ref({
      brand: [],
      price: [],
      hits: [],
      power: [],
    })

    // Sorting
    const sortOption = ref('newest') // Default sort by "newest"

    // Pagination
    const itemsPerPage = ref(28)
    const currentPage = ref(1)

    // Computed: Filtered products
    const filteredProducts = computed(() => {
      const result = products.value.filter((product) => {
        // Brand filter
        if (
          selectedFilters.value.brand.length &&
          !selectedFilters.value.brand.includes(product.brand)
        ) {
          return false
        }

        // Price filter
        if (selectedFilters.value.price.length) {
          const priceRange = selectedFilters.value.price.find((range) => {
            if (range === 'Dưới 500K' && product.price < 500000) return true
            if (range === '500K - 1M' && product.price >= 500000 && product.price <= 1000000)
              return true
            if (range === 'Trên 1M' && product.price > 1000000) return true
            return false
          })
          if (!priceRange) return false
        }

        // Hits filter
        if (selectedFilters.value.hits.length) {
          const hitsRange = selectedFilters.value.hits.find((range) => {
            if (range === 'Dưới 100' && product.hits < 100) return true
            if (range === '100 - 200' && product.hits >= 100 && product.hits <= 200) return true
            if (range === 'Trên 200' && product.hits > 200) return true
            return false
          })
          if (!hitsRange) return false
        }

        // Power filter
        if (selectedFilters.value.power.length) {
          const powerRange = selectedFilters.value.power.find((range) => {
            if (range === 'Dưới 50W' && product.power < 50) return true
            if (range === '50W - 100W' && product.power >= 50 && product.power <= 100) return true
            if (range === 'Trên 100W' && product.power > 100) return true
            return false
          })
          if (!powerRange) return false
        }

        return true
      })
      console.log(result)
      return result
    })

    // Computed: Sorted products
    const sortedProducts = computed(() => {
      const sorted = [...filteredProducts.value]
      console.log('sorted', sorted)

      switch (sortOption.value) {
        case 'priceHighToLow':
          return sorted.sort((a, b) => b.price - a.price)
        case 'priceLowToHigh':
          return sorted.sort((a, b) => a.price - b.price)
        case 'alphabetical':
          return sorted.sort((a, b) => a.name.localeCompare(b.name))
        case 'newest':
        default:
          return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      }
    })

    // Các sản phẩm phân trang
    const paginatedProducts = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value
      const end = start + itemsPerPage.value
      return sortedProducts.value.slice(start, end)
    })

    const applyFilters = (newFilters) => {
      selectedFilters.value = newFilters
      currentPage.value = 1 // Đặt lại trang về trang đầu tiên
    }

    const sortProducts = (option) => {
      sortOption.value = option
    }

    const changePage = (page) => {
      currentPage.value = page
    }

    return {
      collectionInfoDummy,
      productId,
      collectionInfo,
      filters,
      selectedFilters,
      filteredProducts,
      paginatedProducts,
      itemsPerPage,
      currentPage,
      applyFilters,
      sortProducts,
      changePage,
    }
  },
}
</script>
