const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ramanmongodb:8JKaDmQEIzSSOGpV@cluster0.3oudvbc.mongodb.net/e-Commerce');

const productSchema = new mongoose.Schema({
    title : String,
    price : String,
    description : String,
    category : String,
    image : String,
    rating : {
        rate : String,
        count : Number
    }
})

const ProductModel = mongoose.model('ProductModel', productSchema);

module.exports = ProductModel;
