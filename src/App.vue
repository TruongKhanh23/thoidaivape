<template>
  <Header />
  <Navigation />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped></style>
