const ProductModel = require('../models/product');

// To render homepage
exports.getIndex = (req, res, next) => {
  ProductModel.fetchAll((products) => {
    res.render('shop/index', {
      prods: products
      , pageTitle: 'Shop'
      , path: '/'
    });
  });
}

// To show the products where needed to be shown
exports.getProducts = (req, res, next) => {
  ProductModel.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products
      , pageTitle: 'All Products'
      , path: '/products'
    });
  });
};

// To render cart
exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  })
}


// To render checkout page
exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  })
}