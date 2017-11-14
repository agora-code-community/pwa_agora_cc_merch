// Initializing app dependencies 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const multer = require('multer');

// Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
    useMongoClient: true,
});

// On connection, if successful
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});


// initializing app with express
const app = express();

const users = require('./routes/users');

// default port variable
const port = 3000;

// Route files
const categories = require('./routes/categoryRoutes');
const products = require('./routes/productRoutes');
const orders = require('./routes/orderRoutes');
const cart = require('./routes/cartRoutes');

// CORS middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// bodyParser middleware
app.use(bodyParser.json());

// route paths
app.use('/api/categories', categories);
app.use('/api/products', products);
app.use('/api/orders', orders);
app.use('/api/cart', cart);
app.use('/users', users);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Route for image display
app.get('/file/:name', function (req, res, next) {
    
    var options = {
        root: __dirname + '/public/uploads',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;

    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });

});

// handles listening to the specified port and starts server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});