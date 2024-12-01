<template>
  <ul class="space-y-4">
    <li v-for="(policy, index) in policies" :key="index" class="flex items-center space-x-2">
      <font-awesome-icon :icon="policy.icon" class="text-lg text-gray-500" />
      <p class="text-sm">{{ policy.text }}</p>
    </li>
  </ul>
</template>

<script>
import { faBox } from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {
      policies: [
        { icon: 'box', text: 'Cam kết 100% chính hãng...' },
        { icon: 'box', text: 'Miễn phí giao hàng...' },
        { icon: 'box', text: 'Hỗ trợ qua hotline...' },
        { icon: 'box', text: 'Bảo hành 30 ngày...' },
        { icon: 'box', text: 'Giảm vĩnh viễn 3%...' },
      ],
    }
  },
}
</script>
