/**
 * This file handles all the routes dealing with a
 * single product
 */

const express = require('express');
const router = express.Router();

const Product = require('../models/product');

//Register
router.post('/new-entry', (req, res, next) => {
    let newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imagePath: req.body.imagePath
    });

    Product.addProduct(newProduct, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'failed'+err });
        } else {
            res.json({ success: true, msg: 'item added' });
        }
    });
});

module.exports = router;