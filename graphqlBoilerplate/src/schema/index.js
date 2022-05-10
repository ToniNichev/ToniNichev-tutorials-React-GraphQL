const graphql = require('graphql');
const queries = require('./queries');
const mutations = require('./mutations');

var rootQuery = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {...queries, ...mutations },
});

module.exports = new graphql.GraphQLSchema({
  query: rootQuery
});