const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');

const app = express();

app.get('/', (req, res) => {
    res.send('response to hahaha');
});

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://admin:admin@firstcluster.mu3ljeu.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected to mongoDB');
    app.listen(3000, ()=>{
        console.log('connecteewqd to port 3000');
    });
}).catch((error)=>{
    console.log(error);
});
