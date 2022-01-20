const Order = require("../models/Order");



exports.create = async(req, res) => {

    const newOrder = new Order({
        name: req.body.name,
        price: req.body.price,
        user: req.body.userId,
        products:req.body.productsId,
      });
      try {
        await newOrder.save();
        res.status(201).json();
      } catch (err) {
        res.status(500).json(err);
      }
}