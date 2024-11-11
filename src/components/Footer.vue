<template>
  <div class="footer bg-white text-black py-10 px-4">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full md:w-full lg:w-[70%]"
    >
      <!-- Cột Logo -->
      <div class="flex justify-center sm:justify-start items-start mb-6 md:mb-0">
        <img
          src="/img/logo_white.jfif"
          alt="Logo"
          class="h-32 cursor-pointer"
          @click="navigateToHomePage"
        />
      </div>

      <!-- Cột Chính sách -->
      <div class="flex flex-col justify-center items-center sm:items-start space-y-2 mb-6 md:mb-0">
        <a
          v-for="link in policyLinks"
          :key="link.text"
          @click="navigateTo(link.path)"
          class="font-semibold"
        >
          <span class="cursor-pointer hover:text-[#87d068] transition-colors">{{ link.text }}</span>
        </a>
      </div>

      <!-- Cột Công ty -->
      <div
        class="flex flex-col items-center sm:items-start space-y-2 mb-6 md:mb-0 border-y-2 sm:border-none py-6 sm:py-0"
      >
        <a
          v-for="link in companyLinks"
          :key="link.text"
          @click="navigateTo(link.path)"
          class="font-semibold"
        >
          <span class="cursor-pointer hover:text-[#87d068] transition-colors">{{ link.text }}</span>
        </a>
      </div>

      <!-- Cột Đăng ký nhận thông tin -->
      <div class="flex flex-col items-end">
        <h3 class="font-semibold uppercase mb-2">Nhận tin giảm giá sớm nhất</h3>
        <p class="mb-4">Để lại thông tin</p>
        <div class="flex items-center border-b-2 border-black py-1 w-full mb-4">
          <input
            type="email"
            placeholder="Email của bạn"
            class="flex-1 bg-transparent focus:outline-none text-black placeholder-black"
          />
          <font-awesome-icon :icon="['fas', 'envelope']" class="ml-2 text-black text-xl" />
        </div>
        <div class="flex gap-6 justify-end">
          <a href="#" class="text-2xl hover:text-[#87d068] text-black">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a href="#" class="text-2xl hover:text-[#87d068] text-black">
            <font-awesome-icon :icon="['fab', 'tiktok']" />
          </a>
          <a href="#" class="text-2xl hover:text-[#87d068] text-black">
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Thêm các icon vào thư viện FontAwesome
library.add(faFacebook, faTiktok, faWhatsapp, faEnvelope)

const router = useRouter()

// Các đối tượng chứa các mục liên kết
const policyLinks = [
  { text: 'Chính sách bảo hành', path: '/chinh-sach-bao-hanh' },
  { text: 'Chính sách đổi sản phẩm', path: '/chinh-sach-doi-san-pham' },
  { text: 'Chính sách thanh toán', path: '/chinh-sach-thanh-toan' },
  { text: 'Chính sách vận chuyển', path: '/chinh-sach-van-chuyen' },
  { text: 'Chính sách bảo mật', path: '/chinh-sach-bao-mat' },
  { text: 'Điều khoản dịch vụ', path: '/dieu-khoan-dich-vu' },
]

const companyLinks = [
  { text: 'Cửa hàng', path: '/cua-hang' },
  { text: 'Về chúng tôi', path: '/gioi-thieu' },
  { text: 'Liên hệ', path: '/lien-he' },
  { text: 'Hướng dẫn mua hàng', path: '/huong-dan-mua-hang' },
]

const navigateTo = (path) => {
  router.push(path).then(() => {
    window.scrollTo(0, 0) // Scroll to the top after navigating
  })
}

const navigateToHomePage = () => {
  router.push('/').then(() => {
    window.scrollTo(0, 0) // Scroll to the top after navigating to home
  })
}
</script>

<style scoped>
@media (max-width: 640px) {
  .footer {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
</style>
