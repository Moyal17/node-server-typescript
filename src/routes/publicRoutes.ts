import express, { Router } from 'express';
import users from '../modules/users/user.routes';
import items from '../modules/items/item.routes';

const publicRouter: Router = express.Router();

const routes: { [key: string]: Router } = {
  users,
  items,
};

Object.keys(routes).forEach((routeName) => {
  publicRouter.use(`/${routeName}`, routes[routeName]);
});

export default publicRouter;
