import { db } from '@/firebaseConfig'
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore'

export async function getAllProducts() {
  const products = []

  // Sử dụng collection để lấy tham chiếu đến bộ sưu tập 'products'
  const productsCollection = collection(db, 'products')

  // Lấy danh sách tài liệu từ bộ sưu tập
  const snapshot = await getDocs(productsCollection)

  snapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data(), thumbnail: '', images: [] })
  })

  return products
}

/**
 * Lấy danh sách sản phẩm dựa trên collectionId
 * @param {string} collectionId - ID của collection cần lấy sản phẩm
 * @returns {Promise<Array>} - Danh sách sản phẩm phù hợp
 */
export async function getProductsByCollection(collectionId, source = 'default') {
  console.log('Fetching products for collectionId:', collectionId)

  const products = []

  // Tạo tham chiếu đến bộ sưu tập 'products' và 'product-thumbnail'
  const productsCollection = collection(db, 'products')
  const productThumbnailsCollection = collection(db, 'product-thumbnail')

  const q = query(
    productsCollection,
    where('collection.id', '==', collectionId), // Lọc theo collection.id
    orderBy('soldAmount', 'desc'), // Sắp xếp giảm dần theo soldAmount
  )
  const qThumbnails = query(productThumbnailsCollection, where('collectionId', '==', collectionId))

  try {
    // Thực hiện query từ Firestore
    const [productSnapshot, productThumbnailsSnapshot] = await Promise.all([
      getDocs(q, { source }),
      getDocs(qThumbnails, { source }),
    ])

    // Tạo Map từ product-thumbnail để tra cứu nhanh
    const productThumbnailsMap = new Map()
    productThumbnailsSnapshot.forEach((docSnap) => {
      productThumbnailsMap.set(docSnap.id, docSnap.data())
    })

    // Duyệt qua danh sách sản phẩm và kết hợp dữ liệu
    productSnapshot.forEach((docSnap) => {
      const productData = { id: docSnap.id, ...docSnap.data() }
      const productThumbnails = productThumbnailsMap.get(docSnap.id) || {} // Lấy dữ liệu từ Map, nếu không có thì là {}
      products.push({ ...productData, ...productThumbnails })
    })

    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
