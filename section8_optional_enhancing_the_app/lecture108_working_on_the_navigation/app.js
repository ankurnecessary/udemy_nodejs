const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFoundController = require('./controllers/404');

// Intializing an express app
const app = express();

// Setting default templating engine for express
app.set('view engine', 'ejs');
app.set('views', 'views'); // Seting the path where pug templates will be looked for

// A middleware to handle form post requests
app.use(bodyParser.urlencoded({extended: false}));

// For serving static files like .css, .js etc.
app.use(express.static(path.join(__dirname, 'public')));

// Setting routes for administrator
app.use('/admin', adminRoutes.routes);

// Setting routes for the shoppers
app.use(shopRoutes);

// For setting 404 page not found for unknown routes
app.use(pageNotFoundController.pageNotFound);

// Server creation
app.listen(3000);
