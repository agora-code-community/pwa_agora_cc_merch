// Initializing app dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to database
mongoose.connect(config.database);

// On connection, if successful
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+ config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error '+ err);
});


// initializing app with express
const app = express();

// default port variable
const port = 3000;

// CORS middleware
app.use(cors());

// bodyParser middleware
app.use(bodyParser.json());

// handles listening to the specified port and starts server
app.listen(port, () => {
    console.log('Server started on port '+ port);
});