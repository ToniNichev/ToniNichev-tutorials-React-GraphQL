const graphql = require('graphql');
const PageType = require('../types/pages');
const mongoDB = require('../../connectors/database/mongodb');
    
module.exports = {
    getPageByUrl: {
      type: PageType,
      args: {
        url: { type: graphql.GraphQLString }
      },
      resolve: function (_, {url}) {      
        return new Promise((resolve, reject) => {
          mongoDB.find({url: url}, 'Pages', function(err, result) {
            if(err) 
              reject(err);
            else { 
              resolve(result[0]);
            }
          });
        }); 
      },
    },
}


  