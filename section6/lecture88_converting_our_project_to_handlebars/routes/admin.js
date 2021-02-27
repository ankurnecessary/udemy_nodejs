const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

// Add product page
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product'});
});

// To handle the response of form
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
