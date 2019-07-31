const express = require("express");
const path = require("path");
const productControllers = require('../controllers/products');
const router = express.Router();

router.use("/favicon.ico", (req, res, next) => {});

router.get("/add-product", productControllers.getAddProduct);

router.post("/add-product", productControllers.postAddProduct);

module.exports = router;
