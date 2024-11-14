<template>
  <div class="w-full max-w-md p-6 md:border rounded-3xl sm:shadow">
    <form class="space-y-6" @submit.prevent="register">
      <div class="flex flex-col items-center justify-center">
        <h5 class="text-xl font-medium !text-center">
          ĐĂNG KÝ <br />
          THỜI ĐẠI VAPE
        </h5>
      </div>

      <div>
        <label for="email" class="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@company.com"
          v-model="email"
          required
        />
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium">Mật khẩu</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          v-model="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Đăng ký
      </button>
    </form>
    <div class="mt-4 space-y-2">
      <p class="text-center">hoặc đăng nhập nhanh bằng</p>
      <button
        type="button"
        class="w-full border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center"
        @click="signInWithGoogle"
      >
        <div class="flex flex-row items-center justify-center">
          <img src="/google.svg" alt="Google logo" class="mr-2" /> Google
        </div>
      </button>
      <div class="text-sm text-center font-medium text-blue-700 dark:text-blue-500">
        Đã có tài khoản?
      </div>
      <button
        class="w-full border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
        @click="$emit('action:updateLoginType', 'signIn')"
      >
        Đăng nhập
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['action:updateLoginType'])

const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log(auth.currentUser)
      router.push('/').then(() => {
        window.scrollTo(0, 0) // Scroll to the top after navigating to home
      })
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
}

const signInWithGoogle = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      store.dispatch('setUser', result.user)
      router.push('/').then(() => {
        window.scrollTo(0, 0) // Scroll to the top after navigating to home
      })
    })
    .catch((error) => {
      console.error('Error during Google sign-in:', error)
      alert(error.message)
    })
}
</script>

<style scoped></style>
