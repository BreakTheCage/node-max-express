const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
      //refere to name of file to render inside views folder
      pageTitle: "Add Product",
      label: "Insert Your Favorit Book",
      path: "/admin/add-product",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
  };