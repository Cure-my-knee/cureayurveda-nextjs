import apiClient from "./config";

 

// ✅ Named export
export const postCreateOrder = async (orderData) => {
  try {
    const headers = {};

    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await apiClient.post('/orders/create', orderData, {
      headers,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

