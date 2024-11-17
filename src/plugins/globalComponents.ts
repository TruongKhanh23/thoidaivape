// src/plugins/global-components.ts
import type { App } from 'vue'
import CLayout from '../components/core/CLayout.vue'
import CButton from '../components/core/CButton.vue'
import CText from '../components/core/CText.vue'

export default {
  install(app: App) {
    app.component('CLayout', CLayout)
    app.component('CButton', CButton)
    app.component('CText', CText)
    // Đăng ký thêm các component khác tại đây nếu cần
  },
}
