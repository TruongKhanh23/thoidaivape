<template>
  <div class="flex items-start space-x-2">
    <div class="flex items-center h-5">
      <input
        id="remember"
        type="checkbox"
        :checked="modelValue"
        @change="updateValue($event.target.checked)"
        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 cursor-pointer"
      />
    </div>
    <CText variant="label">Lưu mật khẩu</CText>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>
