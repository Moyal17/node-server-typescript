import express, { Router } from 'express';
import { loginUser, signup } from './auth.controller';
import { validateBody } from '../../middlewares/validation';
import passport from '../../config/passport';
import { signUpSchema, logInSchema } from './dto';

const router: Router = express.Router();

const auth = {
  publicRoutes: () => {
    router.post('/signup', validateBody(signUpSchema), signup);
    router.post('/login', validateBody(logInSchema), passport.authenticate('local', { session: false }), loginUser);
    return router;
  },
  authorized: () => {
    router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
      res.send('You have accessed a protected endpoint!');
    });
    return router;
  },
};

export default auth;
