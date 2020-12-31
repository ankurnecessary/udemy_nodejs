const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Intializing an express app
const app = express();

// A middleware to handle form post requests
app.use(bodyParser.urlencoded({extended: false}));

// Setting routes for administrator
app.use(adminRoutes);

// Setting routes for the shoppers
app.use(shopRoutes);

// For setting 404 page not found for unknown routes
// app.use('/',(req, res, next) => { We could have used this
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

// Server creation
app.listen(3000);
