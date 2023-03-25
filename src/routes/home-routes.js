'use strict';

const responseSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        message: {
          type: 'string'
        }
      }
    }
  }
};

module.exports = async function HomeRoutes(fastify) {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      tags: ['APIs'],
      description: 'The home route.',
      response: {
        200: responseSchema
      }
    },
    handler: async function (request, reply) {
      reply.code(200).send({ data: { message: 'Hello, World!' } });
    }
  });

  return fastify;
};
