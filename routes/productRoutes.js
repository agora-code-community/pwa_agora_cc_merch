/**
 * This file handles all the routes dealing with a
 * single product
 */

const express = require('express');
const router = express.Router();

const Product = require('../models/product');

// get all products
router.get('/', (req, res) => {

    Product.getProducts((err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
});

// get all product of a particular category
router.get('/product-of-category/:category_id', (req, res, next) => {
    const category_id = req.params.category_id;

    Product.getProductByCategory(category_id, (err, productsOfCategory) => {
        if (err) res.send(err);
        // returns the products of that category
        res.json(productsOfCategory);
    });
});

// gets a single product
router.get('/:product_id', (req, res, next) => {

    Product.getProductById(req.params.product_id, (err, product) => {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(product);
        }
    });
});

// create product  route (stores data in db)
router.post('/create', (req, res, next) => {
    const product = req.body; // gets data sent to this URL
    
    Product.createProduct(product, (err, cv) => {
        // check for errors
        if (err) {
            res.json({success: false, msg: 'Failed to create product, please try again.'});
        } else {
            res.json({success: true, msg: 'Product successfully added'});
        }
    });
});

// Update a particular product
router.put('/update/:product_id', (req, res) => {
    const product_id = req.params.product_id;
    const product = req.body;
    Product.updateProduct(product_id, product, {}, (err, product) => {
        if (err) {
            res.send(err);
        }
        // what is returned
        res.json({
            success: true,
            msg: 'Successfully updated'
        });
    });
});


// Delete a product
router.delete('/delete/:product_id', (req, res) => {
    const product_id = req.params.product_id;
    Product.deleteProduct(product_id, (err, product) => {
        if (err) {
            res.send(err);
        }
        // returned if success
        res.json({success: true, msg: 'A Product has been deleted successfully'});
    });
});


module.exports = router;