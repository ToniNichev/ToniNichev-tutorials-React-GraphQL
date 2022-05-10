# graphql-boilerplate

example query:

* Add Dog

  query queryLabel($id:String!, $breed:String!, $displayImage: String!) {
    addDog(id: $id, breed: $breed, displayImage:$displayImage )
  }

  {
    "id": "qasdfwaqEF",
    "breed": "test",
    "displayImage": "http://test.jpg"
  }

* Find Dog by breed

  query getDogByBreed($breed: String) 
  {
    getDogByBreed(breed: $breed) {
      id
      breed
      displayImage
    }
  }

  {
    "breed": "labrador"
  }


* Installing and running:
- make sure that you have mongodb up and running.
- execute in the root folder: 
1. npm/yarn install
2. npm run setup
3. npm start.

* Front end react project that demonstrates GraphQL quering : https://github.com/ToniNichev/webpack-react-boilerplate/tree/master/src 