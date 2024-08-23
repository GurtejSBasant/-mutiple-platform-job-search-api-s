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
            minExperience,
            maxExperience,
            company_highlight_latinx,
            jobtype,
            isPermanentHiring
        } = req.body;

        const searchParams = {
            query: query || "",
            page: page !== undefined ? page : 0,
            hitsPerPage: hitsPerPage !== undefined ? hitsPerPage : 10,
        };
        console.log("Search:",searchParams)

        const filters = [];
        const locations_for_search= "IN"
        

        // Add role filter
        if (role) {
            if (Array.isArray(role)) {
                filters.push(role.map(r => `role:${r}`).join(' OR '));
            } else {
                filters.push(`role:${role}`);
            }
        }

        // Add minExperience filter
        if (minExperience !== undefined) {
            filters.push(`min_experience:${minExperience}`);
        }
        console.log("filters:",filters)

        // Add other filters if provided
        if (company_team_size) filters.push(`company_team_size >= ${company_team_size}`);
        if (company_waas_stage) filters.push(`company_waas_stage:${company_waas_stage}`);
        if (company_parent_sector) filters.push(`company_parent_sector:"${company_parent_sector}"`);
        if (company_highlight_latinx !== undefined) filters.push(`company_highlight_latinx:${company_highlight_latinx}`);
        if (locations_for_search) filters.push(`locations_for_search:"${locations_for_search}"`);

        // Add remote filter based on location
        if (jobtype) {
            const jobtypeMap = {
                onsite: 'no',
                remote: 'only',
                hybrid: 'yes'
            };
            const remoteValue = jobtypeMap[jobtype.toLowerCase()];
            if (remoteValue) {
                filters.push(`remote:${remoteValue}`);
            }
        }
        console.log("filters2:",filters)
        // Add jobtype filter based on isPermanentHiring
        if (isPermanentHiring !== undefined) {
            const jobtype = isPermanentHiring ? 'fulltime' : 'contract';
            filters.push(`job_type:${jobtype}`);
        }

        console.log("filters3",filters)

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
        const data = await algoliaService.fetchCompanies(companiesId);
        console.log('Response data type:', typeof data);
        console.log('Response data keys:', Object.keys(data));

        // Extract jobs from all companies
        const allJobs = [];

        if (data && data.companies && Array.isArray(data.companies)) {
            console.log('Processing companies array');
            data.companies.forEach((company, index) => {
                console.log(`Processing company at index ${index}:`, company ? company.name : 'undefined');
                if (company && company.jobs && Array.isArray(company.jobs)) {
                    console.log(`Found ${company.jobs.length} jobs for ${company.name || 'unnamed company'}`);
                    company.jobs.forEach(job => {
                        // Determine work type
                        let workType;
                        if (job.remote === 'only') {
                            workType = 'remote';
                        } else if (job.remote === 'yes') {
                            workType = 'hybrid';
                        } else {
                            workType = 'onsite';
                        }

                        // Transform developerTechnologiesRequired
                        const transformedTechnologies = job.skills.map(skill => ({
                            id: skill.id,
                            technologyName: skill.name,
                            popularity: skill.popularity
                        }));

                        // Create a new object with the renamed and transformed keys
                        const transformedJob = {
                            ...job,
                            requirementName: job.title,
                            developerTechnologiesRequired: transformedTechnologies,
                            jobDescription: job.description,
                            averageBudget: {
                                min: job.salary_min,
                                max: job.salary_max
                            },
                            location: Array.isArray(job.locations) ? job.locations[0] : (job.locations || ''),
                            developerExperienceRequired: {
                                min: parseInt(job.pretty_min_experience) || 0,
                                max: null
                            },
                            workType: workType
                        };

                        // Delete the old keys
                        delete transformedJob.title;
                        delete transformedJob.skills;
                        delete transformedJob.description;
                        delete transformedJob.salary_min;
                        delete transformedJob.salary_max;
                        delete transformedJob.locations;
                        delete transformedJob.pretty_min_experience;
                        delete transformedJob.remote;

                        allJobs.push(transformedJob);
                    });
                }
            });
        } else {
            console.log('Unexpected data structure:', typeof data);
            throw new Error('Unexpected data structure received from API');
        }

        console.log('Total jobs extracted:', allJobs.length);
        res.json({ jobs: allJobs });
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