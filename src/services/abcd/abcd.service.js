// Initializes the `abcd` service on path `/abcd`
const createService = require('feathers-nedb');
const createModel = require('../../models/abcd.model');
const hooks = require('./abcd.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/abcd', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('abcd');

  service.hooks(hooks);
};
