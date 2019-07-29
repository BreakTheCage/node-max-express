const express = require('express');

const router = express.Router();

router.use('/favicon.ico' ,(req, res, next) => { });

router.get('/add-product' ,(req, res, next) => {
    console.log("Inside '/add-product' route!");
    res.send('<form method="POST" action="product"><input type="text" name="title" ><button type="submit" >Add Product</button></form>');
});

router.post('/product' ,(req, res, next) => {
    console.log("Inside '/product' route!");
    console.log("Inside '/product' route! => request body: ",req.body);
    res.redirect('/')
});

module.exports = router;