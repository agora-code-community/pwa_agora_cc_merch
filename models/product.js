// This file handles everything that is related to a single 
// product on the site

const mongoose = require('mongoose');
const config = require('../config/database');

// Product db schema
const productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true;
	},
	description: {
		type: String,
		required: true;
	},
	details: {
		color: String,
		Size: String,
		weight: String
	},
	quantity:{   // available stock
		type: String,
		required: true;
	}, 
	price: {
		type: Number,
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
