/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const yaml = require('js-yaml');
const path = require('path');
const version = require('./package.json').version;

const docsPath = path.join(__dirname, 'docs');
const srcPath = path.join(__dirname, 'src/modules');
const outputPath = path.join(docsPath, 'openapi.yaml');

// Define the structure of your main OpenAPI document
const mainOpenApi = {
  openapi: '3.0.0',
  info: {
    title: 'REST API Docs',
    version: version,
  },
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
  paths: {},
};

// Function to read YAML file
const readYaml = (filePath) => {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents);
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    throw err;
  }
};

// Function to merge module routes and models into the main document
const aggregateModules = (modulePath) => {
  fs.readdirSync(modulePath).forEach((moduleName) => {
    const moduleDir = path.join(modulePath, moduleName);
    if (fs.statSync(moduleDir).isDirectory()) {
      // Aggregate routes
      const routesPath = path.join(moduleDir, `${moduleName}.routes.yaml`);
      if (fs.existsSync(routesPath)) {
        const routes = readYaml(routesPath);
        mainOpenApi.paths = { ...mainOpenApi.paths, ...routes.paths };
      }

      // Aggregate models
      const modelPath = path.join(moduleDir, `${moduleName}.model.yaml`);
      if (fs.existsSync(modelPath)) {
        const models = readYaml(modelPath);
        mainOpenApi.components.schemas = { ...mainOpenApi.components.schemas, ...models };
      }
    }
  });
};

// Main function to generate the aggregated OpenAPI document
const generateOpenApi = () => {
  aggregateModules(srcPath);
  fs.writeFileSync(outputPath, yaml.dump(mainOpenApi), 'utf8');
  console.log('Aggregated OpenAPI document generated at:', outputPath);
};

// Run the script
generateOpenApi();
