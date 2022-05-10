const graphql = require('graphql');
const DogType = require('../types/cats');
const mongoDB = require('../../connectors/database/mongodb');
    
module.exports = {
    getDog: {
      type: DogType,
      args: {
        id: { type: graphql.GraphQLID }
      },
      resolve: function (_, {id}) {      
        return new Promise((resolve, reject) => {
          const _id = parseInt(id);
          mongoDB.find({id: _id}, 'Dogs', function(err, result) {
            if(err) 
              reject(err);
            else 
              resolve(result[0]);                  
          });
        }); 

    },
  }
}


  