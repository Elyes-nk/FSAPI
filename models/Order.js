const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Orderschema = new mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    products:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }],
},
{timestamps:true}
);

module.exports = mongoose.model("Order", Orderschema)