const path = require("path");
const rootDir = require("../util/path");
const express = require("express");

const router = express.Router();
const adminData = require("./admin");

//get: exact match
router.get("/", (req, res, next) => {
  console.log("Inside Shop '/' route!");
  console.log("Shop products: ", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  // res.render("shop", { prods: products, pageTitle: "Shop", path: "/shop" });//pug
  const hasProducts = products.length > 0;
  console.log("hasProducts => ", hasProducts);
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: hasProducts,
    activeShop: true,
    productCSS: true,
    layout: false
  }); //handlebars
});

module.exports = router;
