const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');

const app = express();

app.get('/', (req, res) => {
    res.send('response to hahaha');
});

//insert data
app.post('/addProduct', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});
app.get('/products', async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
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
