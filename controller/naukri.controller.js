const naukriService = require('../services/naukri.services');
const responseUtil = require('../utils/naukri.utils');

exports.getJobs = async (req, res) => {
    try {
      const defaultParams = {
        noOfResults: 20,
        urlType: 'search_by_keyword',
        searchType: 'adv',
        keyword: 'react',
        pageNo: 1,
        experience: '0',
        k: 'react',
        seoKey: 'react-jobs',
        src: 'jobsearchDesk',
        latLong: ''
      };
  
      const params = { ...defaultParams, ...req.query };
      
      console.log('Requesting jobs with params:', params);
      
      const jobs = await naukriService.fetchJobs(params);
      responseUtil.sendSuccess(res, jobs);
    } catch (error) {
      console.error('Error in getJobs:', error);
      responseUtil.sendError(res, error);
    }
  };

exports.getSimilarJobs = async (req, res) => {
  try {
    const similarJobs = await naukriService.fetchSimilarJobs(req.params.jobId, req.query);
    responseUtil.sendSuccess(res, similarJobs);
  } catch (error) {
    responseUtil.sendError(res, error);
  }
};

exports.getJobDetails = async (req, res) => {
  try {
    const jobDetails = await naukriService.fetchJobDetails(req.params.jobId, req.query);
    responseUtil.sendSuccess(res, jobDetails);
  } catch (error) {
    responseUtil.sendError(res, error);
  }
};