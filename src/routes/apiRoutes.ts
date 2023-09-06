import express, { Router } from 'express';
import auth from '../modules/auth/auth.routes';
import users from '../modules/users/user.routes';
import passport from '../config/passport';

const apiRouter: Router = express.Router();

const routes: { [key: string]: Router } = {
  auth: auth.authorized(),
  users: users.authorize(),
};

Object.keys(routes).forEach((routeName) => {
  apiRouter.use(`/${routeName}`, routes[routeName]);
});

export default apiRouter;
