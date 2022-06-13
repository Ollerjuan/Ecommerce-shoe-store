require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')

const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

connectDB();

const app = express();
app.use(cors())
app.use(express.json())


const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });
  
  const Product = mongoose.model("product", productSchema);



app.post('/CreatePost', async (req, res) => {
    new_shoe = {
        'name': req.body.title,
        'imageUrl': req.body.image,
        'price': parseFloat(req.body.price)
      }
      res.json(await Product.create(new_shoe))
    // try {
    //     res.json(await Product.create(req.body))
    // } catch (error) {
    //     res.status(500).json(error);
    // }
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))