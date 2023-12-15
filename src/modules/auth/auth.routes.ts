import express, { Router } from 'express';
import { loginUser, signup } from './auth.controller';
import { validateBody } from '../../middlewares/validation';
import passport from '../../config/passport';
import { signUpSchema, logInSchema } from './dto';

const router: Router = express.Router();

const auth = {
  publicRoutes: () => {
    router.post('/register', validateBody(signUpSchema), signup);
    router.post('/login', validateBody(logInSchema), passport.authenticate('local', { session: false }), loginUser);
    return router;
  },
  apiRoutes: () => {
    router.get('/protected', (req, res) => {
      res.send('You have accessed a protected endpoint!');
    });
    return router;
  },
};

export default auth;
