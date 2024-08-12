const express = require('express');
const naukriController = require('../controller/naukri.controller');

const router = express.Router();

router.get('/naukri-jobs', naukriController.getJobs);
router.get('/naukri-similar-job/:jobId', naukriController.getSimilarJobs);
router.get('/job/:jobId', naukriController.getJobDetails);

module.exports = router;