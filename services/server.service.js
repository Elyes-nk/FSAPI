const express = require('express');
const app = express();

//use .env to connect to mangoDB
const dotenv = require("dotenv");
dotenv.config();

const { ApolloServer, gql } = require('apollo-server-express');
const schema = require('../graphQl/schemas/user');
const resolvers = require('../graphql/resolvers');

const serverGraphQl = new ApolloServer({
    playground: true,
    typeDefs: schema,
    resolvers
});

serverGraphQl.applyMiddleware({
    app, path: "/graphql"
});

exports.start = () => {   
    app.listen(process.env.PORT, (err)=>{
        if (err) {
            console.log(err);
        }
        console.log("backend is running ! at port"+process.env.PORT);
    });
}