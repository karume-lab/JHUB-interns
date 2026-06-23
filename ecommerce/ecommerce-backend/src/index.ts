import express from 'express';
import { apiReference } from '@scalar/express-api-reference';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Ecommerce Backend API');
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Mock OpenAPI Specification for Scalar
const openApiSpec = {
  openapi: '3.1.0',
  info: {
    title: 'Ecommerce Backend API',
    version: '1.0.0',
    description: 'API documentation for the Ecommerce Backend',
  },
  paths: {
    '/': {
      get: {
        summary: 'Returns a simple greeting',
        responses: {
          '200': {
            description: 'Successful response',
            content: {
              'text/plain': {
                schema: {
                  type: 'string',
                  example: 'Ecommerce Backend API',
                },
              },
            },
          },
        },
      },
    },
    '/health': {
      get: {
        summary: 'Health check endpoint',
        responses: {
          '200': {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 'ok',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

// Scalar API Reference Route
app.use(
  '/docs',
  apiReference({
    spec: {
      content: openApiSpec,
    },
    theme: 'purple',
  })
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`API Docs available at http://localhost:${port}/docs`);
});
