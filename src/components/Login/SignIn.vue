<template>
    <div
      class="w-full max-w-md p-6 md:border rounded-3xl sm:shadow"
    >
      <LoginForm @action:openResetPasswordModal="handleOpenResetPasswordModal" />
      <SignInWithGoogle />
      <div class="text-sm font-medium text-center py-2 text-blue-700">
        Chưa có tài khoản?
      </div>
      <button
        class="w-full border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
        @click="$emit('action:updateLoginType', 'register')"
      >
        Đăng ký
      </button>
    </div>
    <ResetPasswordModal
      :isShow="showResetPasswordModal"
      @action:closeModal="handleCloseResetPasswordModal"
    />
  </template>
  
  <script setup>
  import { ref, defineEmits } from "vue";
  import LoginForm from "@/components/Login/LoginForm.vue";
  import SignInWithGoogle from "@/components/Login/SignInWithGoogle.vue";
  import ResetPasswordModal from "@/components/Login/ResetPasswordModal.vue";
  
  const emit = defineEmits(["action:updateLoginType"])
  
  const showResetPasswordModal = ref(false);
  
  const handleCloseResetPasswordModal = () => {
    showResetPasswordModal.value = false;
  };
  const handleOpenResetPasswordModal = () => {
    showResetPasswordModal.value = true;
  };
  </script>
  