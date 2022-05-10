const mongoDB = require('./src/connectors/database/mongodb');
const dogs = require('./src/models/mock_data/dogs');
const pages = require('./src/models/mock_data/pages');

mongoDB.dropDB();
mongoDB.add(dogs, 'Dogs', null);
mongoDB.add(pages, 'Pages', null);
