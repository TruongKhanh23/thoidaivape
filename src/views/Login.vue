<template>
  <div class="flex items-center justify-center py-4">
    <SignIn
      v-if="loginType === 'signIn'"
      @action:updateLoginType="handleUpdateLoginType"
    />
    <Register
      v-if="loginType === 'register'"
      @action:updateLoginType="handleUpdateLoginType"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SignIn from "@/components/Login/SignIn.vue";
import Register from "@/components/Login/Register.vue";

const loginType = ref("signIn");
const handleUpdateLoginType = (newType) => {
  loginType.value = newType;
};
</script>
