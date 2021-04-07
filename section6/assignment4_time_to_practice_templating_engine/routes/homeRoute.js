const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    path: '/'
    , pageTitle: 'Home page'
  });
});

module.exports = router;