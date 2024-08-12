const founditService = require('../services/jobforher.services');

exports.getJobSearch = async (req, res) => {
  try {
    const jobs = await founditService.fetchJobSearch(req.query);
    res.json(jobs);
  } catch (error) {
    console.error('Error in getJobSearch:', error);
    res.status(error.response?.status || 500).json(error.response?.data || { error: 'An error occurred while processing your request' });
  }
};

exports.getJobDetail = async (req, res) => {
  try {
    const jobDetail = await founditService.fetchJobDetail(req.params.jobId);
    res.json(jobDetail);
  } catch (error) {
    console.error('Error in getJobDetail:', error);
    res.status(error.response?.status || 500).json(error.response?.data || { error: 'An error occurred while processing your request' });
  }
};