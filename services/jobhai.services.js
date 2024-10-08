const axios = require('axios');


class JobhaiService {
  static async getJobs(payload) {

    const url = `https://api.jobhai.com/jobs/v3/get-jobs`;
    const headers = {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjExMzM5MjI2LCJzdGF0dXMiOiJ2ZXJpZmllZCJ9LCJpYXQiOjE3MTk1Njk0OTYsImV4cCI6MTc1MTEwNTQ5Nn0.BJS0NbDS3mkctB-nNICn2sb105HNkzC5_hrfEkjB8Aw', // Replace this with a valid token
      'Content-Type': 'application/json;charset=UTF-8',
      'Deviceid': '5d1679ee-3690-466b-9799-ceaf0074a4f4', // Make sure this matches your device ID
      'Language': 'en',
      'Origin': 'https://www.jobhai.com',
      'Referer': 'https://www.jobhai.com/',
      'Sec-Ch-Ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'Source': 'WEB',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      'X-Transaction-Id': 'JS-WEB-' + Math.random().toString(36).substr(2, 9)
    };
    
    try {
      const response = await axios.post(url, payload, { headers });
      return response.data;
    } catch (error) {
      console.error('Error fetching jobs:', error.message);
      throw error;
    }
  }

  static async getJobDetails(id) {
    const url = `https://api.jobhai.com/jobs/view/${id}`;
    const headers ={
      'Accept': 'application/json, text/plain, */*',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjExMzM5MjI2LCJzdGF0dXMiOiJ2ZXJpZmllZCJ9LCJpYXQiOjE3MTk1Njk0OTYsImV4cCI6MTc1MTEwNTQ5Nn0.BJS0NbDS3mkctB-nNICn2sb105HNkzC5_hrfEkjB8Aw',
      'Device-Id': '5d1679ee-3690-466b-9799-ceaf0074a4f4',
      'Language': 'en',
      'Origin': 'https://www.jobhai.com',
      'Priority': 'u=1, i',
      'Referer': 'https://www.jobhai.com/',
      'Sec-Ch-Ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'Source': 'WEB',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      'X-Transaction-Id': 'JS-WEB-c888657b-8d41-4112-834c-6d7b23f5af24'}
  ;
    
    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error('Error fetching job details:', error.message);
      throw error;
    }
  }

  static async callJob(payload) {
    const url = `https://api.jobhai.com/jobs/v3/call`;
    const headers = {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjExMzM5MjI2LCJzdGF0dXMiOiJ2ZXJpZmllZCJ9LCJpYXQiOjE3MTk1Njk0OTYsImV4cCI6MTc1MTEwNTQ5Nn0.BJS0NbDS3mkctB-nNICn2sb105HNkzC5_hrfEkjB8Aw',
      'Content-Type': 'application/json;charset=UTF-8',
      'Device-Id': '5d1679ee-3690-466b-9799-ceaf0074a4f4',
      'Language': 'en',
      'Origin': 'https://www.jobhai.com',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      'X-Transaction-Id': 'JS-WEB-3ee57f93-374a-4e7c-b550-4d6a971e26ef'
    };
    
    try {
      console.log("before axios request")
      const response = await axios.post(url, payload, { headers });
      console.log("response of axios:",response)
      return response.data;
    } catch (error) {
      console.log("error:",error)
      console.error('Error calling job:', error.message);
      throw error;
    }
  }

  static async getInfo(payload) {
    const url = `https://www.jobhai.com/v1/utils/getInfo`;
    const headers = {
      'authority': 'www.jobhai.com',
      'method': 'POST',
      'path': '/v1/utils/getInfo',
      'scheme': 'https',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjExMzM5MjI2LCJzdGF0dXMiOiJ2ZXJpZmllZCJ9LCJpYXQiOjE3MTk1Njk0OTYsImV4cCI6MTc1MTEwNTQ5Nn0.BJS0NbDS3mkctB-nNICn2sb105HNkzC5_hrfEkjB8Aw',
      'Content-Length': '57',
      'Content-Type': 'application/json;charset=UTF-8',
      'Cookie': '_ga=GA1.1.782455124.1719569461; deviceId=5d1679ee-3690-466b-9799-ceaf0074a4f4; isUstSaved=true; utm_source=google; utm_medium=organic; referrer=https://www.google.com/; deviceIdVerified=true; access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJfaWQiOjExMzM5MjI2LCJzdGF0dXMiOiJ2ZXJpZmllZCJ9LCJpYXQiOjE3MTk1Njk0OTYsImV4cCI6MTc1MTEwNTQ5Nn0.BJS0NbDS3mkctB-nNICn2sb105HNkzC5_hrfEkjB8Aw; access_id=11339226; _fbp=fb.1.1719569501240.262571050242179048; isSessionRunning=true; _abck=3CB5244BAEC6BE324703A1C51F89065B~-1~YAAQznMsMaRVQk6QAQAAcorDbAyklUm76oubKVZcqPX2mu5erDhe6n3fe76C8yeBlHnzWV3wDBF2VJ9+45R4tIJvwrzNwkdHOrpj2Ph60Hf8Q8tC0dSabtYinf+JlXfV3auiPvZrq1TT6Thnn8UgODtQK6cPxSE+TLgd3iGoSbwZLxAO954HsQMAMm4UV2B3pNgVjoGnB0X/pyi48rs51sPF++uh7gdmjJNd+E8VtROpvFuaS3N+LFWD/vvIGcgUY1TMQzregrSM40bAB1i1ZWNXqS/ATzha7Z5PdfyCA/g78PGgDR71zCgaU5Blt+jhKxSfH9KypQ0o2Mj8vIMaUoPzyrdpbXOkL/zipVwl2EUqQpPHHwcnuiRHsma8ArH1yjKjnqK+kfbwkA==~-1~-1~-1; bm_mi=7A9C770E937888B743987CECC5107292~YAAQznMsMbVVQk6QAQAA0orDbBhUorY3EM2+3TsUxS7M9Ff50PIE08OF2F3Ht3b1QJn2aEIlLPiLMEATy3Hic4AEzF42/HOxhgalr6aacoKPNugOGMJP3HwowHZni551GKX1RJHYe0uDAXoNIIHlc4p6tQLcl6hpNuVW5dir36yx+3rUMqrwG1dXcG/uxCMzrGarK0qqJXR1pYZ3f9qwdOdNqxG5O1ix4w+qZR6EOGQAIVGCVwTMr0QpBHTqpBCEaFwopXyvb2rMXrTdu5S+26MELlKGOtmvdoaVf04YTd8RBz1v+SLg6PW2b1lcQBhHJjMx0no=~1; bm_sz=38A1665CA046D56E424852CB4714CDFB~YAAQznMsMbdVQk6QAQAA0orDbBiLRdXnJnU1wddicg5Iig9pSzfJK9KMN11kcjhEy8jk3WQ0UTRkZus43Cc2aCUz+R1twbWag4KBcu1sdaRZusCowYfrCRI/gdZ0L8Fn46Uhorbk1tvFjq/DY8mWd9ToNB2XruDgoimIpir6Xho3sPcgk2R8lLVbc5k/mQOt9RGNKehSgXyP6qKeJgsb3XldR1NeznVwUyohxYeSs42m56QOAd1g6q5uEtHswj0iyWYYDEVfHR5P9/Duugco8T2z0xqRCCu8BiUsFTLXH5LyKO1v+jcb7+ssM8t+1fYQe9m/TIE5whifbGw+nEMZsh7+W4XK7VvT/tYjGuo6G9hS8P5XzdnkktNaBT/9Cm3EI3c2+EPZy0+H1Xe19BrI~3421239~3682881; ak_bmsc=684AFA2AABD2DFB29CBED619A53A567A~000000000000000000000000000000~YAAQznMsMVNWQk6QAQAAjI7DbBjWnDyBeYxMgdf9iTl9ndJxRzoRlixEcCS4iRkzFVdIDQ5JpPTbe0bnrZ7E4/PHInqDHSRWZRyyfZj/adeMRUx0q5Yl46rh63YH0OyTVwsobJ5QUOfFAOsyVScKeGn5f/AG8jXsEwDng9E9ei1UsZ+01wM3eZLgDIGpvWJ/VRELhOc89pBPEkxshIaHbqSZq468kEN/gRApdGZ+yeadjTy/BoHxkuHoqY0Mf5sbmYkbCT82S9KoqFmkESvrK/ogY1j72l++eRSrxMwDrrHSBIG1XSigE0hPsYgY0B7bJNsXri9VYqVJL2MTnrRA24rfkThIv1Q1wLI5CX+uNG9gbTHuzjUsBXsxjoUfsdoN060EEpIwqR0oe4mTHOC16RMwrPLNWTCaz1WyWJ8R30dZNhH9LcB6qgjPvfaEmRQNd5GCTE5RaLafpO5hZW7BxBc+wuZUyU84Q2MVc3nQjLNq7F2p; moe_uuid=e3dc5c7a-72a4-4a31-87f2-4ba38002492b; pageFiltersAfterLogin=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNhdGVnb3J5Ijp7IjE4Ijp0cnVlfSwiY29ob3J0X2NhdGVnb3J5Ijp7fX0sImlhdCI6MTcxOTgxMTY3NCwiZXhwIjoxNzIyNDAzNjc0fQ.Tc_OsxBwFTCjfpIimM6q_HgGHo0e9U6GTbeKKcfrPzA; sessionCount=2; isFeedbackSubmit=true; _clck=1lc439x%7C2%7Cfn3%7C0%7C1640; last_visited_page=it-hardware-network-engineer-computer-operator-job-in-workdeal-services-private-limited-keshar-bagh-indore-1-to-3-years-1719664895-4182701-jid; _clsk=17gym58%7C1719811714179%7C2%7C1%7Cr.clarity.ms%2Fcollect; bm_sv=146394C6CAE5F6A83328AB565ED215D9~YAAQznMsMaFoQk6QAQAA/hfEbBgLMsDzHcWh2xZuDAzJU+TC60lNqRQ68ycV9Y2q7sdcLARbwnFkHQIXkyYkwouRyvnAISThY3zX7AlNk8p1OEL7VIrsMfGO2kwgkv8J+oSrTsDQ63V2VSvyZNA1qvMgTjTGGnK8VWQ9AEhjwglnkf3yhBFJeZ1y5KYZDBh2M/udv+Lwr4HjTtLVbd7Caxy0QtrMpXRxdqU9yItQqd0hV4l9SKfolWcClc4CVZqY~1; _ga_WRKNVY33RD=GS1.1.1719811678.2.1.1719811721.17.0.0',
      'Deviceid': '5d1679ee-3690-466b-9799-ceaf0074a4f4',
      'Language': 'en',
      'Origin': 'https://www.jobhai.com',
      'Priority': 'u=1, i',
      'Referer': 'https://www.jobhai.com/it-hardware-network-engineer-computer-operator-job-in-workdeal-services-private-limited-keshar-bagh-indore-1-to-3-years-1719664895-4182701-jid',
      'Sec-Ch-Ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Source': 'WEB',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      'X-Transaction-Id': 'JS-WEB-f7550cb0-debf-4827-bd75-6436a07601cd'
  };
    
    try {
      const response = await axios.post(url, payload, { headers });
      return response.data;
    } catch (error) {
      console.error('Error getting info:', error.message);
      throw error;
    }
  }
}

module.exports = JobhaiService;