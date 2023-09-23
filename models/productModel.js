const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        require: [true, 'please enter product name']
    },
    productType: {
        type: String,
        require: [true, 'please enter the type of product']
    },
    productPrice: {
        type: String,
        require: [true, 'please enter the price']
    },
    productDescription: {
        type: String,
        require: [true, 'please enter the product description']
    }
},
    {
        timestamp: true,
    }
);

const Product = mongoose.model('Products', productSchema);

module.exports = Product;