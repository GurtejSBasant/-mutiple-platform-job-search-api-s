const express = require('express');
const JobhaiController = require('../controller/jobhai.controller');

const router = express.Router();

router.post('/api/data', JobhaiController.getJobs);
router.get('/job-details', JobhaiController.getJobDetails);
router.post('/callJobHaiAPI', JobhaiController.callJob);
router.post('/get-number', JobhaiController.getInfo);

module.exports = router;