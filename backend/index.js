const express = require('express');
const ProductModel = require('./db/database');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors())

app.get('/landing', (req, res) => {
    res.json({
        msg : 'api hit success'
    })
})

app.post('/addProduct', async (req, res) => {
    
    const {title, price , description, category, image, rating} = req.body;
    const {rate, count} = rating;

    //create product object
    const product = {
        title,
        price,
        description,
        category,
        image,
        rating : {
            rate,
            count
        }
    }
    console.log(product);
    //save this object in the database
    const data = await ProductModel.create(product)
    console.log(data);
    if(data){
        res.status(201).json({
            msg : 'created a product'
        })
    }else{
        msg : 'something went wrong'
    }
})
app.get('/category/fashion', async(req, res) => {
    const condition = {category : "Fashion"}
    const fashionProducts = await ProductModel.find(condition);
    console.log('category/fashion route hit');
    if(fashionProducts){
        res.status(200).json({
            products : fashionProducts
        })
    }else{
        res.status(404).json({
            msg : 'no Fashion products found'
        })
    }
})

app.listen(3000, () => {
    console.log('app is running on port 3000')
})