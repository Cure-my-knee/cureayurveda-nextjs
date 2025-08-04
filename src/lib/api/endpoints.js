
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

  // user data list get api

  getUserList: async (page = 1) => {
  try {
    const token = localStorage.getItem('accessToken');  
    
    // getUserList: (page = 1) => apiClient.get(`/admin/users?page=${page}`)
    const response = await apiClient.get(`/admin/users?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    console.log('API Response  received user list========>:', response.data);
    return response.data;

  } catch (error) {
    throw error.response?.data || error.message;
  }
},


// delete user api

 deleteUser: async (id) => {
  try {
    const token = localStorage.getItem('accessToken');   

   
    const response = await apiClient.delete(`/admin/delete-user/${id}`, {
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





// product api 

  
 

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

  // getProductDetails: async (id) => {
  //   try {
  //     const response = await apiClient.get(`/products/${id}`);
  //     console.log('API Response received details page========>:', response.data);
  //     return response.data;
       
  //   } catch (error) {
  //     throw error.response?.data || error.message;
  //   }
  // },

  getProductDetails: async (slug) => {
    try {
      const response = await apiClient.get(`/products/${slug}`);
      console.log('API Response received details page========>:', response.data);
      return response.data;
       
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },


  // update the product part

  // get product details pro

   putProduct: async (id, productData) => {
  try {
    const token = localStorage.getItem('accessToken');   

    const response = await apiClient.put(`/products/${id}`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,   
      },
    });

    console.log('Product updated Successfully:', response.data);
    return response.data;

  } catch (error) {
    throw error.response?.data || error.message;
  }
},


  // end

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


// blog api endpoints

 getBlog: async () => {
    try {
      const response = await apiClient.get('/blogs');
      console.log('Blog list Response received========>:', response.data);
      return response.data;
       
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // blog details endpoint 

   getBlogDetails: async (slug) => {
  try {
    const response = await apiClient.get(`/blogs/${slug}`);
    console.log('Blog details page data ========>:', response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
},

  // create blog

   postBlog: async (blogData) => {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await apiClient.post('/blogs', blogData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
},

// delete blog

//  deleteBlog: async (blogId) => {
//   try {
//     const token = localStorage.getItem('accessToken');   

   
//     const response = await apiClient.delete(`/blogs/delete/${blogId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,   
//       },
//     });

//     console.log('Blog Deleted Successfully:', response.data);
//     return response.data;

//   } catch (error) {
     
//     throw error.response?.data || error.message;
//   }
// },

 deleteBlog: async (blogId) => {
  try {
    const token = localStorage.getItem('accessToken');   

   
    const response = await apiClient.delete(`/blogs/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`,   
      },
    });

    console.log('Blog Deleted Successfully:', response.data);
    return response.data;

  } catch (error) {
     
    throw error.response?.data || error.message;
  }
},


patchBlog: async (blogId, blogData) => {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await apiClient.patch(
      `/blogs/${blogId}`, // endpoint
      blogData,            // request body (updated blog data)
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
},






  // create order api endpoint

//   postCreateOrder: async (orderData) => {
//   try {
//     const token = localStorage.getItem('accessToken');

//     const response = await apiClient.post('/orders/create', orderData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw error.response?.data || error.message;
//   }
// },




  // payU API ENDPOINTS 

//   postPayU: async () => {
//   try {
//     const token = localStorage.getItem('accessToken'); 
//     const dummyOrderId = `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

//     const response = await apiClient.get('/payu/initiate', {
//       headers: {
//         Authorization: `Bearer ${token}`, 
//       },
//     });

//     console.log('API Response PayU data========>:', response.data);
//     return response.data;

//   } catch (error) {
//     throw error.response?.data || error.message;
//   }
// },


// get all order list

 

getAllOrder: async () => {
  try {
    const token = localStorage.getItem('accessToken');  

    const response = await apiClient.get('/orders', {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    console.log('All order data========>:', response.data);
    return response.data;

  } catch (error) {
    throw error.response?.data || error.message;
  }
},
  
};

 