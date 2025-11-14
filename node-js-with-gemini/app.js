// 1. Import the express package
const express = require('express');
const path = require('path');

// 2. Create an Express application
const app = express();
// Use the PORT environment variable provided by Cloud Run, or default to 3000 for local development.
const port = process.env.PORT || 3000;

// 3. Set EJS as the view engine
// This tells Express to use EJS for rendering templates.
app.set('view engine', 'ejs');

// By default, Express looks for templates in a 'views' folder.
// The line below was causing the error because your templates are in 'views', not 'templates'.

// 4. Create a route
// This handles GET requests to the homepage ('/')
app.get('/', (req, res) => {
  // res.render() will look for 'index.ejs' in the 'views' folder
  // We can pass data to the template in an object
  res.render('index', { 
    title: 'Homepage', 
    message: 'Hello from EJS and Express!' 
  });
});

// 4a. Create a route for the greeting
app.get('/greeting', (req, res) => {
  // Get the 'name' from the query string (e.g., /greeting?name=John)
  const name = req.query.name || 'Guest';
  res.render('greeting', { name: name });
});

// This route handles a URL like /greeting/John
app.get('/greeting/:name', (req, res) => { 
  // Get the 'name' from the URL parameters
  const name = req.params.name || 'Guest';
  res.render('greeting', { name: name });
});

// 5. Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Export the app for testing purposes
module.exports = app;