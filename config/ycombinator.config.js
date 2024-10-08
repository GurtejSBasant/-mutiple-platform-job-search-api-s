module.exports = {
    algolia: {
        url: 'https://45bwzj1sgc-dsn.algolia.net/1/indexes/*/queries',
        headers: {
            'x-algolia-agent': 'Algolia for JavaScript (3.35.1); Browser',
            'x-algolia-application-id': '45BWZJ1SGC',
            'x-algolia-api-key': 'ZjY5ZWJjZDY3Y2Q2ZDViNTQ4Yjg2OTNhZWY2Y2Y2MGVhMjY1NWRkZGZhYTdkZjA5MDBkZWMwYTZiODgwOWU3MnRhZ0ZpbHRlcnM9JTVCJTVCJTIyam9ic19hcHBsaWNhbnQlMjIlNUQlNUQmYW5hbHl0aWNzVGFncz0lNUIlMjJ3YWFzJTIyJTVEJnVzZXJUb2tlbj1pNWdXQ3JMbEFsdWFMcjdnUVN3aVpDRWxRWmolMkI5bEU2dTRkSG9pY0V3YWclM0Q=',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': 'https://www.workatastartup.com',
            'Referer': 'https://www.workatastartup.com/',
            'Sec-Ch-Ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
        }
    },
    workatastartup: {
        url: 'https://www.workatastartup.com/companies/fetch',
        headers: {
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en-US,en;q=0.9',
            'Content-Type': 'application/json',
            'Origin': 'https://www.workatastartup.com',
            'Referer': 'https://www.workatastartup.com/companies?demographic=any&hasEquity=any&hasSalary=any&industry=any&interviewProcess=any&jobType=any&layout=list-compact&query=AI&sortBy=keyword&tab=any&usVisaNotRequired=any',
            'Sec-Ch-Ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
            'X-Csrf-Token': 'OgadUxlb0ofRXjoHuV71uatMdXw2GwVKYHu05lpYN3UIq0dKiZ0BhDzaYZJKdM3avwEWQDkXqFHMeXm1PdFLZg',
            'X-Requested-With': 'XMLHttpRequest',
            'Cookie': '_sso.key=_FjL8COwkwe5PZbgrsQ4GFPfEzKsXkLQ; _bf_session_exists=eyJfcmFpbHMiOnsibWVzc2FnZSI6ImRISjFaUT09IiwiZXhwIjpudWxsLCJwdXIiOiJjb29raWUuX2JmX3Nlc3Npb25fZXhpc3RzIn19--c09bf3da17accf4c53e92f910eef613c6f99527b; _ga=GA1.2.112172488.1717669552; _gid=GA1.2.1606380107.1717669552; _ga_CHJJ1RJL5K=GS1.2.1717677889.2.1.1717678683.60.0.0; amp_e48895=FlCK_qbZX4YEpGDUpYxyz_.MjA4ODYwMA==..1hvmp9524.1hvmq1dsh.v.o.1n; XSRF-TOKEN=uvi5hTWkYSST5cYxPx7AOKNRbHN9rNnO5JK--j_tZB2IVWOcpWKyJ35hnaTMNPhbtxwPT3KgdNVIkHOpWGQYDg; _bf_session_key=W%2B2%2BK%2Fxq9EOXU3NW07zXw9Ak%2B5wyN8TDU%2B3%2F%2FiRRLtYV4EG9OyikTBRaWX%2Be7lO007Y5bpYxZO25Ex0jMsoLgGH1q%2FrGqBAwhWos6i7OkaIwkiTed00cO%2FWSjM3VR3qkNGENh7UcH1ZIqFg97RmhXxPpEh3dEPmbvoCRoTE8Z56DW9Wr7VLpoG6jbC471ZdwHSq9a9wcc2uzZRFIv62lxwYcL0ydLYTftokbdAvo0gNy0aRAKUYJ%2Bt5n%2FBwAseN4gnwTgRkfq1TRly7FJsfiMm3x6YzhWPQ%3D--9M6dbGk%2Bi7VNARyS--vVbmm2b6aY%2BtEd%2Fuw7wtHw%3D%3D; _gali=search'
        }
    },
    apollo: {
        apiKey: process.env.Apollo_api_key,
        peopleSearchUrl: 'https://api.apollo.io/v1/mixed_people/search',
        peopleMatchUrl: 'https://api.apollo.io/v1/people/match',
        companySearchUrl: 'https://api.apollo.io/api/v1/mixed_companies/search',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        }
    }
};