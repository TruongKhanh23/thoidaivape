<template>
  <CLayout>
    <div class="flex justify-center bg-[#EAEBED] min-h-screen pt-2 pb-4">
      <p>Products: {{ productId }}</p>
    </div>
  </CLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const productId = computed(() => route.params.id)
</script>
