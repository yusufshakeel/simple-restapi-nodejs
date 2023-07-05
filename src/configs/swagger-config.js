'use strict';
const packageJson = require('../../package.json');
module.exports = {
  swagger: {
    info: {
      title: packageJson.name,
      description: packageJson.description,
      version: packageJson.version
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'Health Check', description: 'Health Check routes' },
      { name: 'APIs', description: 'List of APIs' }
    ]
  }
};
