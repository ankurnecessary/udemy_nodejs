const express = require('express');

const router = express.Router();

// Homepage route
router.get('/', (req, res, next) => {
  res.send('<h1>This is homepage</h1>');
});

module.exports = router;