const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

// Add product page
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// To handle the response of form
router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
