const products = [];

module.exports = class Product {
  constructor(title, price, description, imgUrl) {
    (this.title = title),
      (this.price = price),
      (this.description = description),
      (this.imgUrl = imgUrl);
  }
  save() {
    products.push(this);
  }
  static fetchAll() {
    return products;
  }
};
