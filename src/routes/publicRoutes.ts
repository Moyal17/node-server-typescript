import express, { Router } from 'express';
import auth from '../modules/auth/auth.routes';
import users from '../modules/users/user.routes';

const publicRouter: Router = express.Router();

const routes: { [key: string]: Router } = {
  auth: auth.publicRoutes(),
  users: users.publicRoutes(),
};

Object.keys(routes).forEach((routeName) => {
  publicRouter.use(`/${routeName}`, routes[routeName]);
});

export default publicRouter;
