const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Orderschema = new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    products:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }],
    status:{
        Type:String
    },
    stripeId:{
        Type:String
    },
    amount:{
        Type:Number
    },
},
{timestamps:true}
);

module.exports = mongoose.model("Order", Orderschema)