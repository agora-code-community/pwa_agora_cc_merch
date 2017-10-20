// This file handles everything that is related to a single 
// product on the site

const mongoose = require('mongoose');
const config = require('../config/database');

// Product db schema
const orderSchema = mongoose.Schema({
	status: {
		type: String,
		enum: ['Pending', 'Processing', 'Paid'],
		required: true
	},
	lineItems:[
		{
			product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
			quantityBought: {type: Number},
			price: {type: String}
		}
	],
	orderInfo: {
		address: String,
		contact: String,
		receiver: String // we can pull the user's info here
	},
	created_at: {
        type: String,
        default: Date.now
    }
});

// enable the user to be used in external functions
const Order = module.exports = mongoose.model('Order', orderSchema);

/**
 * Retrieves an order by its id
 * @param id is the id of said product
 */
module.exports.getOrderById = (id, callback) => {
	Order.findById(id, callback);
};

/**
 * Retrieves all the orders in the system
 */
module.exports.getOrders = (callback, limit) => {
	Order.find(callback).limit(limit).sort([['created_at', 'ascending']]);
};

/**
 * Creates a product and saves it to the db
 * @param data Is the object containing data to be saved
 */
module.exports.createOrder = (data, callback) => {
	// creating a product object
	let add = {
		status: data.status,
		lineItems: [
			{
				product: data.product,
				quantityBought: data.quantity,
				price: data.price
			}
		],
		orderInfo: {
			address: data.address,
			contact: data.contact,
			receiver: data.receiver
		}
	};
	// saves to the db
	Order.create(add, callback);
};

/**
 * Updates a specified product
 * @param order_id the id of the product to be updated
 */
module.exports.updateOrder = (order_id, data, options, callback) => {
	// Query to find a specific product with this id
	const query = {_id: order_id};

	// creating a object containing the updated data
	let update = {
		status: data.status,
		lineItems: [
			{	// TODO: needs correcting
				product: data.product,
				quantityBought: data.quantityBought,
				price: data.price
			}
		],
		orderInfo: {
			address: data.address,
			contact: data.contact,
			receiver: data.receiver
		}
	};	
	// finds the product with id=product_id and updates it
	Order.findOneAndUpdate(query, update, options, callback);
};

/**
 * Deletes a particular product from the system
 * @param order_id Is the id of the product to be deleted
 */
module.exports.deleteOrder = (order_id, callback) => {
	// finds a order by its id and removes it
	Order.findByIdAndRemove(order_id, callback);
}