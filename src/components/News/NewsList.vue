<template>
  <div class="py-4">
    <p class="text-center font-bold uppercase mb-8 text-2xl">TIN TỨC NỔI BẬT</p>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <NewsCard v-for="item in newsList" :key="item.id" :news="item" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NewsCard from './NewsCard.vue'

const isMobile = ref(window.innerWidth < 1024)
const newsList = ref([
  {
    id: 1,
    image: '',
    title: 'Lợi ích và rủi ro của thuốc lá điện tử: Điều cần biết',
    date: '2024-11-11',
    views: 1234,
  },
  {
    id: 2,
    image: '',
    title: 'Các hương vị thuốc lá điện tử phổ biến nhất hiện nay',
    date: '2024-11-10',
    views: 567,
  },
  {
    id: 3,
    image: '',
    title: 'Thuốc lá điện tử và sức khỏe: Những nghiên cứu mới nhất',
    date: '2024-11-09',
    views: 890,
  },
  {
    id: 4,
    image: '',
    title: 'Cách chọn thiết bị thuốc lá điện tử phù hợp cho người mới',
    date: '2024-11-08',
    views: 112,
  },
  {
    id: 5,
    image: '',
    title: 'Thị trường thuốc lá điện tử Việt Nam năm 2024',
    date: '2024-11-07',
    views: 245,
  },
  {
    id: 6,
    image: '',
    title: 'Những sai lầm thường gặp khi sử dụng thuốc lá điện tử',
    date: '2024-11-06',
    views: 678,
  },
  {
    id: 7,
    image: '',
    title: 'Thuốc lá điện tử và giới trẻ: Các xu hướng mới nổi',
    date: '2024-11-05',
    views: 789,
  },
  {
    id: 8,
    image: '',
    title: 'Tìm hiểu về thuốc lá điện tử và cách thức hoạt động',
    date: '2024-11-04',
    views: 432,
  },
])
newsList.value = isMobile ? newsList.value.slice(0, 6) : newsList.value
</script>
