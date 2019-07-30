const path = require("path");
const rootDir = require("../util/path");
const express = require("express");

const router = express.Router();
const adminData = require('./admin');

//get: exact match
router.get("/", (req, res, next) => {
  console.log("Inside Shop '/' route!");
  console.log('Shop products: ', adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
