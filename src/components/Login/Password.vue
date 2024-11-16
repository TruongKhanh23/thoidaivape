<template>
    <div>
      <label for="password" class="block mb-2 text-sm font-medium ">Mật khẩu</label>
      <input
        type="password"
        name="password"
        id="password"
        :value="modelValue"
        @input="updateValue($event.target.value)"
        placeholder="Nhập mật khẩu của bạn"
        class="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    modelValue: String,
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const updateValue = (value) => {
    emit('update:modelValue', value);
  };
  </script>
  