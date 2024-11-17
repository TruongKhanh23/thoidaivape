<template>
  <div class="flex justify-center items-center mt-4 space-x-2">
    <button
      @click="changePage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-3 py-1 border rounded-md"
    >
      Trước
    </button>
    <span class="text-sm"> Trang {{ currentPage }} / {{ totalPages }} </span>
    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-1 border rounded-md"
    >
      Sau
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    },
  },
  methods: {
    changePage(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.$emit('changePage', newPage)
      }
    },
  },
}
</script>
