const express = require('express');

const router = express.Router();

router.use('/favicon.ico' ,(req, res, next) => { });

// /admin/add-product => GET
router.get('/add-product' ,(req, res, next) => {
    console.log("Inside 'GET: admin/add-product' route!");
    res.send('<form method="POST" action="/admin/add-product"><input type="text" name="title" ><button type="submit" >Add Product</button></form>');
});

// /admin/add-product => POST
router.post('/add-product' ,(req, res, next) => {
    console.log("Inside 'POST: admin/add-product' route!");
    console.log("Inside 'POST: admin/add-product' route! => request body: ",req.body);
    res.redirect('/')
});

module.exports = router;