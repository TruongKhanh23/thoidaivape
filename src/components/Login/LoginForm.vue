<template>
  <form class="space-y-6" @submit.prevent="login">
    <div class="flex flex-col items-center justify-center">
      <h5 class="text-xl font-medium !text-center">
        ĐĂNG NHẬP <br />
        THỜI ĐẠI VAPE
      </h5>
    </div>
    <EmailInput v-model="email" />
    <PasswordInput v-model="password" />
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <div class="flex items-start">
      <RememberMeCheckbox v-model="rememberMe" />
      <ForgotPasswordLink @click="$emit('action:openResetPasswordModal', true)" />
    </div>
    <button
      type="submit"
      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
    >
      Đăng nhập
    </button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

import EmailInput from '@/components/Login/EmailInput.vue'
import PasswordInput from '@/components/Login/PasswordInput.vue'
import RememberMeCheckbox from '@/components/Login/RememberMeCheckbox.vue'
import ForgotPasswordLink from '@/components/Login/ForgotPasswordLink.vue'

const emit = defineEmits(['action:openResetPasswordModal'])

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const errorMessage = ref('')
</script>
