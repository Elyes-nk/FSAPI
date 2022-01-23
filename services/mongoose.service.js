const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

exports.dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log("DATABASE is connected 🔥🔥🔥")).catch(err=>console.log(err));
  };