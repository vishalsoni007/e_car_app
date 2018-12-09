// app.js
const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const app = express();  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Imports routes for the products
const product = require('./routes/product.route');

//middleware
app.use('/products', product);

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://devuser:dev123@ds119394.mlab.com:19394/products_app';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});


