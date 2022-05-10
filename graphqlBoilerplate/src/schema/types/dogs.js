const graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
  name: 'Dog',
  fields: {
    id: { type: graphql.GraphQLString },
    breed: { type: graphql.GraphQLString },
    displayImage: { type: graphql.GraphQLString }
  }
});


  