import express, { Router } from 'express';
import passport from '../config/passport';
import auth from '../modules/auth/auth.routes';
import users from '../modules/users/user.routes';
import media from '../modules/media/media.routes';
import pages from '../modules/pages/page.routes';
import collections from '../modules/collections/collection.routes';
import items from '../modules/items/item.routes';
import categories from '../modules/categories/category.routes';
import courses from '../modules/courses/course.routes';
import lectures from '../modules/lectures/lecture.routes';
import sections from '../modules/sections/section.routes';
import blog from '../modules/blog/blog.routes';

const apiRouter: Router = express.Router();

const routes: { [key: string]: Router } = {
  auth: auth.apiRoutes(),
  users: users.apiRoutes(),
  media: media.apiRoutes(),
  pages: pages.apiRoutes(),
  items: items.apiRoutes(),
  collections: collections.apiRoutes(),
  categories: categories.apiRoutes(),
  courses: courses.apiRoutes(),
  lectures: lectures.apiRoutes(),
  sections: sections.apiRoutes(),
  blog: blog.apiRoutes(),
};

Object.keys(routes).forEach((routeName) => {
  apiRouter.use(`/${routeName}`, passport.authenticate('jwt', { session: false }), routes[routeName]);
});

export default apiRouter;
