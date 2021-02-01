const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

// Homepage route
router.get('/', (req, res, next) => {
  res.render('shop')
});

module.exports = router;