const express = require('express');
const apiRoutes = require('./api');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set static folder for front-end
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api', apiRoutes);

// Handle non-API routes (serve the index.html file)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
