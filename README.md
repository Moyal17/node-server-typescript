# **Node Server with TypeScript & Modern Best Practices**

This repository houses a comprehensive, modular, and scalable Node.js server application developed using TypeScript, Express, and several other best-in-class tools and technologies. Designed and built with the modern architectural best practices, this server is meant to showcase the application of the latest versions of packages, methodologies, and best practices by a seasoned developer.

## Project Structure

```
root/
|-- doc/
|-- openapi.yaml                         // Centralized OpenAPI specification defining the entire API's structure.
|-- src/
|   |-- config/                          // Configuration loader (for environment-specific configurations)
|   |   |-- config.js
|   |   |-- mongoDatabase.js
|   |-- modules/
|   |   |-- auth/
|   |   |   |-- auth.controller.ts       // Request/Error Handling & Response for auth
|   |   |   |-- auth.routes.ts           // Express routes for auth
|   |   |   |-- user.service.ts          // Business logic for auth
|   |   |-- users/
|   |   |   |-- user.controller.ts       // Request/Error Handling & Response for users
|   |   |   |-- user.routes.ts           // Express routes for users
|   |   |   |-- user.service.ts          // Business logic for users
|   |   |   |-- user.model.ts            // Users Model
|   |   |   |-- user.interface.ts        // Users Interface
|   |   |-- media/
|   |   |-- ...                          // rest of mudules file structure
|   |   |-- shared/                      // Shared enums, types, validations across modules.
|   |-- services/                        // Shared services across modules.
|   |-- routes/
|   |   |-- apiRoutes.ts                 // API - authorization/authentication check routes
|   |   |-- publicRoutes.ts              // Public routes
|   |   |-- index.ts                     // Entry file for routes
|   |-- utils/                           // Utility & helper functions.
|   |-- middlewares/                     // Custom middlewares
|   |-- test/                            // Tests on API
|   |-- app.ts                           // Core Express setup (middleware, routes, error handling)
|   |-- main.ts                          // Entry file, bootstrapping the Express application
|-- package.json
|-- README.md
```


## **Notable Features**

- **Modular Architecture**: Self-contained modules like 'users', 'items', and 'media' provide better organization, scalability, and maintainability.

- **Secure Authentication**: Leveraging `bcryptjs` for hashing and `jsonwebtoken` with `passport` for JWT-based authentication.

- **Data Modeling & ORM**: Mongoose ORM setup for structured, schema-based data modeling.

- **Validation**: Using `joi` for request validation, Ensure request and response payloads conform to predefined schemas, enhancing API reliability and developer experience..

- **Security**: Utilizing packages such as `helmet` and `cors` to ensure security best practices are followed.

- **Logging & Monitoring**: Implemented request logging with `morgan`.

- **Caching**: Integrated `redis` for enhanced performance through caching mechanisms.

- **DevOps**: Environment-specific configuration handling with `dotenv`.

- **Code Quality**: Enforced code quality and style with `eslint`, `prettier`, and `@typescript-eslint`.

- **Automated OpenAPI Documentation**: Automated OpenAPI Documentation: This project utilizes a sophisticated approach to API documentation by integrating OpenAPI Swagger documentation that is automatically aggregated from modular definitions.

- **API Testing**: Facilitate backend testing and frontend integration by providing an up-to-date and accessible API reference.


## OpenAPI Swagger Documentation

This project leverages OpenAPI Swagger documentation to provide a clear and interactive documentation of its RESTful APIs. The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection.


### Automated Documentation Aggregation

A custom Node.js script, `aggregateOpenApi.ts`, automates the process of merging individual module documentation into a single `openapi.yaml` file. This script dynamically updates `$ref` paths to ensure internal consistency and simplifies the integration with Swagger UI.

### **Dependencies Breakdown**

- **Core**: `express`, `typescript`.
- **Database**: `mongoose`, `redis`.
- **Authentication**: `bcryptjs`, `jsonwebtoken`, `passport`, `passport-jwt`, `passport-local`.
- **Utilities**: `body-parser`, `compression`, `cookie-parser`, `cors`, `dotenv`, `morgan`.
- **Security**: `helmet`.
- **Validation**: `joi`.
- **Development**: `@typescript-eslint/eslint-plugin`, `eslint`, `prettier`.
- **Test**: `jest`, `supertest`.

### How to Run

1. Clone the repository.
2. Navigate to the project folder.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the application.

