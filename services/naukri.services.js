const httpUtil = require('../utils/naukri.utils');
const config = require('../config/naukri.config');

exports.fetchJobs = async (params) => {
    const url = `${config.baseUrl}/jobapi/v3/search`;
    console.log('Fetching jobs with URL:', url);
    console.log('Params:', JSON.stringify(params, null, 2));
    console.log('Headers:', JSON.stringify(config.headers, null, 2));
    try {
      return await httpUtil.get(url, params, config.headers);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error;
    }
  };
  
  exports.fetchSimilarJobs = async (jobId, params) => {
    const url = `${config.baseUrl}/jobapi/v2/search/simjobs/${jobId}`;
    try {
      return await httpUtil.get(url, params, config.headers);
    } catch (error) {
      console.error('Error fetching similar jobs:', error);
      throw error;
    }
  };
  
  exports.fetchJobDetails = async (jobId, params) => {
    const url = `${config.baseUrl}/jobapi/v4/job/${jobId}`;
    try {
        const headers = {
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en-US,en;q=0.9',
            'Appid': '121',
            'Authorization': 'Bearer eyJraWQiOiIxIiwidHlwIjoiSldUIiwiYWxnIjoiUlM1MTIifQ.eyJ1ZF9yZXNJZCI6MjczNDMwMDI2LCJzdWIiOiIyODQ0ODExOTQiLCJ1ZF91c2VybmFtZSI6Imd1cnRlajEzMTZAZ21haWwuY29tIiwidWRfaXNFbWFpbCI6dHJ1ZSwiaXNzIjoiSW5mb0VkZ2UgSW5kaWEgUHZ0LiBMdGQuIiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNS4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiaXBBZHJlc3MiOiI0OS40My4zLjE2NCIsInVkX2lzVGVjaE9wc0xvZ2luIjpmYWxzZSwidXNlcklkIjoyODQ0ODExOTQsInN1YlVzZXJUeXBlIjoiIiwidXNlclN0YXRlIjoiQVVUSEVOVElDQVRFRCIsInVkX2lzUGFpZENsaWVudCI6ZmFsc2UsInVkX2VtYWlsVmVyaWZpZWQiOmZhbHNlLCJ1c2VyVHlwZSI6ImpvYnNlZWtlciIsInNlc3Npb25TdGF0VGltZSI6IjIwMjQtMDctMDhUMTE6NTI6NDAiLCJ1ZF9lbWFpbCI6Imd1cnRlajEzMTZAZ21haWwuY29tIiwidXNlclJvbGUiOiJ1c2VyIiwiZXhwIjoxNzIzMTI1MjUzLCJ0b2tlblR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTcyMzEyMTY1MywianRpIjoiMWRjNWRkZTRkOWU2NGY5NWIwYmUzNGJhYjE3NjE3ZjcifQ.suiEUoNZEtkhpXmCg7CuTJPlXxIDkUsJ0zZasHXPVHW3oIg9ldJCvwxAxENOdKGYc09AvDlGMoVA_Nk8zlvoZedbxK_z2Lqmju3GQyKDt8foSmtSsy8HOg1xnvbmLeCkhtEHYywjblSmR6Oj4L4fTGT_ahG3lJsSIr-4q6V20tqi0DW6koVr_MaGraK-fugsEwBzdvfaIfjaIBrfz1pLaQj2zYbM17GYSuyisS4tfCaTli7GUa_j66S1MXVyXJRb847_zIRwu4frNyxJrOl4nlHMI3tWl6YMZyL3heN753nham1EOwDnxQM5eRKtasMIvWGSqwZHIZAZdAc-XdOYDg',
            'Clientid': 'd3skt0p',
            "Cookie": "_t_ds=481d9ab1720419741-20481d9ab-0481d9ab; J=0; _ga=GA1.1.1396575034.1720419746; _gcl_aw=GCL.1720419757.Cj0KCQjw-ai0BhDPARIsAB6hmP5YjR4dovEfvyQOuu-uKosdzLQ078M4U6yYgOzaejN3yEZPDtPCs8saAgIhEALw_wcB; _gcl_dc=GCL.1720419757.Cj0KCQjw-ai0BhDPARIsAB6hmP5YjR4dovEfvyQOuu-uKosdzLQ078M4U6yYgOzaejN3yEZPDtPCs8saAgIhEALw_wcB; _gcl_gs=2.1.k1$i1720419756; nauk_rt=1dc5dde4d9e64f95b0be34bab17617f7; nauk_sid=1dc5dde4d9e64f95b0be34bab17617f7; nauk_otl=1dc5dde4d9e64f95b0be34bab17617f7; NKWAP=aef4b66bca088d1e5e7c7db1c06559986fa4cb906fdc4fd7e41a2f5e12a02eb208b05ee52a8d9794~aef4b66bca088d1e5e7c7db1c06559986fa4cb906fdc4fd7e41a2f5e12a02eb208b05ee52a8d9794~1~0; MYNAUKRI[UNID]=a2fd605007c8401fa9155882c6164d4d; _gcl_au=1.1.155919983.1720419746.1326496717.1720419899.1720419899; nauk_ps=campus; test=naukri.com; PS=aef4b66bca088d1e5e7c7db1c06559986fa4cb906fdc4fd7e41a2f5e12a02eb208b05ee52a8d9794; __gads=ID=4a46b28762494536:T=1720420988:RT=1723115198:S=ALNI_MZtaD_A_G-V4HCudRmwemj6Rds4YQ; __gpi=UID=00000e86b52493f4:T=1720420988:RT=1723115198:S=ALNI_MZvmJGXTF3ueQ_L_97_8VegRbuqSg; __eoi=ID=27c7f6a876f22098:T=1720420988:RT=1723115198:S=AA-AfjZ9RZwzpGJwf7ePiAW5V_e2; ak_bmsc=10FF4B76696092B12E06662A3B48B8B1~000000000000000000000000000000~YAAQX2/ZF8ixYCmRAQAAq0HWMRi7fRn7soBB469BYYibBtjn2ftnYdsGIcgdff0upGoxp2Yq3DmYd7h+GsUq912fKzcLW2yqZcm8c6twfJsnJcbPTDqAqQTZd4qWb9fqyzJe7ETzD+ztYgmkxYm/KHwKk4Hkb1hP9+9vIpBPxApCHoslAyWDpp8/Gb/YH9rLbh0t54BRfbqzr1OYqMhAQOkmcSjMy0KFAVr4xR0bqvT2vIhyZLQ6mU/m9tuUBw6nt/XEQtCGuRJ+W9JjDQ/2v257m4fXoTcTrTBqX6iLdHwmTUlxwnuWOxQCT983oJjo1/rTU/brtpaY6EkdsZMxuP9XC1AKonHyOKN8nssm3Dj0K/o9bVMf7KPi50l668BWwZ3op5WSfp5U9GgmYd/u0ezDAxtU1hioPMhGcuBU8J13678Duf0DNkt+uKXd2Xd6YpG4UJNp8pYzm1lDV08Rq3xZDMs4p2loDTYib2AAwzPC+FtGevpT; nauk_at=eyJraWQiOiIxIiwidHlwIjoiSldUIiwiYWxnIjoiUlM1MTIifQ.eyJ1ZF9yZXNJZCI6MjczNDMwMDI2LCJzdWIiOiIyODQ0ODExOTQiLCJ1ZF91c2VybmFtZSI6Imd1cnRlajEzMTZAZ21haWwuY29tIiwidWRfaXNFbWFpbCI6dHJ1ZSwiaXNzIjoiSW5mb0VkZ2UgSW5kaWEgUHZ0LiBMdGQuIiwidXNlckFnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNS4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiaXBBZHJlc3MiOiI0OS40My4zLjE2NCIsInVkX2lzVGVjaE9wc0xvZ2luIjpmYWxzZSwidXNlcklkIjoyODQ0ODExOTQsInN1YlVzZXJUeXBlIjoiIiwidXNlclN0YXRlIjoiQVVUSEVOVElDQVRFRCIsInVkX2lzUGFpZENsaWVudCI6ZmFsc2UsInVkX2VtYWlsVmVyaWZpZWQiOmZhbHNlLCJ1c2VyVHlwZSI6ImpvYnNlZWtlciIsInNlc3Npb25TdGF0VGltZSI6IjIwMjQtMDctMDhUMTE6NTI6NDAiLCJ1ZF9lbWFpbCI6Imd1cnRlajEzMTZAZ21haWwuY29tIiwidXNlclJvbGUiOiJ1c2VyIiwiZXhwIjoxNzIzMTI1MjUzLCJ0b2tlblR5cGUiOiJhY2Nlc3NUb2tlbiIsImlhdCI6MTcyMzEyMTY1MywianRpIjoiMWRjNWRkZTRkOWU2NGY5NWIwYmUzNGJhYjE3NjE3ZjcifQ.suiEUoNZEtkhpXmCg7CuTJPlXxIDkUsJ0zZasHXPVHW3oIg9ldJCvwxAxENOdKGYc09AvDlGMoVA_Nk8zlvoZedbxK_z2Lqmju3GQyKDt8foSmtSsy8HOg1xnvbmLeCkhtEHYywjblSmR6Oj4L4fTGT_ahG3lJsSIr-4q6V20tqi0DW6koVr_MaGraK-fugsEwBzdvfaIfjaIBrfz1pLaQj2zYbM17GYSuyisS4tfCaTli7GUa_j66S1MXVyXJRb847_zIRwu4frNyxJrOl4nlHMI3tWl6YMZyL3heN753nham1EOwDnxQM5eRKtasMIvWGSqwZHIZAZdAc-XdOYDg; is_login=1; bm_sv=F9FA80DA8379A25F9807FF125DA5E677~YAAQTHLBF8nxmSeRAQAAhtsNMhi25hkMe9CLb2KPaEWNkOFhnJEHbqO6DdYziPm22TvCQnkIiHSozlsmtAe9dRk8IfrAvPhngPnXM9XR/sw0hUCytN3MzWaHH48KbXgTITy1TlwuozgqPzZrT3mKRejKP0TBYVpRXhcNnzxAgW4w8FufyRRuRvmPRNb84OWrglfBCuY/CgYTt7aMvn+g7v0T26jyTzXIWfa1z5y2qiv++aqvXPZTBsATz8SKXcZkDQ5j3Z+tiTr1++hbFbA==; bm_mi=bwa1kzdbsl3crzhoj0f91i8o8yukzkka",
            'Content-Type': 'application/json',
            'Gid': 'LOCATION,INDUSTRY,EDUCATION,FAREA_ROLE',
            'Nkparam': 'a1+eGngj1BtCE3ZmU6moDF3Kfybd12TmCJ54lHRK1D5gTSlQULNjffUWvpBNWJpe4Gy8hfT4arSprCFcJp6Spg==',
            'Priority': 'u=1, i',
            'Referer': 'https://www.naukri.com/job-listings-react-js-developer-godigi-infotech-mumbai-hyderabad-new-delhi-pune-ahmedabad-bengaluru-0-to-1-years-100524500144?src=jobsearchDesk&sid=17231146354618176&xp=1&px=1&nignbevent_src=jobsearchDeskGNB',
            'Sec-Ch-Ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'Systemid': 'Naukri',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
          };;
      return await httpUtil.get(url, params, headers);
    } catch (error) {
      console.error('Error fetching job details:', error);
      throw error;
    }
  };