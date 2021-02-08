const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

// Homepage route
router.get('/', (req, res, next) => {
  const products = adminData.products; // Array of objects
  res.render('shop', {prods: products, title: 'Shop'});
});

module.exports = router;
