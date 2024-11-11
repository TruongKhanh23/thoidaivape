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
import NotFound from '../views/NotFound.vue' // Import component cho trang 404

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/gioi-thieu',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/dang-nhap',
      name: 'login',
      component: Login,
    },
    {
      path: '/gio-hang',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/san-pham',
      name: 'products',
      component: Products,
    },
    {
      path: '/chinh-sach-doi-san-pham',
      name: 'productExchangePolicy',
      component: ProductExchangePolicy,
    },
    {
      path: '/chi-tiet-san-pham/:id',
      name: 'productDetails',
      component: ProductDetails,
      props: true,
    },
    {
      path: '/chinh-sach-bao-mat',
      name: 'privacyPolicy',
      component: PrivacyPolicy,
    },
    {
      path: '/chinh-sach-thanh-toan',
      name: 'paymentPolicy',
      component: PaymentPolicy,
    },
    {
      path: '/thanh-toan',
      name: 'payment',
      component: Payment,
    },
    {
      path: '/chi-tiet-tin-tuc/:id',
      name: 'newsDetails',
      component: NewsDetails,
      props: true,
    },
    {
      path: '/tin-tuc',
      name: 'news',
      component: News,
    },
    {
      path: '/lien-he',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/huong-dan-mua-hang',
      name: 'buyGuideline',
      component: BuyGuideline,
    },
    {
      path: '/:catchAll(.*)', // Bắt mọi đường dẫn không khớp
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
