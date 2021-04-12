const products = [];

// To render the form which adds product to the homepage
exports.getAddProduct = (req, res, next) => {
  
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
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
  products.push({ title: req.body.title });
  res.redirect("/");
};

// To show the products where needed to be shown
exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products
    , pageTitle: 'Shop'
    , path: '/'
    , areProdsAvailable: !!products.length
    , formsCSS: false
    , productCSS: true
    , activeShop: true
    , activeAddProduct: false
  });
};