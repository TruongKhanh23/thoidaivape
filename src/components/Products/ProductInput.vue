<template>
  <div class="space-y-4">
    <div class="flex space-x-2">
      <button
        v-for="variant in variants"
        :key="variant"
        @click="setVariant(variant)"
        class="px-4 py-2 border rounded-md hover:bg-gray-200"
      >
        {{ variant }}
      </button>
    </div>
    <div class="flex items-center space-x-2">
      <label for="amount" class="text-sm font-medium">Số lượng:</label>
      <input
        id="amount"
        type="number"
        v-model.number="amount"
        class="w-12 h-8 border rounded-md text-center"
        min="1"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['variants', 'defaultAmount'],
  data() {
    return {
      selectedVariant: null,
      amount: this.defaultAmount,
    }
  },
  methods: {
    setVariant(variant) {
      this.selectedVariant = variant
      this.$emit('updateInput', { variant: this.selectedVariant, amount: this.amount })
    },
  },
}
</script>
