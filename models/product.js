// This file handles everything that is related to a single 
// product on the site

const mongoose = require('mongoose');
const config = require('../config/database');

// Product db schema
const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	details: {
		colors: [{type: String}],  // is an arrat to contain multiple colors
		sizes: [{type: String}]  // is an arrat to contain multiple sizes
		// weight: String
	},
	// quantity:{   // available stock
	// 	type: String,
	// 	required: true,
	// }, 
	price: {
		type: String,
		required: true
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category'
	},
	created_at: {
        type: String,
        default: Date.now
    }
});

// enable the user to be used in external functions
const Product = module.exports = mongoose.model('Product', productSchema);

/**
 * Retrieves a product by its id
 * @param id is the id of said product
 */
module.exports.getProductById = (id, callback) => {
	Product.findById(id, callback);
};

/**
 * Retrieves all the products in the system
 */
module.exports.getProducts = (callback, limit) => {
	Product.find(callback).limit(limit).sort([['created_at', 'ascending']]);
};

/**
 * Retrieves products by category
 * @param category_id the id of the category of a certain product
 */
module.exports.getProductByCategory = (category_id, callback,limit) => {
	// query to retrieve all products of a specified category
	const query = {category: category_id};

	Product.find(query, callback).limit(limit).sort([['created_at', 'ascending']]);
};

/**
 * Creates a product and saves it to the db
 * @param data Is the object containing data to be saved
 */
module.exports.createProduct = (data, callback) => {
	// creating a product object
	let add = {
		name: data.name,
		description: data.description,
		details: {
			colors: [data.color],
			sizes: [data.size]
			// weight: data.weight
		},
		//quantity:data.quantity, 
		price: data.price,
		category: data.category
	};
	console.log(typeof add.details.colors);
	// saves to the db
	Product.create(add, callback);
};

/**
 * Updates a specified product
 * @param product_id the id of the product to be updated
 */
module.exports.updateProduct = (product_id, data, options, callback) => {
	// Query to find a specific product with this id
	const query = {_id: product_id};

	// creating a object containing the updated data
	let update = {
		name: data.name,
		description: data.description,
		details: {
			colors: [data.color],
			sizes: [data.size]
			// weight: data.weight
		},
		//quantity:data.quantity, 
		price: data.price,
		category: data.category
	};	
	// finds the product with id=product_id and updates it
	Product.findOneAndUpdate(query, update, options, callback);
};

/**
 * Deletes a particular product from the system
 * @param product_id Is the id of the product to be deleted
 */
module.exports.deleteProduct = (product_id, callback) => {
	// finds a product by its id and removes it
	Product.findByIdAndRemove(product_id, callback);
}