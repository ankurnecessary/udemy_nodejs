const fs = require('fs');
const path = require('path');

// Path to products.json file
const productPath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  fs.readFile(productPath, (err, fileContent) => {

    if (err) return cb([]);
    cb(JSON.parse(fileContent));

  });
}

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  /**
   * To add products
   */
  save() {

    // Reading existing products in the file products.json
    getProductsFromFile((products) => {
      
      // Pushing new product inside the array
      products.push(this);

      // Writing updated product data to products.json
      fs.writeFile(productPath, JSON.stringify(products), (err) => {
        console.log(err);
      })

    });

  }

  /**
   * To get the list of all the products
   */
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}
