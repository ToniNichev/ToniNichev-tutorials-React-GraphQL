var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const cors = require( `cors` );
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello(userName:String!): String,
    rollDice: Int
  }
`);
// The root provides a resolver function for each API endpoint
var root = {
  hello: (args) => {
    return `Hello ${args.userName}`;
  },
  rollDice: () => {
    return Math.floor(Math.random() * 6) + 1;
  }
};
var app = express();
app.use( cors() );

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
