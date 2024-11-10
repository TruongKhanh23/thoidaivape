import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/Products.vue'
import ProductExchangePolicy from '../views/ProductExchangePolicy.vue'
import ProductDetails from '../views/ProductDetails.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import PaymentPolicy from '../views/PaymentPolicy.vue'
import Payment from '../views/Payment.vue'
import NewsDetails from '../views/NewsDetails.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'
import BuyGuideline from '../views/BuyGuideline.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home', // 'name' giữ lại tiếng Anh
      component: HomeView,
    },
    {
      path: '/gioi-thieu', // 'path' bằng tiếng Việt
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/dang-nhap', // 'path' bằng tiếng Việt
      name: 'login',
      component: Login,
    },
    {
      path: '/gio-hang', // 'path' bằng tiếng Việt
      name: 'cart',
      component: Cart,
    },
    {
      path: '/san-pham', // 'path' bằng tiếng Việt
      name: 'products',
      component: Products,
    },
    {
      path: '/chinh-sach-doi-san-pham', // 'path' bằng tiếng Việt
      name: 'productExchangePolicy',
      component: ProductExchangePolicy,
    },
    {
      path: '/chi-tiet-san-pham/:id', // 'path' bằng tiếng Việt
      name: 'productDetails',
      component: ProductDetails,
      props: true, // Cho phép truyền ID sản phẩm qua URL
    },
    {
      path: '/chinh-sach-bao-mat', // 'path' bằng tiếng Việt
      name: 'privacyPolicy',
      component: PrivacyPolicy,
    },
    {
      path: '/chinh-sach-thanh-toan', // 'path' bằng tiếng Việt
      name: 'paymentPolicy',
      component: PaymentPolicy,
    },
    {
      path: '/thanh-toan', // 'path' bằng tiếng Việt
      name: 'payment',
      component: Payment,
    },
    {
      path: '/chi-tiet-tin-tuc/:id', // 'path' bằng tiếng Việt
      name: 'newsDetails',
      component: NewsDetails,
      props: true, // Cho phép truyền ID bài viết qua URL
    },
    {
      path: '/tin-tuc', // 'path' bằng tiếng Việt
      name: 'news',
      component: News,
    },
    {
      path: '/lien-he', // 'path' bằng tiếng Việt
      name: 'contact',
      component: Contact,
    },
    {
      path: '/huong-dan-mua-hang', // 'path' bằng tiếng Việt
      name: 'buyGuideline',
      component: BuyGuideline,
    },
  ],
})

export default router
