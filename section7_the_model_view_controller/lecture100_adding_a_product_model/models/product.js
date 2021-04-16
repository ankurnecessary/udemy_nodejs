const products = [];
module.exports = class Product {
  constructor(title){
    this.title = title;
  }

  /**
   * To add products
   */
  save() {
    products.push(this);
  }

  /**
   * To get the list of all the products
   */
  static fetchAll() {
    return products;
  }
}