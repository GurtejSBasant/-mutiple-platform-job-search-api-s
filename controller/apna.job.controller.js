const apnaService = require('../services/apna.services');

exports.scrapeJobs = async (req, res) => {
    const { location, text } = req.body;
  
    if (!location || !text) {
      return res.status(400).json({ error: 'Location and text are required.' });
    }
  
    try {
      const data = await apnaService.fetchJobs(location, text);
      res.status(200).json({
        statusCode: 200,
        data: data
      });
    } catch (error) {
      console.error('Error in jobController.scrapeJobs:', error);
      res.status(error.response?.status || 500).json({
        error: 'An error occurred while fetching data from Apna.',
        details: error.message,
        statusCode: error.response?.status,
        url: error.config?.url,
        params: error.config?.params
      });
    }
  };