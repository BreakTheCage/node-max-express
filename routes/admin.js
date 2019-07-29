const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();

router.use("/favicon.ico", (req, res, next) => {});

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("Inside 'GET: admin/add-product' route!");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log("Inside 'POST: admin/add-product' route!");
  console.log(
    "Inside 'POST: admin/add-product' route! => request body: ",
    req.body
  );
  res.redirect("/");
});

module.exports = router;
