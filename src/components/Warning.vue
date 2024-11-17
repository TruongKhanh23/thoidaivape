<template>
  <div class="mx-auto my-4 p-4 pt-8 pb-12 bg-white border border-gray-300 rounded-lg shadow-lg">
    <!-- Tiêu đề cảnh báo -->
    <div class="flex items-center justify-center mb-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-[#e88a36] mr-2"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12 2a10 10 0 110 20 10 10 0 010-20zm-.25 5.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zm.25 8.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
          clip-rule="evenodd"
        />
      </svg>
      <p class="text-xl font-bold text-[#e88a36] uppercase">Cảnh báo</p>
    </div>

    <!-- Nội dung cảnh báo -->
    <div class="text-gray-800 text-sm space-y-4 text-center">
      <p v-for="(warning, index) in warnings" :key="index">
        <span class="font-semibold text-[#e88a36]">Cảnh báo:</span> {{ warning }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Warning',
  data() {
    return {
      warnings: [
        'Thuốc lá điện tử là sản phẩm dành cho người trưởng thành (18+). Nghiêm cấm người dưới 18 tuổi sử dụng dưới mọi hình thức.',
        'Thuốc lá điện tử có thể chứa nicotine. Nicotine khi sử dụng với hàm lượng cao có thể gây ngộ độc và có tính gây nghiện. Không được uống trực tiếp nicotine và tránh cho nicotine tiếp xúc với da và mắt. Phụ nữ không nên sử dụng khi đang có thai và cho con bú. Lưu ý tránh xa tầm tay trẻ em và động vật.',
        'Việc sử dụng những sản phẩm chứa nicotine có thể khiến những bệnh liên quan đến đường hô hấp và tim mạch nặng hơn. Ngoài ra, khi uống phải nicotine có thể gây nên hiện tượng tăng nhịp tim, huyết áp và gây choáng, buồn nôn, kích ứng dạ dày. Nếu một trong những điều này xảy ra bạn cần liên hệ với chuyên viên y tế ngay.',
        'Nếu bạn không phải là người sử dụng nicotine thường xuyên, chúng tôi không khuyến khích bạn bắt đầu sử dụng thuốc lá điện tử.',
      ],
    }
  },
}
</script>

<style scoped>
/* Không sử dụng CSS thuần - Tailwind CSS sẽ quản lý toàn bộ style */
</style>
