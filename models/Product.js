const mongoose = require("mongoose");

const Productschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
        unique:true,
    },
    price:{
        type:Number,
        require:true,
    },
    img : String,
},
{timestamps:true}
);

module.exports = mongoose.model("Product", Productschema)