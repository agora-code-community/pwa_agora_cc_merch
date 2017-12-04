/**
 * This file handles all the routes dealing with the cart
 */

const express = require('express');
const router = express.Router();
const passport = require('passport');

const Cart = require('../models/cart');
const Product = require('../models/product');

// Most if not all routes here will be protected routes such that
// a user has to be authenticated before access a route.

// get cart (remember to use token not id directly)
router.get('/show-cart/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const user_id = req.user._id;

    Cart.getCartByUser(user_id, (err, cart) => {
        if (err) res.send(err);
        // otherwise return cart
        res.json(cart);
    });
});

// adds items to cart
router.post('/add-to-cart', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const item = req.body; // post all product dits may include qty in future
    const user = req.user._id; // user's id from passport auth

    // create cart item
    let cartItem = {
        _id:         item._id,
        image:       item.images[0],
        title:       item.name,
        price:       item.price,
        qty:         item.qty,
        description: item.description
    }; 

    // add item
    Cart.addItem(cartItem, user, (err, data) => {
        if(err) next(err);

        res.json({success: true, Cart: data});
    });
});

// used in the navbar cart badge.
router.get('/get-item-count', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const user = req.user._id;  // the user's id

    Cart.getCartByUser(user, (err, cart) => {
        if (err) next(err);  // error handling

       if (!cart) {
           return res.json({success: false});
       }

       if (cart) {
           return res.json({success: true, count: cart.itemCount});
       }
    });
});

// delete an item from the cart
router.delete('/delete-item/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const item_id = req.params.id;  // the id of the ite, to deleted
    const user = req.user._id; // the user's id - owner of cart

    Cart.removeItem(item_id, user, (err, data) => {
        if(err) throw err;

        if(data) {
            res.json({success: true, msg: 'Item deleted.', cart: data});
        } else {
            res.sendStatus(404);
        }
    })
});

// reomves all items from the cart. Insensually deleting the entire cart documnet
router.delete('/delete-all', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const user_id = req.user._id;  // user's id from auth

    Cart.removeAll(user_id, (err, data) => {
        if(err) throw err;

        if(data) {
            res.json({success: true, msg:'Deleted successfully.'});
        } else {
            res.sendStatus(404); // not found
        }
    })
});


module.exports = router;