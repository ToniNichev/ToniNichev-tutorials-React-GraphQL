const graphql = require('graphql');
const DogType = require('../types/dogs');
const mongoDB = require('../../connectors/database/mongodb');
    
module.exports = {
    getDogByBreed: {
      type: DogType,
      args: {
        breed: { type: graphql.GraphQLString }
      },
      resolve: function (_, {breed}) {      
        return new Promise((resolve, reject) => {
          mongoDB.find({breed: breed}, 'Dogs', function(err, result) {
            if(err) 
              reject(err);
            else 
              resolve(result[0]);                  
          });
        }); 
      },
    },

    getDogsList: {
      type: graphql.GraphQLList(DogType),
      resolve: function (_) {      
        return new Promise((resolve, reject) => {
          mongoDB.find({}, 'Dogs', function(err, result) {
            if(err) 
              reject(err);
            else 
              resolve(result);                  
          });
        }); 
      },
    }
}


  