const path = require('path');

const express = require('express');

// const rootDir = require('../utils/path');

const productsController = require('../controllers/products');

const router = express.Router();

// Add product page
router.get('/add-product', productsController.getAddProduct);

// To handle the response of form
router.post('/add-product', productsController.postAddProduct);

exports.routes = router;
