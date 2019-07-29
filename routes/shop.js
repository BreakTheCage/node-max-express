const path = require("path");
const rootDir = require("../util/path");
const express = require("express");

const router = express.Router();

//get: exact match
router.get("/", (req, res, next) => {
  console.log("Inside '/' route!");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
