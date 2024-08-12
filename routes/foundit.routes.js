const express = require('express');
const founditController = require('../controller/foundit.controller');

const router = express.Router();

router.get('/jobsearch', founditController.getJobSearch);
router.get('/jobdetail/:jobId', founditController.getJobDetail);

module.exports = router;