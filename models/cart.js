// This file defines the cart data model and its related functions

const mongoose = require('mongoose');
const config = require('../config/database');

// cart-item schema
const CartItemSchema = mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    qty: { type: Number, default: 1 },
    description: { type: String },
    subTotal: { type: Number },
    image: { 
        image_name: String,
		image_path: String
     }
});

// Cart db schema
const cartSchema = new mongoose.Schema({
    user: { // IDs the own of the cart
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    total: { type: Number },
    items: [ CartItemSchema ],
    itemCount: { type: Number, default: 0 }
});

const Cart = module.exports = mongoose.model('Cart', cartSchema);

// Functions Related to cart activities

/**
 * Retrieves a cart that belongs to a particular user
 */
module.exports.getCartByUser = (user_id, callback) => {
    // query to retrieve the cart corresponding to this user_id
	const query = {user: user_id};
    
    Cart.findOne(query, callback);
};

/**
 * Retrieves acart by its id
 */
module.exports.getCartById = (id, callback) => {
    Cart.findById(id, callback);
}

module.exports.addItem = (item, user_id, callback) => {
    let cart;

    Cart.findOne({user: user_id}, (err, res) => {
        if(err) throw err;

        if(!res) {
           // console.log('Cart was not found, creating new cart');

            // create new cart
            cart = new Cart({
                user: user_id
            });

            add(cart, item, callback);
        }

        if(res) {
            console.log('Existing cart was found, starting to use it');
            cart = res;

            add(cart, item, callback);
        }
    });

};

/**
 * Removes item from cart only if items count is greater than 0
 */
module.exports.removeItem = (id, user_id, callback) => {
    // check if user has a cart
    Cart.getCartByUser(user_id, (err, cart) => {
        if(err) throw err;

        if(!cart) {
            return false;
        } else {
            // remove item from cart only if count is greater than 0
            if(cart.items.length > 0) {
                for(let index = 0; index <= cart.items.length; index ++) {
                    let item = cart.items[index];

                    if(item._id == id) {

                        if(cart.itemCount > 0) {
                            // decrease total item count
                            cart.itemCount -= 1;
                        }

                        if(item.qty > 1) {
                            item.qty -= 1;
                            cart.total -= item.price;

                            break;
                        } else if(item.qty === 1) {
                            cart.total -= cart.items[index].price;
                            cart.items.splice(index, 1); // remove entire item from list

                            break;
                        } else if(item.qty < 0) {
                            item.qty = 1
                        }
                    }
                }
            }
            cart.save(callback); // save the updated cart
        }
    });
};

// Deletes the entire cart belonging to a particular user
module.exports.removeAll = (user_id, callback) => {
    const query = {user: user_id};
    Cart.remove(query, callback);
};

// adds an item to the cart
function add(cart, item, callback) {
    let itemExists = false;

    // increase current item quantity if it exists
    cart.items.forEach(function(obj) {
        if(obj._id == item._id) {
            obj.qty += item.qty;
            itemExists = true;
            console.log('evaluated');
        }
    });

    // increase total item count
    cart.itemCount += item.qty;

    // add item if it doesn't exist
    if(!itemExists) {
        cart.items.push(item);
    }

    // recaluculate totals
    cart.total = 0;
    cart.items.forEach(function(item) {
        item.total = item.price * item.qty;
        cart.total += item.total; 
    });

    cart.save(callback);
}


