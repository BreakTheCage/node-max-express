const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const products = [];
router.use("/favicon.ico", (req, res, next) => {});

router.get("/add-product", (req, res, next) => {
  // /admin/add-product => GET
  console.log("Inside 'GET: admin/add-product' route!");

  res.render("add-product", { //refere to name of file to render inside views folder
    pageTitle: "Add Product",
    label: "Insert Your Favorit Book",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  }); 
});
router.post("/add-product", (req, res, next) => {
  // /admin/add-product => POST
  console.log("Inside 'POST: admin/add-product' route!");
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
