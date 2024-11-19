import { db } from '@/firebaseConfig' // Import auth và Firestore từ Firebase config
import { doc, setDoc, getDoc } from 'firebase/firestore'

import store from '@/store'

export const handleAuthenticationSuccess = async (user, router) => {
  store.dispatch('setUser', user)
  store.dispatch('setIsLoggedIn', true)

  await createUser(user)

  router.push({ name: 'home' }).then(() => {
    window.scrollTo(0, 0)
  })
}

/**
 * Function để xử lý tạo hoặc đăng nhập user.
 * @param {Object} params - Các tham số.
 * @param {String} params.email - Email của người dùng.
 * @param {String} params.password - Mật khẩu (có thể null nếu sử dụng Google).
 * @param {Function} params.authMethod - Hàm đăng nhập (createUserWithEmailAndPassword, signInWithEmailAndPassword, hoặc signInWithPopup).
 * @param {Object} [params.provider] - GoogleAuthProvider (nếu dùng Google).
 * @returns {Promise<Object>} - Thông tin người dùng.
 */
export async function createUser(user) {
  console.log('user', user)

  try {
    // Kiểm tra nếu user đã tồn tại trong Firestore
    const userDocRef = doc(db, 'users', user.uid)
    const userDoc = await getDoc(userDocRef)

    if (userDoc.exists()) {
      console.log('User already exists:', user.uid)
      return userDoc.data()
    }

    // Nếu user chưa tồn tại, tạo mới
    const providerId = user.providerData[0]?.providerId.includes('google') ? 'Google' : 'Email'
    const userData = {
      userId: user.uid,
      fullName: user.displayName || '', // Google sẽ có displayName
      email: user.email,
      phoneNumber: user.phoneNumber || '',
      address: '', // Có thể cập nhật sau
      createdDate: new Date(), // Dùng ngày hiện tại thay vì serverTimestamp()
      modifiedDate: new Date(), // Dùng ngày hiện tại thay vì serverTimestamp()
      provider: providerId,
      additionalInfo: {}, // Các thông tin bổ sung (nếu có)
      role: "user"
    }

    // Lưu vào Firestore
    await setDoc(userDocRef, userData)

    console.log('User created successfully:', userData)
    return userData
  } catch (error) {
    console.error('Error creating user:', error.message)
    throw error
  }
}
