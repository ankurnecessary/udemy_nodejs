const express = require('express');
const bodyParser = require('body-parser');

// Intializing an express app
const app = express();

// A middleware to handle form post requests
app.use(bodyParser.urlencoded({extended: false}));

// Add product page
app.use('/add-product', (req, res, next) => {
  res.send('<form method="post" action="/product"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// To handle the response of form
app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

// Homepage route
app.use('/',(req, res, next) => {
  res.send('<h1>This is homepage</h1>');
});

// Server creation
app.listen(3000);
