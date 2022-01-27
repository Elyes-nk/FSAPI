const Order = require('../../models/Order');

module.exports = {
    Query: {
        getOrders(){
            return Order.find().populate('user').populate('products').catch(err => console.log(err));
        },
        getOrder(parent, args, context) {
            return Order.findById(args.id).populate('user').populate('products');
        }
    }
}