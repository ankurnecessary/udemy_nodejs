const express = require('express');

const router = express.Router();

// Add product page
router.get('/add-product', (req, res, next) => {
  res.send('<form method="post" action="/admin/product"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// To handle the response of form
router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
