const { gql } = require('apollo-server-express');

module.exports = gql`
    type Product{
        id:ID!
        name:String
        description:String
        price:Int
    }
    type Query{
        getProducts:[Product]
        getProduct(id:ID!):Product
    }
    type Mutation{
        createProduct(name:String, description:String, price:Int):Product
        updateProduct(id:ID!, name:String, description:String, price:Int):Product!
        deleteProduct(id:ID!):String
    }
`