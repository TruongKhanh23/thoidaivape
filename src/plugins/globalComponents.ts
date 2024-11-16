// src/plugins/global-components.ts
import type { App } from 'vue'
import CLayout from '../components/core/CLayout.vue'

export default {
  install(app: App) {
    app.component('CLayout', CLayout)
    // Đăng ký thêm các component khác tại đây nếu cần
  },
}
