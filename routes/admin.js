const express = require("express");
const path = require("path");
const adminController = require('../controllers/admin');
const router = express.Router();

router.use("/favicon.ico", (req, res, next) => {});

router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);

//get: Admin Products
router.get("/products");

module.exports = router;
