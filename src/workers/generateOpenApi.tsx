import * as fs from 'fs-extra';
import * as yaml from 'js-yaml';
import * as path from 'path';
import { version } from '../../package.json';

const docsPath = path.join(__dirname, '../../docs');
const outputFilePath = path.join(docsPath, 'openapi.yaml');
const modulesPath = path.join(__dirname, '../modules');

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

// Function to update $ref to point to the same file
const updateRefPath = (content: any): any => {
  return JSON.parse(
    JSON.stringify(content, (key, value) => {
      if (key === '$ref' && typeof value === 'string') {
        const split = value.split('#');
        return `#${split[1]}`;
      }
      return value;
    }),
  );
};

// Function to read and merge YAML content from a file
const mergeYamlContent = (filePath: string, type: 'routes' | 'components'): void => {
  try {
    const fileContent = yaml.load(fs.readFileSync(filePath, 'utf8')) as any;
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

// Main function to aggregate OpenAPI specs
export const generateOpenApi = (): void => {
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
