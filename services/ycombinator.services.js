const httpUtil = require('../utils/ycombinator.utils');
const config = require('../config/ycombinator.config');

exports.search = async (searchQuery, page, hitsPerPage) => {
    const searchParams = {
        query: searchQuery,
        page: page,
        filters: "",
        attributesToRetrieve: ["company_id"],
        hitsPerPage: hitsPerPage,
        clickAnalytics: true,
        distinct: true
    };

    const payload = {
        requests: [
            {
                indexName: "WaaSPublicCompanyJob_production",
                params: new URLSearchParams(searchParams).toString()
            }
        ]
    };

    const response = await httpUtil.post(config.algolia.url, payload, config.algolia.headers);
    return response.results[0].hits.map(hit => hit.company_id);
};

exports.fetchCompanies = async (companiesId) => {
    const payload = { ids: companiesId };
    return httpUtil.post(config.workatastartup.url, payload, config.workatastartup.headers);
};

exports.fetchEmployees = async (q_organization_domains, position_title, person_seniorities) => {
    const payload = {
        api_key: config.apollo.apiKey,
        q_organization_domains,
        position_title,
        person_seniorities,
        page: 1,
        limit: 100
    };
    return httpUtil.post(config.apollo.peopleSearchUrl, payload, config.apollo.headers);
};

exports.fetchEmployeesEmails = async (first_name, last_name, organization_name, domain) => {
    const payload = {
        api_key: config.apollo.apiKey,
        first_name,
        last_name,
        organization_name,
        domain,
        reveal_personal_emails: true
    };
    return httpUtil.post(config.apollo.peopleMatchUrl, payload, config.apollo.headers);
};

exports.searchCompanies = async (keywordTags) => {
    const payload = {
        api_key: config.apollo.apiKey,
        organization_num_employees_ranges: ['50,200', '20,50'],
        q_organization_keyword_tags: keywordTags,
        page: Math.floor(Math.random() * 10) + 1,
        per_page: Math.floor(Math.random() * 10) + 1,
        organization_locations: ['India']
    };
    return httpUtil.post(config.apollo.companySearchUrl, payload, config.apollo.headers);
};