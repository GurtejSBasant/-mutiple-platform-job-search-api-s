const axios = require('axios');

exports.post = async (url, data, headers) => {
    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error('HTTP request failed:', error);
        throw error;
    }
};