const express = require('express');
const router = express.Router();
const mongoose =require('mongoose')
const {getAllProduct, getProductById} = require('../controller/productControllers')


router.get('/', getAllProduct);

const db = require('../models/Product')


router.post('/CreatePost', async (req, res, next) => {
    try {

        const createdProduct = await db.Product.create(req.body);
        console.log(`The created product is ${createdProduct}`)
        // am i redirecting back to the homepage
        res.redirect('/Homescreen');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


router.get('/:id', getProductById);
 
module.exports = router

