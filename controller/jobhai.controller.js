const JobhaiService = require('../services/jobhai.services');

class JobhaiController {
  static async getJobs(req, res) {
    try {
      const jobs = await JobhaiService.getJobs(req.body.payload);
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching jobs', details: error.message });
    }
  }

  static async getJobDetails(req, res) {
    try {
      const jobDetails = await JobhaiService.getJobDetails(req.query.id);
      res.json(jobDetails);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching job details', details: error.message });
    }
  }

  static async callJob(req, res) {
    try {
      const result = await JobhaiService.callJob(req.body.payload);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error calling job', details: error.message });
    }
  }

  static async getInfo(req, res) {
    try {
      const info = await JobhaiService.getInfo(req.body);
      res.json(info);
    } catch (error) {
      res.status(500).json({ error: 'Error getting info', details: error.message });
    }
  }
}

module.exports = JobhaiController;