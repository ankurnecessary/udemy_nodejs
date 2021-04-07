const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const homeRoute = require('./routes/homeRoute');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// BodyParser to parse post data
app.use(bodyParser.urlencoded({ extended: false }));

// To make public files importable in views
app.use(express.static(path.join(__dirname, 'public')));

// home route
app.use(homeRoute);

// users post request
app.use('/admin', userRoutes);

// For handling unknown routes
app.use((req, res) => {
  res.status(404).write('<h1>Page not found</h1>');
  res.end();
})

app.listen(3000);