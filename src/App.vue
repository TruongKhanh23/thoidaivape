<template>
  <Header />
  <Navigation />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { RouterView } from 'vue-router'

import { getAllCollections } from '@/composables/product/index.js'

import Header from './components/Header/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from '@/components/Footer.vue'

const store = useStore()
const collections = ref()

onMounted(async () => {
  collections.value = await getAllCollections()
  store.dispatch('setCollections', collections.value)
})
</script>

<style scoped></style>
