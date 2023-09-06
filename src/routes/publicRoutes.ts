import express, { Router } from 'express';
import auth from '../modules/auth/auth.routes';
import users from '../modules/users/user.routes';
import categories from '../modules/categories/category.routes';
import media from '../modules/media/media.routes';

const publicRouter: Router = express.Router();

const routes: { [key: string]: Router } = {
  auth: auth.publicRoutes(),
  users: users.publicRoutes(),
  categories: categories.publicRoutes(),
  media: media.publicRoutes(),
};

Object.keys(routes).forEach((routeName) => {
  publicRouter.use(`/${routeName}`, routes[routeName]);
});

export default publicRouter;
