const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const definition = {
    openapi: '3.0.4',
    info: {
        title: 'white whiz',
        version: '1.0.0',
        description: 'A simple Express API with Swagger',
    },
    servers: [
        {
            url: process.env.SERVER_URL,
        },
    ]
}

const options = {
    definition,
    apis: ['./src/Routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs
}