import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Verdiário API',
            version: '1.0.0',
            description: 'API ara catalogação de plantas'
        },
    },
    apis: [
            './src/routes/*.ts',
            './src/docs/*.ts'
        ]
});