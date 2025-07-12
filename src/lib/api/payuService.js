 // lib/api/payuService.js
import apiClient from "./config";

export const postPayU = async (orderId) => {
  console.log('postPayU called with:', orderId);
  console.log('typeof orderId:', typeof orderId);
  
  try {
    const requestBody = {
      orderId: orderId,
      // Add other required fields if needed
    };
    
    console.log('Request body being sent:', requestBody);
    
    const response = await fetch('http://localhost:3010/api/payu/initiate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add authorization if needed
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(requestBody)
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    const data = await response.json();
    console.log('Response data:', data);
    
    if (!response.ok) {
      throw new Error(data.error || 'PayU API request failed');
    }
    
    return data;
  } catch (error) {
    console.error('Error in postPayU:', error);
    throw error;
  }
};

