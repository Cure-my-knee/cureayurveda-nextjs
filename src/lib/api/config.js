
// lib/api/config.js
import axios from 'axios';

// Base URL configuration
// const BASE_URL = 'http://localhost:3010/api';
// new url depo
const BASE_URL = 'https://abhineshwork.onrender.com/api';
// const BASE_URL = 'https://cureayurvedic.up.railway.app/api';
// const BASE_URL = 'https://cureayurvedictest.up.railway.app/api';
// const BASE_URL = 'https://cureayurvedics.up.railway.app/api';
  

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (for adding auth tokens, etc.)
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (for handling common errors)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors here
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;