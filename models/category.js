// This file handles everything that is related to a single 
// category on the site

const mongoose = require('mongoose');
const config = require('../config/database');

// Product db schema
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: Date.now
    }
});

/** 
 * Get category by it's id
 * @param id is the category's unique id
 * */
module.exports.getCategoryById = (id, callback) => {
	Category.findById(id, callback);
};

/**
 * Get all categories
 * @param limit The number of caegories to pull from db at a time
 */ 
module.exports.getCategories = (callback, limit) => {
	Category.find(callback).limit(limit).sort([['created_at', 'ascending']]);
};

/**
 * Creating a category - adding to the db
 * @param data  this is the object sent from the post request
 * @param callback  allows for async behavior
 */
module.exports.createCategory = (data, callback) => {
	// Object to with user defined fields to add to db
	const add = {
		name: data.name,
		description: data.description
	};
	Category.create(add, callback);  // saves data to db

};

/**
 * Updates a category with the passed id
 * @param category Is the object containe=ing data to be updated
 */
module.exports.updateCategory = (category_id, category, options, callback) => {
	// Query to find a specific category with this id
	const query = {_id: category_id};

	// object containing updates
	const update = {
		name: category.name,
		description: category.description
	};
	// finds the category with id=category.id and updates it
	Category.findOneAndUpdate(query, update, options, callback);
};

/**
 * Deletes a particular category from the system
 * @param category_id Is the id of the category to be deleted
 */
module.exports.deleteCategory = (category_id, callback) => {
	// finds a category by its id and removes it
	Category.findByIdAndRemove(category_id, callback);
}

const Category = module.exports = mongoose.model('Category', categorySchema);

