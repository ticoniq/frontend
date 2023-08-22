const API_BASE_URL = 'https://api-test.innoloft.com';

async function getProduct(productId) {
  const response = await fetch(`${API_BASE_URL}/product/${productId}/`);
  const data = await response.json();
  return data;
}

// Implement other API functions for TRL list and app configuration

const api = {
  getProduct,
  // Other API functions
};

export default api;
