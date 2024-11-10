<template>
  <footer class="bg-white text-black py-10">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[100%] md:w-[100%] lg:w-[70%]"
    >
      <!-- Cột Logo -->
      <div class="flex justify-start items-start">
        <img src="/img/logo_white.jfif" alt="Logo" class="h-32" />
      </div>
      <!-- Cột Chính sách -->
      <div class="flex flex-col space-y-2">
        <a
          v-for="link in policyLinks"
          :key="link.text"
          @click="navigateTo(link.path)"
          class="font-semibold hover:text-[#87d068] transition-colors cursor-pointer"
        >
          {{ link.text }}
        </a>
      </div>
      <!-- Cột Công ty -->
      <div class="flex flex-col space-y-2">
        <a
          v-for="link in companyLinks"
          :key="link.text"
          @click="navigateTo(link.path)"
          class="font-semibold hover:text-[#87d068] transition-colors"
        >
          {{ link.text }}
        </a>
      </div>
      <!-- Cột Đăng ký nhận thông tin -->
      <div class="flex flex-col items-end">
        <h3 class="font-semibold uppercase">Nhận tin giảm giá sớm nhất</h3>
        <p>Để lại thông tin</p>
        <div class="flex items-center border-b-2 border-black py-1 w-full mt-4">
          <input
            type="email"
            placeholder="Email của bạn"
            class="flex-1 bg-transparent focus:outline-none text-black placeholder-black"
          />
          <font-awesome-icon :icon="['fas', 'envelope']" class="ml-2 text-black text-xl" />
        </div>
        <div class="flex gap-6 justify-end mt-4">
          <a href="#" class="text-2xl hover:text-[#87d068] text-black"
            ><font-awesome-icon :icon="['fab', 'facebook']"
          /></a>
          <a href="#" class="text-2xl hover:text-[#87d068] text-black"
            ><font-awesome-icon :icon="['fab', 'tiktok']"
          /></a>
          <a href="#" class="text-2xl hover:text-[#87d068] text-black"
            ><font-awesome-icon :icon="['fab', 'whatsapp']"
          /></a>
        </div>
      </div>
    </div>
  </footer>
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
  { text: 'Cửa hàng', path: '/' },
  { text: 'Về chúng tôi', path: '/gioi-thieu' },
  { text: 'Liên hệ', path: '/lien-he' },
  { text: 'Hướng dẫn mua hàng', path: '/huong-dan-mua-hang' },
]

const navigateTo = (path) => {
  router.push(path)
}
</script>
