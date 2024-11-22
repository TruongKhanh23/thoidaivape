<template>
  <div class="space-y-2 relative">
    <CText variant="label" class="!text-left">Mật khẩu</CText>
    <div class="relative">
      <input
        :type="showPassword ? 'text' : 'password'"
        name="password"
        id="password"
        :value="modelValue"
        @input="updateValue($event.target.value)"
        placeholder="Nhập mật khẩu của bạn"
        class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
        required
      />
      <button
        v-if="modelValue"
        type="button"
        @click="togglePasswordVisibility"
        class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 focus:outline-none"
      >
        <font-awesome-icon
          :icon="showPassword ? 'eye' : 'eye-slash'"
          class="text-lg"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons' // Import icon bars và times
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faEye, faEyeSlash)

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}

const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>
