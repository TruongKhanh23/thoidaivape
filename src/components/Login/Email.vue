<template>
  <div>
    <label for="email" class="block mb-2 text-sm font-medium">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      :value="modelValue"
      @input="updateValue($event.target.value)"
      class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="name@company.com"
      required
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>
