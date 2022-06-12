require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')

const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();


const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  });
  
  const Product = mongoose.model("product", productSchema);



app.post('/CreatePost', async (req, res) => {
    try {
        res.json(await Product.create(req.body))
    } catch (error) {
        res.status(500).json(error);
    }
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))