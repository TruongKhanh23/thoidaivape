<template>
  <div class="flex justify-center items-center space-x-2">
    <!-- Previous button -->
    <button
      @click="changePage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-3 py-1 border rounded-md cursor-pointer bg-white"
    >
      Trước
    </button>

    <!-- Page numbers -->
    <div class="flex items-center space-x-1">
      <button
        v-for="page in pageNumbers"
        :key="page"
        @click="changePage(page)"
        :class="{
          '!bg-black text-white': currentPage === page,
          'px-3 py-1 border rounded-md bg-white': true,
        }"
      >
        {{ page }}
      </button>
    </div>

    <!-- Next button -->
    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-1 border rounded-md cursor-pointer bg-white"
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
    pageNumbers() {
      const pageNumbers = []
      const maxPageNumbers = 5 // Max number of page links to show

      let startPage = Math.max(1, this.currentPage - Math.floor(maxPageNumbers / 2))
      let endPage = Math.min(this.totalPages, startPage + maxPageNumbers - 1)

      // Adjust if there are fewer pages
      if (endPage - startPage + 1 < maxPageNumbers) {
        startPage = Math.max(1, endPage - maxPageNumbers + 1)
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }
      return pageNumbers
    },
  },
  methods: {
    changePage(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.$emit('changePage', newPage)
        window.scrollTo(0, 0)
      }
    },
  },
}
</script>
