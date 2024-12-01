<template>
  <div class="space-y-2">
    <p class="text-sm font-medium">Tags:</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="px-4 py-2 bg-green-500 text-white rounded-full text-sm"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tags'],
}
</script>
