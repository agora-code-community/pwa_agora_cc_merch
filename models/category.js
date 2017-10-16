// This file handles everything that is related to a single 
// category on the site

const mongoose = require('mongoose');
const config = require('../config/database');

// Product db schema
const categorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true;
	},
	description: {
		type: String,
		required: true;
	},
	created_at: {
        type: String,
        default: Date.now
    }
});

// enable the user to be used in external functions
const Category = module.exports = mongoose.model('Category', categorySchema);
