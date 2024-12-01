<template>
  <div class="max-w-[80%] text-justify">
    <ul class="space-y-4">
      <li v-for="(policy, index) in policies" :key="index" class="flex items-center space-x-2">
        <font-awesome-icon :icon="policy.icon" class="text-lg text-gray-500" />
        <p class="text-sm">{{ policy.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBox } from '@fortawesome/free-solid-svg-icons'

library.add(faBox)

export default {
  data() {
    return {
      policies: [
        {
          icon: 'box',
          text: 'Cam kết 100% chính hãng. Hoàn tiền nếu phát hiện hàng giả, hàng nhái.',
        },
        {
          icon: 'box',
          text: 'Miễn phí giao hàng cho hoá đơn trên 1.000.000đ cấn trừ trực tiếp trên hoá đơn.',
        },
        {
          icon: 'box',
          text: 'Hỗ trợ qua hotline 0901321588 hoặc có thể ghé thăm cửa hàng để nhận hỗ trợ trực tiếp.',
        },
        {
          icon: 'box',
          text: 'Bảo hành 30 ngày với các loại máy Vape Kit, Pod System, sạc và 24h đối với các loại Pod dùng 1 lần.',
        },
        {
          icon: 'box',
          text: 'Giảm vĩnh viễn 3% cho khách hàng thân thiết Gold & 5% cho VIP Member. Liên hệ để biết thêm.',
        },
      ],
    }
  },
}
</script>
