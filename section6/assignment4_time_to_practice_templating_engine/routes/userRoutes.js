const express = require('express');

const router = express.Router();
const users = [];

// users post request
router.post('/users', (req, res) => {
  users.push(req.body.name);
  res.redirect('/admin/users');
})

// users get route
router.get('/users', (req, res) => {
  res.render('users', { 
    users
    , path: '/admin/users'
    , pageTitle: 'User list'
  });
})

module.exports = router;