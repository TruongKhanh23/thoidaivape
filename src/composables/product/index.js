import { db } from '@/firebaseConfig'
import { doc, collection, query, where, getDocs, orderBy, getDoc } from 'firebase/firestore'

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

  // Tạo tham chiếu đến bộ sưu tập 'products' và thêm điều kiện where
  const productsCollection = collection(db, 'products-thumbnail')
  const q = query(
    productsCollection,
    where('collection.id', '==', collectionId), // Lọc theo collection.id
    orderBy('soldAmount', 'desc'), // Sắp xếp giảm dần theo soldAmount
  )

  try {
    // Thực hiện query từ nguồn xác định: "default", "cache", hoặc "server"
    const snapshot = await getDocs(q, { source })

    snapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() })
    })

    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

export const getProductById = async (id) => {
  console.log('id: ', id)

  try {
    const productDetailsDocRef = doc(db, 'product-details', id)
    const productDetailsDoc = await getDoc(productDetailsDocRef)

    if (productDetailsDoc.exists()) {
      return {
        id,
        ...productDetailsDoc.data(),
      }
    } else {
      throw new Error('Product not found')
    }
  } catch (error) {
    console.error('Error getting product:', error.message)
    throw error
  }
}
