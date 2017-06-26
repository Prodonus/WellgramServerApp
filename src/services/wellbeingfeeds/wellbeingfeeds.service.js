// Initializes the `wellbeingfeeds` service on path `/wellbeingfeeds`
const createService = require('feathers-mongoose');
const createModel = require('../../models/wellbeingfeeds.model');
const hooks = require('./wellbeingfeeds.hooks');
const filters = require('./wellbeingfeeds.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'wellbeingfeeds',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/wellbeingfeeds', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('wellbeingfeeds');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
