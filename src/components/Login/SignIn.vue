<template>
    <div
      class="w-full max-w-md p-6 md:border rounded-3xl sm:shadow"
    >
      <LoginForm @action:openResetPasswordModal="handleOpenResetPasswordModal" />
      <SignInWithGoogle />
      <div class="text-sm font-medium">
        Chưa có tài khoản?
        <a
          @click="$emit('action:updateLoginType', 'register')"
          class="text-blue-700 hover:underline dark:text-blue-500 cursor-pointer"
          >Tạo tài khoản</a
        >
      </div>
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
  