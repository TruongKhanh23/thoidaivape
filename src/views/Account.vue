<template>
  <div class="p-6 w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md min-h-screen space-y-6">
    <!-- Tiêu đề -->
    <h1 class="text-2xl font-semibold text-center">Hồ sơ của tôi</h1>

    <!-- Avatar -->
    <div class="flex justify-center">
      <div
        class="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
      >
        <template v-if="user.avatar">
          <img :src="user.avatar" alt="Avatar" class="object-cover w-full h-full" />
        </template>
        <template v-else>
          <font-awesome-icon icon="user" class="text-gray-400 text-6xl" />
        </template>
      </div>
    </div>
    <SignOut />

    <!-- Thông tin tài khoản -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="col-span-2">
        <CText variant="body-1-left">Thông tin đăng nhập</CText>
      </div>
      <div class="col-span-2">
        <label class="block text-sm font-medium text-gray-700" for="email"
          >Email (tên đăng nhập)</label
        >
        <input
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          v-model="editableUser.email"
          disabled
        />
      </div>

      <div class="col-span-2">
        <CText variant="body-1-left">Thông tin mua hàng</CText>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="displayName">Tên</label>
        <input
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          v-model="editableUser.displayName"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="phoneNumber"
          >Số điện thoại</label
        >
        <input
          type="email"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          v-model="editableUser.phoneNumber"
        />
      </div>

      <div class="col-span-2">
        <label class="block text-sm font-medium text-gray-700" for="street"
          >Số nhà & tên đường</label
        >
        <input
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          v-model="address.street"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="province">Tỉnh/Thành</label>
        <select
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          v-model="address.province"
          @change="updateDistricts"
        >
          <option value="" disabled>Vui lòng chọn tỉnh/thành</option>
          <option v-for="province in provinces" :key="province.id" :value="province.id">
            {{ province.name }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="district">Quận/Huyện</label>
        <select
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          v-model="address.district"
        >
          <option value="" disabled>Vui lòng chọn quận/huyện</option>
          <option v-for="district in districts" :key="district.id" :value="district.id">
            {{ district.name }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700" for="district">Phường/Xã</label>
        <select
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          v-model="address.ward"
        >
          <option value="" disabled>Vui lòng chọn phường/xã</option>
          <option v-for="ward in wards" :key="ward.id" :value="ward.id">
            {{ ward.name }}
          </option>
        </select>
      </div>
    </div>
    <!-- Nút hành động -->
    <div class="flex justify-end space-x-4">
      <CButton variant="white" @click="resetChanges" :disabled="isSaving">Hủy</CButton>
      <CButton @click="saveChanges" :disabled="isSaving">
        <template v-if="isSaving">
          <svg
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </template>
        <template v-else> Lưu </template>
      </CButton>
    </div>
  </div>
</template>

<script setup>
import SignOut from '@/components/Login/SignOut.vue'
import { ref, reactive, watch, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { getProvinces, getDistrictsByProvince, getWardsByDistrict } from '@/utils/address'
import { getUserById, updateUser } from '@/composables/authentication/index.js'

const store = useStore()

// Dữ liệu người dùng
const user = computed(() => store.getters.getUser)
const editableUser = reactive({
  id: user.value.userId ?? user.value.uid,
  username: user.value.email,
  displayName: user.value.displayName,
  email: user.value.email,
  phoneNumber: user.value.phoneNumber,
  address: user.value.address,
})

onMounted(async () => {
  try {
    const userData = await getUserById(user.value.uid)  // Lấy thông tin người dùng từ Firestore
    // Gán thông tin trả về vào editableUser
    editableUser.displayName = userData.displayName || ''
    editableUser.email = userData.email || ''
    editableUser.phoneNumber = userData.phoneNumber || ''
    editableUser.address = userData.address || ''
    store.dispatch("setUser", userData)
    initializeAddress()
  } catch (error) {
    console.error('Error loading user data:', error.message)
  }
})

// Address data
const address = reactive({
  street: '',
  province: null,
  district: null,
  ward: null,
})

const provinces = ref([])
const districts = ref([])
const wards = ref([])

const isSaving = ref(false)
const isInitializing = ref(true)

const fetchProvinces = async () => {
  provinces.value = await getProvinces()
}

// Khởi tạo thông tin địa chỉ
const initializeAddress = async () => {
  isInitializing.value = true;

  try {
    await fetchProvinces();

    if (editableUser.address) {
      const [street, wardName, districtName, provinceName] = editableUser.address.split(', ');

      // Gán thông tin số nhà và tên đường
      address.street = street || '';

      // Tìm kiếm tỉnh/thành từ tên
      const province = provinces.value.find((province) => province.name === provinceName);
      if (province) {
        address.province = province.id;
        await updateDistricts();  // Cập nhật quận/huyện

        // Tìm kiếm quận/huyện từ tên
        const district = districts.value.find((district) => district.name === districtName);
        if (district) {
          address.district = district.id;
          await updateWards();  // Cập nhật phường/xã

          // Tìm kiếm phường/xã từ tên
          const ward = wards.value.find((ward) => ward.name === wardName);
          console.log("ward", ward);
          
          if (ward) {
            address.ward = ward.id;
            console.log("address", address);
            
          }
        }
      }
    }
  } catch (error) {
    console.error('Lỗi khi load địa chỉ:', error);
  } finally {
    isInitializing.value = false;
  }
};

// Cập nhật quận/huyện khi tỉnh thay đổi
const updateDistricts = async () => {
  if (address.province) {
    districts.value = await getDistrictsByProvince(address.province);
    address.district = ''; // Reset district khi tỉnh thay đổi
    wards.value = []; // Reset wards khi tỉnh thay đổi
    address.ward = '';  // Reset ward
  } else {
    districts.value = [];
    address.district = '';
    wards.value = [];
    address.ward = '';
  }
};

// Cập nhật phường/xã khi quận thay đổi
const updateWards = async () => {
  if (address.district) {
    wards.value = await getWardsByDistrict(address.district);
    address.ward = ''; // Reset ward khi quận thay đổi
  } else {
    wards.value = [];
    address.ward = '';
  }
};

// Watchers để tự động cập nhật danh sách quận và phường
watch(
  () => address.province,
  async () => {
    if (!isInitializing.value) {
      await updateDistricts();
    }
  },
);

watch(
  () => address.district,
  async () => {
    if (!isInitializing.value) {
      await updateWards();
    }
  },
);


// Lưu thông tin thay đổi
const saveChanges = async () => {
  isSaving.value = true // Bắt đầu trạng thái lưu
  try {
    const selectedProvince =
      provinces.value.find((province) => province.id === address.province)?.name || ''
    const selectedDistrict =
      districts.value.find((district) => district.id === address.district)?.name || ''
    const selectedWard = wards.value.find((ward) => ward.id === address.ward)?.name || ''

    editableUser.address = `${address.street}, ${selectedWard}, ${selectedDistrict}, ${selectedProvince}`
    await updateUser(editableUser)
  } catch (error) {
    console.error('Lỗi khi lưu dữ liệu:', error)
  } finally {
    isSaving.value = false // Kết thúc trạng thái lưu
  }
}

// Hủy thay đổi
const resetChanges = () => {
  editableUser.displayName = user.value.displayName
  editableUser.email = user.value.email
  editableUser.phoneNumber = user.value.phoneNumber
  initializeAddress()
}

// Watch user để khởi tạo dữ liệu khi cần
watch(() => user, initializeAddress, { immediate: true })
</script>
