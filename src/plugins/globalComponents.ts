// src/plugins/global-components.ts
import type { App } from 'vue'
import CLayout from '../components/core/CLayout.vue'
import CButton from '../components/core/CButton.vue'
import CText from '../components/core/CText.vue'
import SkeletonLoader from '@/components/reusable/SkeletonLoader.vue'

export default {
  install(app: App) {
    app.component('CLayout', CLayout)
    app.component('CButton', CButton)
    app.component('CText', CText)
    app.component('SkeletonLoader', SkeletonLoader)
    // Đăng ký thêm các component khác tại đây nếu cần
  },
}
