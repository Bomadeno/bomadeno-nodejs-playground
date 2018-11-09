const newsRoutes = require('./news_routes');

module.exports = function routes(app, db) {
  newsRoutes(app, db);
  // Other route groups could go here, in the future
};
