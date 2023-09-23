const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    productType: {
        type: String,
        require: true
    },
    productPrice: {
        type: String,
        require: true
    },
    productDescription: {
        type: String,
        require: true
    }
},
    {
        timestamp: true
    }
)

const Product = mongoose.model('Products', productSchema);

module.exports = Product;