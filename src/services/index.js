const abcd = require('./abcd/abcd.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(abcd);
};
