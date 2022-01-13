//using mongoose to connect to mongoDB
const mongoose = require("mongoose");

//use .env to connect to mangoDB
const dotenv = require("dotenv").config();

exports.dbConnect = () => {
    //connect to mangoDB
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log("connected to MongoDB")).catch(err=>console.log(err));
  };