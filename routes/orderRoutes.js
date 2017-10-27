/**
 * This file handles all the routes dealing with a
 * single product
 */

const express = require('express');
const router = express.Router();

const Order = require('../models/order');

// get all products
router.get('/', (req, res) => {
    
        Order.getOrders((err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    });
    
    // gets a single order
    router.get('/:order_id', (req, res, next) => {
    
        Order.getOrderById(req.params.product_id, (err, order) => {
            if(err) {
                console.log(err);
                res.send(err);
            } else {
                res.json(order);
            }
        });
    });
    
    // create order  route (stores data in db)
    router.post('/create', (req, res, next) => {
        const order = req.body; // gets data sent to this URL
        
        Order.createOrder(order, (err, cv) => {
            // check for errors
            if (err) {
                res.send(err);
                // res.json({success: false, msg: 'Failed to create product, please try again.'});
            } else {
                res.json({success: true, msg: 'Order successfully added'});
            }
        });
    });
    
    // Update a particular order
    router.put('/update/:order_id', (req, res) => {
        const order_id = req.params.order_id;
        const order = req.body;
        Order.updateOrder(order_id, order, {}, (err, order) => {
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
    
    
    // Delete an order
    router.delete('/delete/:order_id', (req, res) => {
        const order_id = req.params.order_id;
        Order.deleteOrder(order_id, (err, order) => {
            if (err) {
                res.send(err);
            }
            // returned if success
            res.json({success: true, msg: 'The Order has been deleted successfully'});
        });
    });
    

module.exports = router;