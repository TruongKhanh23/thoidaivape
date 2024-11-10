<template>
  <Header />
  <Navigation />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
import Navigation from './components/Navigation.vue'
</script>

<style scoped></style>
