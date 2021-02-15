const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Intializing an express app
const app = express();

// Setting default templating engine for express
app.set('view engine', 'pug');
app.set('views', 'views'); // Setting the path where pug templates will be looked for

// A middleware to handle form post requests
app.use(bodyParser.urlencoded({extended: false}));

// For serving static files like .css, .js etc.
app.use(express.static(path.join(__dirname, 'public')));

// Setting routes for administrator
app.use('/admin', adminData.routes);

// Setting routes for the shoppers
app.use(shopRoutes);

// For setting 404 page not found for unknown routes
// app.use('/',(req, res, next) => { We could have used this
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', {pageTitle: 'Page Not Found!'});
});

// Server creation
app.listen(3000);
