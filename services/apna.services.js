const httpClient = require('../utils/apna.utils');


const BASE_URL = 'https://production.apna.co/user-profile-orchestrator/public/v1/jobs/';

exports.fetchJobs = async (text, location) => {
  const params = {
    page_size: 15,
    page: 1,
    text: text,
    search: true,
    location_id: 1,
    location_identifier: 1,
    location_type: 'CustomLocation',
    location_name: location
  };

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://apna.co/',
    'Sec-Ch-Ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site'
  };

  try {
    const response = await httpClient.get(BASE_URL, { params, headers });
    return response.data;
  } catch (error) {
    console.error('Error in apnaService.fetchJobs:', error);
    throw error;
  }
};