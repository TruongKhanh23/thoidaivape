<template>
  <div v-if="isShow" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-[90%]">
      <h3 class="text-xl font-medium mb-4">Khôi phục mật khẩu</h3>
      <form>
        <div class="mb-4">
          <label for="resetEmail" class="block text-sm font-medium">Nhập email của bạn</label>
          <input
            type="email"
            id="resetEmail"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Ví dụ: thoidaivape.coffee@gmail.com"
            v-model="resetEmail"
            required
          />
        </div>
        <p v-if="resetPasswordMessage" class="text-green-500">
          {{ resetPasswordMessage }}
        </p>
        <p v-if="resetPasswordError" class="text-red-500">
          {{ resetPasswordError }}
        </p>
        <div class="flex justify-end">
          <button type="button" @click="$emit('action:closeModal', false)" class="mr-4">Hủy</button>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">
            Gửi email khôi phục
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['action:closeModal'])

const resetEmail = ref('')
const resetPasswordMessage = ref('')
const resetPasswordError = ref('')
</script>
