<template>
  <div class="flex flex-col space-y-2 w-full max-w-md p-6 md:border rounded-3xl sm:shadow bg-white">
    <LoginForm @action:openResetPasswordModal="handleOpenResetPasswordModal" />
    <CText variant="body-1" class="!text-blue-700">Chưa có tài khoản?</CText>
    <CButton @click="$emit('action:updateLoginType', 'register')" variant="white">Đăng ký</CButton>
  </div>
  <ResetPasswordModal
    :isShow="showResetPasswordModal"
    @action:closeModal="handleCloseResetPasswordModal"
  />
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import LoginForm from '@/components/Login/LoginForm.vue'
import ResetPasswordModal from '@/components/Login/ResetPasswordModal.vue'

const emit = defineEmits(['action:updateLoginType'])

const showResetPasswordModal = ref(false)

const handleCloseResetPasswordModal = () => {
  showResetPasswordModal.value = false
}
const handleOpenResetPasswordModal = () => {
  console.log('went SignIn.vue handleOpenResetPasswordModal')

  showResetPasswordModal.value = true
}
</script>
