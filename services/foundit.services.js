const httpUtil = require('../utils/foundit.utils');
const config = require('../config/foundit.config');

exports.fetchJobSearch = async (params) => {
  const url = `${config.baseUrl}/middleware/jobsearch`;
  const searchParams = {
    sort: params.sort || 1,
    limit: params.limit || 15,
    query: params.query || 'Ai',
    queryDerived: 'true',
    x_source_freshpaint_id: config.freshpaintId
  };
  return httpUtil.get(url, searchParams, config.headers);
};

exports.fetchJobDetail = async (jobId) => {
  const url = `${config.baseUrl}/middleware/jobdetail/${jobId}`;
  return httpUtil.get(url, {}, config.headers);
};