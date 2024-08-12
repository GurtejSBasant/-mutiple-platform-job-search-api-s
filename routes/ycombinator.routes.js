const express = require('express');
const ycombinatorController = require('../controller/ycombinator.controller');

const router = express.Router();

router.post('/algolia', ycombinatorController.algoliaSearch);
router.post('/fetch-data', ycombinatorController.fetchCompanyData);
router.post('/fetch-employees', ycombinatorController.fetchEmployees);
router.post('/fetch-employees-emails', ycombinatorController.fetchEmployeesEmails);
router.post('/search', ycombinatorController.searchCompanies);

module.exports = router;