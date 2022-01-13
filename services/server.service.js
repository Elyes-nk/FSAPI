const express = require('express');
const app = express();
const apiRouter = require('../routes');
const cors=require('cors')

//use .env to connect to mangoDB
const dotenv = require("dotenv").config();

//allow app use json from the body that get passed up to it 
app.use(express.json());
app.use(cors())

app.use('/api', apiRouter);


//======================couche graphQl=========================
const { ApolloServer, gql } = require('apollo-server-express');
const schema = require('../graphQl/schemas/user');
const resolvers = require('../graphQl/resolvers/user');

const serverGraphQl = new ApolloServer({
    typeDefs: schema,
    resolvers
});

serverGraphQl.applyMiddleware({
    app, path: "/graphql"
});
//==============================================================

exports.start = () => {   
    app.listen(process.env.PORT, (err)=>{
        if (err) {
            console.log(err);
        }
        console.log("backend is running ! at port : "+process.env.PORT);
    });
}