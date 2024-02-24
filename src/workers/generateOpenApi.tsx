import * as fs from 'fs-extra';
import * as yaml from 'js-yaml';
import * as path from 'path';
import { version } from '../../package.json';

const docsPath = path.join(__dirname, '../../docs');
const srcPath = path.join(__dirname, '../modules');
const outputPath = path.join(docsPath, 'openapi.yaml');

interface OpenApiDocument {
  openapi: string;
  info: {
    title: string;
    version: string;
  };
  components: {
    securitySchemes: {
      bearerAuth: {
        type: string;
        scheme: string;
        bearerFormat: string;
      };
    };
    schemas: Record<string, any>;
  };
  security: [
    {
      bearerAuth: string[];
    },
  ];
  paths: Record<string, any>;
}

const mainOpenApi: OpenApiDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Node Server API',
    version,
  },
  paths: {},
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {},
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const readYaml = (filePath: string): any => {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents);
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    throw err;
  }
};

const aggregateModules = (modulePath: string): void => {
  fs.readdirSync(modulePath).forEach((moduleName) => {
    const moduleDir = path.join(modulePath, moduleName);
    if (fs.statSync(moduleDir).isDirectory()) {
      const routesPath = path.join(moduleDir, `${moduleName}.routes.yaml`);
      if (fs.existsSync(routesPath)) {
        const routes = readYaml(routesPath);
        mainOpenApi.paths = { ...mainOpenApi.paths, ...routes.paths };
      }

      const modelPath = path.join(moduleDir, `${moduleName}.model.yaml`);
      if (fs.existsSync(modelPath)) {
        const models = readYaml(modelPath);
        mainOpenApi.components.schemas = { ...mainOpenApi.components.schemas, ...models };
      }
    }
  });
};

export const generateOpenApi = (): void => {
  aggregateModules(srcPath);
  fs.writeFileSync(outputPath, yaml.dump(mainOpenApi), 'utf8');
  console.log('Aggregated OpenAPI document generated at:', outputPath);
};
