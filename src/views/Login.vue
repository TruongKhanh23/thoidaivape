<template>
  <CLayout>
    <div class="flex items-center justify-center">
      <SignIn v-if="loginType === 'signIn'" @action:updateLoginType="handleUpdateLoginType" />
      <Register v-if="loginType === 'register'" @action:updateLoginType="handleUpdateLoginType" />
    </div>
  </CLayout>
</template>

<script setup>
import { ref } from 'vue'
import SignIn from '@/components/Login/SignIn.vue'
import Register from '@/components/Login/Register.vue'

const loginType = ref('signIn')
const handleUpdateLoginType = (newType) => {
  loginType.value = newType
}
</script>
