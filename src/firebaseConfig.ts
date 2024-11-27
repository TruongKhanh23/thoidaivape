import { initializeApp } from 'firebase/app'
import {
  initializeFirestore,
  persistentLocalCache,
  enableIndexedDbPersistence,
} from 'firebase/firestore'
import urlHostToConfigsMap from './urlHostToConfigsMap'

type FirebaseConfig = {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
  measurementId: string
}

const currentDomain: string = window.location.hostname

// Lấy cấu hình từ file đã tạo
const firebaseConfig: FirebaseConfig =
  urlHostToConfigsMap[currentDomain] || urlHostToConfigsMap['localhost'] // Mặc định cho localhost nếu không khớp

// Khởi tạo Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Cấu hình Firestore với bộ nhớ đệm
const db = initializeFirestore(firebaseApp, {
  cache: persistentLocalCache({
    cacheSizeBytes: 10 * 1024 * 1024, // 10MB Cache
  }),
})

// Bật chế độ persistence (IndexedDB)
enableIndexedDbPersistence(db)
  .then(() => {
    console.log('Persistence enabled successfully')
  })
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.error('Multiple tabs open, persistence can only be enabled in one tab.')
    } else if (err.code === 'unimplemented') {
      console.error('The current browser does not support all features required for persistence.')
    }
  })

// Xuất app và config
export { firebaseApp, db, firebaseConfig }
