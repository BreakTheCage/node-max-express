const express = require('express');

const router = express.Router();

//get: exact match
router.get('/' ,(req, res, next) => {
    console.log("Inside '/' route!");
    res.send('<h1>Hello from express</h1>');
});

module.exports = router;

