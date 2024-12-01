import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import { ref } from 'vue'
import store from '@/store'

export const getAllCollections = async (source = 'default') => {
  const collections = ref([])
  const q = query(collection(db, 'collections'))
  try {
    const querySnapshot = await getDocs(q, { source })
    collections.value = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    store.dispatch(
      'setCollections',
      collections.value.map((collection) => {
        return { id: collection.id, name: collection.name, description: collection.description }
      }),
    )
    return collections.value
  } catch (error) {
    console.error('Error fetching collections:', error)
    throw error
  }
}
