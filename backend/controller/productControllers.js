const Product = require('../models/Product')
const product = require('../models/Product')

const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find({});

        res.json(product);
    } catch (error){
    res.status(500).json({message: "server error"})
    }
}
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    } catch (error){
    res.status(500).json({message: "server error"})
    }
}

module.exports = {
    getAllProduct,
    getProductById
}