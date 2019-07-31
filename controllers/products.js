const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", { //refere to name of file to render inside views folder
        pageTitle: "Add Product",
        label: "Insert Your Favorit Book",
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    }); 
}

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect("/");
}

exports.getProducts = (req, res, next) => {
    res.render("shop", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
        layout: false
    }); 
}