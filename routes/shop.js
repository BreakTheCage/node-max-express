const express = require("express");
const shopController = require('../controllers/shop');
const router = express.Router();

//Link Title: Shop
router.get("/", shopController.getProducts);
//Link Title: Products
router.get("/products", shopController.getProducts);
//Link Title: Cart
router.get("/cart", shopController.getProducts);
//Link Title: Checkout
router.get("/checkout", shopController.getProducts);



module.exports = router;
