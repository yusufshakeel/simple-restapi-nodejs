'use strict';
const fastifyCors = require('@fastify/cors');
const fastifyHelmet = require('@fastify/helmet');
const fastifySwagger = require('@fastify/swagger');
const fastifySwaggerUI = require('@fastify/swagger-ui');
const fastifyMetrics = require('fastify-metrics');
const Services = require('./services');
const corsConfig = require('./configs/cors-config');
const swaggerConfig = require('./configs/swagger-config');
const Routes = require('./routes');

module.exports = function Server({ fastify }) {
  const self = this;
  const services = new Services();
  const routes = Routes({ fastify });

  this.setup = async () => {
    await fastify.register(fastifySwagger, swaggerConfig);
    await fastify.register(fastifySwaggerUI);
    await fastify.register(fastifyCors, corsConfig);
    await fastify.register(fastifyHelmet);
    await fastify.register(fastifyMetrics, { endpoint: '/metrics' });
    await fastify.register(routes.HomeRoutes);
    await fastify.register(routes.HealthCheckRoutes);
    return self;
  };

  this.start = async () => {
    const {
      configService: {
        fastify: { port, host }
      }
    } = services;
    fastify.listen({ port, host }, function (err) {
      if (err) {
        fastify.log.error(err);
        throw err;
      }
      fastify.swagger();
    });
  };
};
