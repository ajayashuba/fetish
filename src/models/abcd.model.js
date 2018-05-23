const NeDB = require('nedb');
const path = require('path');

module.exports = function (app) {
  const dbPath = app.get('nedb');
  console.log(dbPath)
const Model = new NeDB({
    filename: path.join(dbPath, 'abcd.db'),
    autoload: true
  });

  return Model;
};
