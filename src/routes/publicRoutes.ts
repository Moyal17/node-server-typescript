import express, { Router } from 'express';
import auth from '../modules/auth/auth.routes';
import users from '../modules/users/user.routes';
import media from '../modules/media/media.routes';
import courses from '../modules/courses/course.routes';
import categories from '../modules/categories/category.routes';
import pages from '../modules/pages/page.routes';

const publicRouter: Router = express.Router();

const routes: { [key: string]: Router } = {
  auth: auth.publicRoutes(),
  users: users.publicRoutes(),
  media: media.publicRoutes(),
  courses: courses.publicRoutes(),
  categories: categories.publicRoutes(),
  pages: pages.publicRoutes(),
};

Object.keys(routes).forEach((routeName) => {
  publicRouter.use(`/${routeName}`, routes[routeName]);
});

export default publicRouter;
