const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// getting all the products from the product list
router.get("/", getProducts);

// getting a single product from the product list
router.get("/:id", getProduct);

// creating a product from the product list
router.post("/", createProduct);

// update a product from product list
router.put("/:id", updateProduct);

// Delete a product from the product list
router.delete("/:id", deleteProduct);

module.exports = router;
