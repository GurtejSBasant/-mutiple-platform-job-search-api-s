const https = require('https');
const zlib = require('zlib');

exports.get = (url, params, headers) => {
  return new Promise((resolve, reject) => {
    const queryString = new URLSearchParams(params).toString();
    const options = {
      hostname: new URL(url).hostname,
      path: `${new URL(url).pathname}?${queryString}`,
      method: 'GET',
      headers: headers
    };

    const req = https.request(options, (res) => {
      let data = [];

      res.on('data', (chunk) => {
        data.push(chunk);
      });

      res.on('end', () => {
        const buffer = Buffer.concat(data);
        
        const processResponse = (decodedData) => {
          try {
            const jsonResponse = JSON.parse(decodedData);
            if (res.statusCode >= 400) {
              reject({
                statusCode: res.statusCode,
                message: jsonResponse.message || 'API Error',
                data: jsonResponse
              });
            } else {
              resolve(jsonResponse);
            }
          } catch (parseError) {
            reject({
              statusCode: res.statusCode,
              message: 'Error parsing JSON response',
              error: parseError
            });
          }
        };

        if (res.headers['content-encoding'] === 'br') {
          zlib.brotliDecompress(buffer, (err, decoded) => {
            if (err) {
              reject({
                statusCode: res.statusCode,
                message: 'Error decompressing data',
                error: err
              });
            } else {
              processResponse(decoded.toString());
            }
          });
        } else {
          processResponse(buffer.toString());
        }
      });
    });

    req.on('error', (error) => {
      reject({
        statusCode: 500,
        message: 'Error making request to Naukri API',
        error: error
      });
    });

    req.end();
  });
};

exports.sendSuccess = (res, data) => {
    res.status(200).json(data);
  };
  
  exports.sendError = (res, error) => {
    const statusCode = error.statusCode || 500;
    const errorResponse = {
      message: error.message || 'An error occurred while processing the request',
      statusCode: statusCode,
      details: error.data || error.error || error
    };
    
    res.status(statusCode).json(errorResponse);
  };