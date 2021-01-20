const path = require('path');

const express = require('express');

const homeRoute = require('./routes/home');
const userRoute = require('./routes/user');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoute);

app.use(homeRoute);

app.listen(3000);