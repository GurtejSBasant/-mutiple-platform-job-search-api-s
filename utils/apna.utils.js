const axios = require('axios');

const httpClient = axios.create();

// Add a request interceptor
httpClient.interceptors.request.use(function (config) {
  console.log('Request:', config.method.toUpperCase(), config.url);
  console.log('Params:', config.params);
  console.log('Headers:', config.headers);
  return config;
}, function (error) {
  console.error('Request error:', error);
  return Promise.reject(error);
});

// Add a response interceptor
httpClient.interceptors.response.use(function (response) {
  console.log('Response:', response.status, response.statusText);
  return response;
}, function (error) {
  console.error('Response error:', error);
  return Promise.reject(error);
});

module.exports = httpClient;