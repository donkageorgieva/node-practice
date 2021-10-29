const fs = require("fs");

const path = require("path");
const { deflateRawSync } = require("zlib");
const rootDir = require("../util/path");
module.exports = class Product {
  constructor(title, price, description, imgUrl) {
    (this.title = title),
      (this.price = price),
      (this.description = description),
      (this.imgUrl = imgUrl);
  }
  save() {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (e) => {
        console.log(e);
      });
    });
  }
  static fetchAll(cb) {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, data) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(data));
    });
  }
};
