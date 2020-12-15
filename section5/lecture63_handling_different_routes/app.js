const http = require('http');
const express = require('express');

// Intializing an express app
const app = express();

// Generic middleware - it will fire on every request
// app.use((req, res, next) => { // Even this line will work
app.use('/', (req, res, next) => {
  console.log('This always runs');
  next();
})

// Add product page
app.use('/add-product', (req, res, next) => {
  res.send('<h1>This is add product page</h1>');
})

// Homepage route
app.use('/',(req, res, next) => {
  res.send('<h1>This is homepage</h1>');
})

// Server creation
app.listen(3000);
