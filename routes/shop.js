const express = require("express");
const productController = require('../controllers/products');
const router = express.Router();

//get: exact match
router.get("/", productController.getProducts);

module.exports = router;
