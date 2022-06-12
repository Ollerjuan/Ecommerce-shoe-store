require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
           //determine where to send info to
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("mongoDB connection success")
    } catch (error) {
        console.error("mongoDB connection Failed")
        process.exit(1)
    }
}
module.exports = connectDB;

