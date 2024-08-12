const express = require('express');
const bodyParser = require('body-parser');
const apnajobRoutes = require('./routes/apna.jobroutes');
const naukrijobRoutes = require('./routes/naukri.routes');
const founditjobRoutes = require('./routes/foundit.routes');
const jobforherjobRoutes = require('./routes/jobforher.routes');

const app = express();

app.use(bodyParser.json());
app.use('/apna', apnajobRoutes);
app.use('/naukri', naukrijobRoutes);
app.use('/foundit', founditjobRoutes);
app.use('/jobforher', jobforherjobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});