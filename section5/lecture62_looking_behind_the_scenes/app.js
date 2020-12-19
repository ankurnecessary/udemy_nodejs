const http = require('http');
const express = require('express');

// Intializing an express app
const app = express();

// My first middleware
app.use((req, res, next) => {
  console.log('I am inside first middleware');
  next(); // next() helps in firing next middleware inline so it will fire second middleware after first middleware
});

// Second middleware
app.use((req, res, next) => {
  console.log('I am inside second middleware');
  res.send('<h1>Hello from Express!</h1>');
})

// Server creation
app.listen(3000);