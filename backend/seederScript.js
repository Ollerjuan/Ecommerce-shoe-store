require('dotenv').config();

const productData = require('./data/product');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productData)
        console.log("data import success")

        process.exit(1)
    } catch (error) {
        console.error("error with data import")
        process.exit(1);
    }
}

importData();