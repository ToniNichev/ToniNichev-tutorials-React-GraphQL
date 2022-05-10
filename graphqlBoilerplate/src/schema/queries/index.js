let Cats = require('./cats.js');
let Dogs = require('./dogs.js');
let Pages = require('./pages.js');

module.exports = {
  ...Cats,
  ...Dogs,
  ...Pages
};
