<template>
  <Header />
  <Navigation />
  <RouterView />
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { RouterView } from 'vue-router'

import { getAllCollections, getProductsByCollection } from '@/composables/product/index.js'

import Header from './components/Header/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from '@/components/Footer.vue'

const store = useStore()
const collections = ref()
const products = ref([])

onMounted(async () => {
  collections.value = await getAllCollections()
  store.dispatch('setCollections', collections.value)

  for (const collection of collections.value) {
    const productsByCollection = await getProductsByCollection(collection.id)
    products.value.push({
      ...productsByCollection,
      collectionId: collection.id,
    })
  }
  store.dispatch('setProducts', products.value)
})
</script>

<style scoped></style>
