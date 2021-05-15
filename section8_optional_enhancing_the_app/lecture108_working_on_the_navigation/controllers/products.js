const ProductModel = require('../models/product');

// To render the form which adds product to the homepage
exports.getAddProduct = (req, res, next) => {
  
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('admin/add-product', {
    pageTitle: 'Add Product'
    , path: '/admin/add-product'
    , formsCSS: true
    , productCSS: true
    , activeShop: false
    , activeAddProduct: true
  });

};

// It actually adds product in the data source
exports.postAddProduct = (req, res, next) => {
  let product = new ProductModel(req.body.title);
  product.save();
  res.redirect("/");
};

// To show the products where needed to be shown
exports.getProducts = (req, res, next) => {
  ProductModel.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products
      , pageTitle: 'Shop'
      , path: '/'
      , areProdsAvailable: products.length > 0
      , formsCSS: false
      , productCSS: true
      , activeShop: true
      , activeAddProduct: false
    });
  });
};
