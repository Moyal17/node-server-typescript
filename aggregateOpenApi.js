/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const yaml = require('js-yaml');
const path = require('path');
const version = require('./package.json').version;

const docsPath = path.join(__dirname, 'docs');
const outputFilePath = path.join(docsPath, 'openapi.yaml');
const modulesPath = path.join(__dirname, 'src', 'modules');

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

// Function to update $ref to point to the same file
const updateRefPath = (content) => {
  return JSON.parse(
    JSON.stringify(content, (key, value) => {
      if (key === '$ref' && typeof value === 'string') {
        // Split at '#' and keep the '#{split[1]}' part
        const split = value.split('#');
        return `#${split[1]}`;
      }
      return value;
    }),
  );
};

// Function to read and merge YAML content from a file
const mergeYamlContent = (filePath, type) => {
  try {
    const fileContent = yaml.load(fs.readFileSync(filePath, 'utf8'));
    const updatedContent = updateRefPath(fileContent);
    if (type === 'routes') {
      mainOpenApi.paths = { ...mainOpenApi.paths, ...updatedContent.paths };
    } else if (type === 'components') {
      mainOpenApi.components.schemas = { ...mainOpenApi.components.schemas, ...updatedContent.components.schemas };
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
};

// Function to merge module routes and models into the main document
// Main function to aggregate OpenAPI specs
const generateOpenApi = () => {
  fs.readdirSync(modulesPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .forEach((moduleDir) => {
      const modulePath = path.join(modulesPath, moduleDir.name);
      const routesFilePath = path.join(modulePath, `${moduleDir.name}.routes.yaml`);
      const componentsFilePath = path.join(modulePath, `${moduleDir.name}.components.yaml`);

      if (fs.existsSync(routesFilePath)) {
        mergeYamlContent(routesFilePath, 'routes');
      }
      if (fs.existsSync(componentsFilePath)) {
        mergeYamlContent(componentsFilePath, 'components');
      }
    });

  // Write the combined spec to the output file
  fs.writeFileSync(outputFilePath, yaml.dump(mainOpenApi), 'utf8');
  console.log(`Combined OpenAPI spec written to ${outputFilePath}`);
};

// Run the script
generateOpenApi();
