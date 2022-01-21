const { gql } = require('apollo-server-express');

module.exports = gql`
    type User{
        id:ID!
        username:String
        email:String
        password:String
    }
    extend type Query{
        getUsers:[User]
        getUser(id:ID!):User
    }
    extend type Mutation{
        createUser(username:String, email:String, password:String):User
        updateUser(id:ID!, username:String, email:String, password:String):User!
        deleteUser(id:ID!):String
    }
`