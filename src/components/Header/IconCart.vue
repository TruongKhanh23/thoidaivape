<template>
  <div class="relative">
    <!-- Icon cart -->
    <font-awesome-icon icon="shopping-cart" class="text-xl p-2 pt-3" />

    <!-- Vòng tròn đỏ với số lượng sản phẩm -->
    <div
      v-if="cartCount > 0"
      class="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2"
    >
      {{ cartCount }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cartCount = ref(5) // Giả sử có 5 sản phẩm trong giỏ hàng. Thực tế, bạn có thể lấy giá trị này từ store hoặc API.
</script>

<style scoped>
/* Đảm bảo rằng vòng tròn đỏ đè lên icon cart */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 8px; /* Điều chỉnh để vòng tròn xuất hiện trên góc trên bên phải của icon */
  right: 9px; /* Điều chỉnh để vòng tròn nằm ra ngoài bên phải icon */
  width: 16px; /* Đặt kích thước vòng tròn */
  height: 16px; /* Đặt kích thước vòng tròn */
  background-color: red;
  color: white;
  font-size: 10px; /* Kích thước chữ nhỏ cho số lượng */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(50%, -50%); /* Đẩy vòng tròn qua phải và lên trên một chút */
}
</style>
