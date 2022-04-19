const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    // Do the magic
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
    // Do the magic
  },

  // Create -  Method to store
  store: (req, res) => {
    res.send(req.body);
  },

  // Update - Form to edit
  edit: (req, res) => {
    // Do the magic
  },
  // Update - Method to update
  update: (req, res) => {
    res.send(req.body);
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    res.send("Borré el producto: " + req.params.id);
  },
};

module.exports = controller;
