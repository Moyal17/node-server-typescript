import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import CONFIG from './config';
import { generateOpenApi } from '../workers/generateOpenApi';

// This function sets up Swagger UI to serve the OpenAPI documentation
function swaggerDocs(app: Application): void {
  generateOpenApi();
  const swaggerDocument = YAML.load(path.join(__dirname, '../../docs/openapi.yaml'));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  // Optionally, serve the raw OpenAPI spec at '/docs.json' endpoint
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocument);
  });
  console.log(`Docs available at http://localhost:${CONFIG.PORT}/api-docs`);
}

export default swaggerDocs;
