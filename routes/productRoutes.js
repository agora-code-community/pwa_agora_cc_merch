/**
 * This file handles all the routes dealing with a
 * single product
 */

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const Product = require('../models/product');

// setting storage engine for multer
const storage = multer.diskStorage({
    destination: './uploads',
    filename: function(req, file, callback) {
        // renames file to randomString-timestamp.ext
        callback(null, randomFilename() + '-' + Date.now() + path.extname(file.originalname));
    }
});

// initializing upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 5000000}, // 5MB fileSize limit
    fileFilter: function(req, file, callback) {
        checkFileType(file, callback);
    }
});

/**
 * Creates a random string to use to rename the uploaded files
 */
function randomFilename() {
    let randomStr = Math.random().toString(36).substr(2, 12);
//    let randomStr =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
   return randomStr;
}

/**
 * Checks the type of file to make sure only images are uploaded
 * @param {*} file the file being checked
 * @param {*} callback callback function
 */
function checkFileType(file, callback) {
    // allowed extensions
    const filetypes = /jpeg|jpg|png/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // check mime
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname) {
        return callback(null, true);
    } else {
        callback('Error: Images only');
    }
}

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
router.post('/create', upload.array('pictures[]', 5), (req, res, next) => {
    const product = req.body; // gets data sent to this URL
    const pictures = req.files;  // holds the image files

    // uploads if pictures were sent
    if(pictures) {
        let pics = [];
        // iterate through the pictures to extract name and path to store in db
        for (let i = 0; i < pictures.length; i++) {
            pics[i] = { 'image_name': pictures[i].filename, 'image_path': pictures[i].path };
        }

        // adding the image details to the product's details
        product.images = pics;
    }

    // create a new product and save to db
    Product.createProduct(product, (err, cv) => {
        // check for errors
        if (err) {
            res.json({success: false, msg: 'Failed to create product, please try again.'});
        } else {
            res.json({success: true, msg: 'Product successfully created!'});
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
        res.json({success: true, msg: 'The Product has been deleted successfully'});
    });
});


module.exports = router;