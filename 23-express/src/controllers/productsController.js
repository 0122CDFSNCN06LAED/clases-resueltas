const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render("products", {
      products,
    });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    const id = req.params.id;

    const product = products.find((p) => id == p.id);

    res.render("detail", {
      product,
    });
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    const lastIndex = products.length - 1;
    const lastProduct = products[lastIndex];
    const biggestId = lastProduct ? lastProduct.id : 0;
    const newId = biggestId + 1;

    const product = {
      ...req.body,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      id: newId,
    };

    products.push(product);

    const jsonTxt = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, jsonTxt, "utf-8");

    res.redirect("/products");
  },

  // Update - Form to edit
  edit: (req, res) => {
    const id = req.params.id;

    const product = products.find((p) => id == p.id);

    res.render("product-edit-form", {
      product,
    });
  },
  // Update - Method to update
  update: (req, res) => {
    const id = req.params.id;

    const product = products.find((p) => id == p.id);

    Object.assign(product, {
      ...req.body,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
    });

    const jsonTxt = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, jsonTxt, "utf-8");

    res.redirect("/products/" + id);
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const id = req.params.id;
    const productIndex = products.findIndex((p) => id == p.id);

    products.splice(productIndex, 1);

    const jsonTxt = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, jsonTxt, "utf-8");

    res.redirect("/products");
  },
};

module.exports = controller;
