'use strict';
const HomeRoutes = require('./home-routes');
const HealthCheckRoutes = require('./health-routes');

module.exports = function Routes() {
  return { HomeRoutes, HealthCheckRoutes };
};
