const express = require('express');

const app = express();

// STEP 2
/*app.use((req, res, next) => {
  console.log('This is from first middleware');
  next();
})

app.use((req, res, next) => {
  res.send('<h1>This is a test</h1>')
})*/

// STEP 3
app.use('/users', (req, res, next) => {
  res.send('<h1>This is route /users');
});

app.use('/', (req, res, next) => {
  res.send('<h1>This is home route</h1>');
});

app.listen(3000);