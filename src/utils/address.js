import axios from 'axios';

const API_BASE_URL = 'https://open.oapi.vn/location';

// Lấy danh sách tỉnh/thành
export const getProvinces = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/provinces`, {
      params: { page: 0, size: 30, query: '' },
    });
    return response.data?.data || [];
  } catch (error) {
    console.error('Error fetching provinces:', error);
    return [];
  }
};

// Lấy danh sách quận/huyện theo tỉnh
export const getDistrictsByProvince = async (provinceId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/districts/${provinceId}`, {
      params: { page: 0, size: 30, query: '' },
    });
    return response.data?.data || [];
  } catch (error) {
    console.error('Error fetching districts:', error);
    return [];
  }
};

// Lấy danh sách phường/xã theo quận/huyện
export const getWardsByDistrict = async (districtId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/wards/${districtId}`, {
      params: { page: 0, size: 30, query: '' },
    });
    return response.data?.data || [];
  } catch (error) {
    console.error('Error fetching wards:', error);
    return [];
  }
};
