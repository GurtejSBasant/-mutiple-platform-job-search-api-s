const algoliaService = require('../services/ycombinator.services');

exports.algoliaSearch = async (req, res) => {
    try {
        const {
            query,
            page,
            hitsPerPage,
            role,
            company_team_size,
            company_waas_stage,
            company_parent_sector,
            location,
            min_experience_range,
            company_highlight_latinx,
            locations_for_search,
            job_type
        } = req.body;

        const searchParams = {
            query: query || "",
            page: page !== undefined ? page : 0,
            hitsPerPage: hitsPerPage !== undefined ? hitsPerPage : 10,
        };

        const filters = [];

        // Add role filter
        if (role) {
            if (Array.isArray(role)) {
                filters.push(role.map(r => `role:${r}`).join(' OR '));
            } else {
                filters.push(`role:${role}`);
            }
        }

        // Add min_experience filter
        if (min_experience_range) {
            const experienceMap = {
                "0 to 1 Year": 0,
                "1 to 3 Years": 1,
                "3 to 5 Years": 3,
                "5 to 8 Years": 5,
                "10+ Years": 10
            };
            const minExperience = experienceMap[min_experience_range];
            if (minExperience !== undefined) {
                filters.push(`min_experience:${minExperience}`);
            }
        }

        // Add other filters if provided
        if (company_team_size) filters.push(`company_team_size >= ${company_team_size}`);
        if (company_waas_stage) filters.push(`company_waas_stage:${company_waas_stage}`);
        if (company_parent_sector) filters.push(`company_parent_sector:"${company_parent_sector}"`);
        if (company_highlight_latinx !== undefined) filters.push(`company_highlight_latinx:${company_highlight_latinx}`);
        if (locations_for_search) filters.push(`locations_for_search:"${locations_for_search}"`);
        if (job_type) filters.push(`job_type:"${job_type}"`);

        // Add remote filter based on location
        if (location) {
            const locationMap = {
                onsite: 'no',
                remote: 'only',
                hybrid: 'yes'
            };
            const remoteValue = locationMap[location.toLowerCase()];
            if (remoteValue) {
                filters.push(`remote:${remoteValue}`);
            }
        }

        // Combine all filters with AND operator
        if (filters.length > 0) {
            searchParams.filters = filters.join(' AND ');
        }

        const result = await algoliaService.search(searchParams);
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