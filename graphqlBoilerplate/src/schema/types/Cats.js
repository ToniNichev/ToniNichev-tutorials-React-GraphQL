const graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
  name: 'Cat',
  fields: {
    id: { type: graphql.GraphQLID },
    name: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt }
  }
});


  