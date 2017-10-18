// This file handles everything that is related to a single 
// product on the site

const mongoose = require('mongoose');
const config = require('../config/database');

// Product db schema
const orderSchema = mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    lineItems: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number },
        price: { type: Number }
    }],
    orderInfo: {
        address: String,
        receiver: String,
    },
    created_at: {
        type: String,
        default: Date.now
    }
});

// enable the user to be used in external functions
const Order = module.exports = mongoose.model('Order', orderSchema);