const graphql = require('graphql');

const PageComponents = new graphql.GraphQLObjectType({
  name: 'PageComponents',
  fields: {
    name: {type: graphql.GraphQLString}
  }
});

const PageLayout = new graphql.GraphQLObjectType({
    name: 'PageLayout',
    fields: {
        span: { type: graphql.GraphQLString },      
        components: { type: graphql.GraphQLList(PageComponents) }
    }
});

module.exports = new graphql.GraphQLObjectType({
  name: 'Page',
  fields: {
    id: { type: graphql.GraphQLString },
    url: { type: graphql.GraphQLString },
    layout: { type: graphql.GraphQLList(PageLayout) }
  }
});


  