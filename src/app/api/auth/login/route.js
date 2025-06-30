import api from '@/lib/axios';
 

// Example 1: Using in a React component
 export const LoginUser = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      throw {
        message: error.response.data.message || 'Login failed',
        status: error.response.status,
        data: error.response.data
      };
    } else if (error.request) {
      // Network error
      throw {
        message: 'Network error. Please check your connection.',
        status: null,
        data: null
      };
    } else {
      // Other error
      throw {
        message: 'An unexpected error occurred',
        status: null,
        data: null
      };
    }
  }
};
