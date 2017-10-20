/**
 * This file handles all the routes for the category
 */

const express = require('express');
const router = express.Router();

// initializing category model
const Category = require('../models/category');

// gets a category by id
router.get('/:category_id', (req, res, next) => {

    Category.getCategoryById(req.params.category_id, (err, category) => {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(category);
        }
    });
});

// Get All categories
router.get('/', (req, res) => {

    Category.getCategories((err, categories) => {
        if (err) {
            res.send(err);
        }
        res.json(categories);
    });
});


// Create category route (stores data to db)
router.post('/create', (req, res, next) => {
    // gets data posted to this url
    const data = req.body;

    Category.createCategory(data, (err, category) => {
        if (err) {
            res.json({success: false, msg: 'Failed to create category'});
        } else {
            res.json({success: true, msg: 'Category created successfully.'});
        }
    })
});

// route to update a category
router.put('/update/:category_id', (req, res) => {
    const category_id = req.params.category_id;
    const data = req.body;

    Category.updateCategory(category_id, data, {}, (err, cv) => {
        // checks for errors
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

// orute to delete a category
router.delete('/delete/:category_id', (req, res) => {
    const category_id = req.params.category_id;

    Category.deleteCategory(category_id, (err, category) => {
        if (err) {
            res.send(err);
        }
        res.json({success: true, msg: 'The Category has been deleted successfully'});
    });
});

// Eanables this router to be used outside this class
module.exports = router;