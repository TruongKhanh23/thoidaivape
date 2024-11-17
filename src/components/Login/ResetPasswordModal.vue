<template>
  <div v-if="isShow" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-[90%]">
      <form @submit.prevent="resetPassword">
        <div class="space-y-2">
          <CText variant="title-secondary">Khôi phục mật khẩu</CText>
          <div>
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
          <div class="font-semibold">
            <p v-if="resetPasswordMessage" class="text-blue-500">
              {{ resetPasswordMessage }}
            </p>
            <p v-if="resetPasswordError" class="text-red-500">
              {{ resetPasswordError }}
            </p>
          </div>

          <div class="flex justify-end space-x-2">
            <CButton variant="white" class="!w-fit" @click="$emit('action:closeModal', false)"
              >Hủy</CButton
            >
            <CButton type="submit" class="!w-fit">Gửi email khôi phục</CButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

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

const resetPassword = async () => {
  const auth = getAuth()
  try {
    await sendPasswordResetEmail(auth, resetEmail.value)
    resetPasswordMessage.value = 'Email khôi phục mật khẩu đã được gửi tới địa chỉ email của bạn!'
    resetPasswordError.value = ''
  } catch (error) {
    console.error('Có lỗi trong quá trình gửi email khôi phục!', error)
    resetPasswordError.value = 'Có lỗi trong quá trình gửi email khôi phục! Vui lòng thử lại sau.'
    resetPasswordMessage.value = ''
  }
}
</script>
