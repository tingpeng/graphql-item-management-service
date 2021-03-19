const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../../schema')
const mongoose = require('mongoose');

const app = express();
const USER = encodeURIComponent('dbuser');
const PASSWORD = encodeURIComponent('P@ssw0rd');

mongoose.connect("mongodb+srv://dbuser:P%40ssw0rd@cluster1.ebiee.mongodb.net/db01?retryWrites=true&w=majority", { 
        useNewUrlParser: true
    }, function(err, db) {}
);

mongoose.connection.once('open', () => {
    console.log('connected to database');
});

//This route will be used as an endpoint to interact with Graphql, 
//All queries will go through this route. 
app.use('/graphql', graphqlHTTP({
    //directing express-graphql to use this schema to map out the graph 
    schema,
    //directing express-graphql to use graphiql when goto '/graphql' address in the browser
    //which provides an interface to make GraphQl queries
    graphiql:true
}));

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 