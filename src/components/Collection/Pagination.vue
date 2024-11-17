<template>
  <div class="flex justify-center items-center space-x-2">
    <!-- Previous button -->
    <CButton variant="white-fit" @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
      >Trước</CButton
    >

    <!-- Page numbers -->
    <div class="flex items-center space-x-1">
      <CButton
        v-for="page in pageNumbers"
        variant="white-fit"
        :class="{
          '!bg-black !text-white': currentPage === page,
          '': true,
        }"
        :key="page"
        @click="changePage(page)"
      >
        {{ page }}
      </CButton>
    </div>

    <!-- Next button -->
    <CButton
      variant="white-fit"
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-1 border rounded-md cursor-pointer bg-white"
    >
      Sau
    </CButton>
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
