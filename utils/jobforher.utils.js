const axios = require('axios');

exports.get = async (url, params, headers) => {
  try {
    const response = await axios.get(url, { params, headers });
    return response.data;
  } catch (error) {
    console.error('Request failed:', error.message);
    throw error;
  }
};