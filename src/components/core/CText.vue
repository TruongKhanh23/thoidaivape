<template>
  <component :is="as" :class="variantClasses" v-bind="$attrs" class="text-center">
    <slot />
  </component>
</template>

<script>
import variants from '@/setup/variants/CText/index.js'

export default {
  inheritAttrs: false,
  name: 'CText',
  props: {
    variant: {
      type: String,
      default: 'default',
    },
    as: {
      type: String,
      default: 'p',
    },
  },

  computed: {
    // Lấy các lớp class từ variant
    variantCls() {
      // Kiểm tra nếu variant có trong variants, nếu không dùng mặc định
      const variant = variants[this.variant] || variants.default
      return variant?.el || {} // Trả về các class của variant
    },

    // Tạo các lớp class dựa trên các thuộc tính của variant
    variantClasses() {
      return Object.values(this.variantCls)
        .map((value) => {
          // Áp dụng logic đặc biệt cho các thuộc tính cần xử lý đặc biệt
          if (value === 'italic') {
            return 'italic'
          }
          return value || '' // Trả về giá trị hoặc một chuỗi rỗng nếu không có giá trị
        })
        .join(' ') // Kết hợp tất cả class vào một chuỗi
        .trim() // Loại bỏ các khoảng trắng thừa
    },
  },
}
</script>

<style scoped>
/* Các styles tùy chỉnh cho component nếu cần */
</style>
