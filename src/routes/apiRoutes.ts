import express, { Router } from 'express';
import auth from '../modules/auth/auth.routes';
import users from '../modules/users/user.routes';
import passport from '../config/passport';
import categories from '../modules/categories/category.routes';
import media from '../modules/media/media.routes';

const apiRouter: Router = express.Router();

const routes: { [key: string]: Router } = {
  auth: auth.apiRoutes(),
  users: users.apiRoutes(),
  categories: categories.apiRoutes(),
  media: media.apiRoutes(),
};

Object.keys(routes).forEach((routeName) => {
  apiRouter.use(`/${routeName}`, passport.authenticate('jwt', { session: false }), routes[routeName]);
});

export default apiRouter;
