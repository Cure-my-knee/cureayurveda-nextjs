
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

  // logout 

  logoutUser: async () => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await apiClient.post('/auth/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

  // user data

  
 

   postProductCart: async (productData) => {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await apiClient.post('/products/create', productData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
},


// product API endpoints
  getProduct: async () => {
    try {
      const response = await apiClient.get('/products');
      console.log('API Response received========>:', response.data);
      return response.data;
       
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  //  delete product

   deleteProduct: async (id) => {
  try {
    const token = localStorage.getItem('accessToken');   

   
    const response = await apiClient.delete(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,   
      },
    });

    console.log('Product Deleted Successfully:', response.data);
    return response.data;

  } catch (error) {
     
    throw error.response?.data || error.message;
  }
},


  // 

  getProductDetails: async (id) => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      console.log('API Response received details page========>:', response.data);
      return response.data;
       
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // contact us
  postContact: async (contactData) => {
    try {
      const response = await apiClient.post('/contact', contactData);
      console.log('✅ Contact form submitted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Contact form submission failed:', error);
      throw error.response?.data || error.message;
    }
  },

 
   // newsletter subscription
postSubscribe: async (subscribeData) => {
  try {
    // Validate input data
    if (!subscribeData || !subscribeData.email) {
      throw new Error('Email is required');
    }

    const response = await apiClient.post('/subscribe', subscribeData);
    
    console.log('Subscription form submitted successfully:', response.data);
    
    // Return the response data with success flag
    return {
      success: true,
      data: response.data,
      message: response.data?.message || 'Subscription successful'
    };
    
  } catch (error) {
    console.error('Subscription form submission failed:', error);
    
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      const errorMessage = error.response.data?.message || 
                          error.response.data?.error || 
                          'Subscription failed. Please try again.';
      
      throw {
        success: false,
        message: errorMessage,
        status: error.response.status,
        data: error.response.data
      };
    } else if (error.request) {
      // Network error
      throw {
        success: false,
        message: 'Network error. Please check your internet connection.',
        error: 'NETWORK_ERROR'
      };
    } else {
      // Other errors
      throw {
        success: false,
        message: error.message || 'An unexpected error occurred.',
        error: 'UNKNOWN_ERROR'
      };
    }
  }
},

  // get subscribe email
 getSubscribeEmail: async () => {
  try {
    const token = localStorage.getItem('accessToken');  

    const response = await apiClient.get('/subscribers', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    console.log('✅ API Response received========>:', response.data);
    return response.data;

  } catch (error) {
    throw error.response?.data || error.message;
  }
},

getContactMessage: async () => {
  try {
    const token = localStorage.getItem('accessToken');  

    const response = await apiClient.get('/contact/admin', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    console.log('API Response Contact us data========>:', response.data);
    return response.data;

  } catch (error) {
    throw error.response?.data || error.message;
  }
},

  
};

 