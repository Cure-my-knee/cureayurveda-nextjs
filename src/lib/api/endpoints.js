
// lib/api/endpoints.js

import apiClient from "./config";

 

// Auth API endpoints
export const authAPI = {
  loginUser: async (credentials) => {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  registerUser: async (userData) => {
    try {
      const response = await apiClient.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  postProduct: async () => {
    try {
      const response = await apiClient.post('/products/create');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  getProduct: async () => {
    try {
      const response = await apiClient.get('/products');
      console.log('✅ API Response received========>:', response.data);
      return response.data;
       
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getProductDetails: async (id) => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      console.log('API Response received details page========>:', response.data);
      return response.data;
       
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

 