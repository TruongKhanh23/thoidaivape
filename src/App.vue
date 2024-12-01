<template>
  <Header />
  <Navigation />
  <CLayout>
    <RouterView />
  </CLayout>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import Header from './components/Header/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import CLayout from './components/core/CLayout.vue'

import { getAllCollections } from './composables/collection'

onMounted(async () => {
  await getAllCollections()
})
</script>

<style scoped></style>
