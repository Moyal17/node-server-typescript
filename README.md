
## Overview


## Project Structure

```
root/
|-- src/
|   |-- config/                          // Configuration loader (for environment-specific configurations)
|   |   |-- config.js
|   |   |-- mongoDatabase.js
|   |-- modules/
|   |   |-- users/
|   |   |   |-- auth.controller.ts       // Request/Error Handling & Response for users
|   |   |   |-- auth.routes.ts           // Express routes for users
|   |   |   |-- auth.service.ts          // Business logic for users
|   |   |   |-- user.model.ts            // Users Model
|   |   |   |-- user.interface.ts        // Users Interface
|   |   |-- items/
|   |   |-- ...                          // Same file structure as users
|   |-- routes/
|   |   |-- apiRoutes.ts                 // API - authorization/authentication check routes
|   |   |-- publicRoutes.ts              // Public routes
|   |   |-- user.item.routes.ts          // Entry file for routes
|   |-- utils/
|   |-- middlewares/
|   |-- app.ts                           // Core Express setup (middleware, routes, error handling)
|   |-- main.ts                          // Entry file, bootstrapping the Express application
|-- test/
|-- package.json
|-- README.md
```

## How to Run

1. Clone the repository.
2. Navigate to the project folder.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the application.

