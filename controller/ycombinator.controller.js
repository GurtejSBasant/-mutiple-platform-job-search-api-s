const algoliaService = require('../services/ycombinator.services');

exports.algoliaSearch = async (req, res) => {
    try {
        const { query, page = 0, hitsPerPage = 10 } = req.body;
        const result = await algoliaService.search(query, page, hitsPerPage);
        res.json({ allCompanyIds: result });
    } catch (error) {
        console.error('Error in Algolia search:', error);
        res.status(error.response?.status || 500).json(error.response?.data || { message: error.message });
    }
};

exports.fetchCompanyData = async (req, res) => {
    try {
        const { companiesId } = req.body;
        const result = await algoliaService.fetchCompanies(companiesId);
        res.json(result);
    } catch (error) {
        console.error('Error in fetchCompanyData:', error);
        res.status(error.response?.status || 500).json(error.response?.data || { message: error.message });
    }
};

exports.fetchEmployees = async (req, res) => {
    try {
        const { q_organization_domains, position_title, person_seniorities } = req.body;
        const result = await algoliaService.fetchEmployees(q_organization_domains, position_title, person_seniorities);
        res.json(result);
    } catch (error) {
        console.error('Error in fetchEmployees:', error);
        res.status(500).send(`Error: ${error.message}`);
    }
};

exports.fetchEmployeesEmails = async (req, res) => {
    try {
        const { first_name, last_name, organization_name, domain } = req.body;
        const result = await algoliaService.fetchEmployeesEmails(first_name, last_name, organization_name, domain);
        res.json(result);
    } catch (error) {
        console.error('Error in fetchEmployeesEmails:', error);
        res.status(500).send(`Error: ${error.message}`);
    }
};

exports.searchCompanies = async (req, res) => {
    try {
        const { keywordTags } = req.body;
        const result = await algoliaService.searchCompanies(keywordTags);
        res.json(result);
    } catch (error) {
        console.error('Error in searchCompanies:', error);
        res.status(500).json({ error: 'Error fetching data from Apollo API' });
    }
};