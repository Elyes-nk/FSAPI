const Product = require('../../models/Product');

module.exports = {
    Query: {
        getProducts: () => {
            return Product.find().catch(err => console.log(err));
        },
        getProduct: (parent, args) => {
            return Product.findById(args.id).catch(err => console.log(err));
        }
    },
    Mutation: {
        createProduct: (parent, args) => {
            const newProduct = new Product({
                name: args.name,
                description: args.description,
                price: args.price
            });
            return newProduct.save();
        },
        updateProduct: (parent, args) => {
            const product = Product.find(product => product.id === args.id);
            if (!product) throw new Error('User not found');

            // This way, only the fields that are passed-in will be changed.
            if (typeof args.data.name === "string") product.name = args.data.name;
            if (typeof args.data.description === "string") product.description = args.data.description;
            if (typeof args.data.price === "double") product.price = args.data.price;


            return product;
        },
        deleteProduct: (parent, args) => {
            const productIndex = Product.filter((product) => user.id !== args.id);
            if (productIndex === -1) throw new Error('Product not found');

            const product = Product.splice(productIndex, 1);
            return product[0];
        }
    }
}