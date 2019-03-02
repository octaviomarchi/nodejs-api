'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect(
    'mongodb+srv://admin:oCdi0FI98b9UnKow@cluster-nodejs-api-qb3el.gcp.mongodb.net/test?retryWrites=true', 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer')

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false 
}));



app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;