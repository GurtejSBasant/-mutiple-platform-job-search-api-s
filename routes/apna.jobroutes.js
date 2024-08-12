const express = require('express');
const jobController = require('../controller/apna.job.controller');

const router = express.Router();

router.post('/jobscrape', jobController.scrapeJobs);

module.exports = router;