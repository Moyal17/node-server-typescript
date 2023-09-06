import passport from 'passport';
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import User from '../modules/users/user.model';
import IUser from '../modules/users/user.interface';

const JWT_SECRET = process.env.JWT_SECRET || ''; // Note: Ensure you have a fallback or an error check for the absence of JWT_SECRET

// Local Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // This is the reference to the name attribute in the login form email input
      passwordField: 'password', // This is the reference to the name attribute in the login form password input
    },
    async (
      email: string,
      password: string,
      done: (error: never | null, user?: Partial<IUser> | boolean, options?: { message: string }) => void,
    ) => {
      try {
        const user = await User.findOne({ email }).lean();
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        const isMatch = await bcrypt.compare(password, user.hash);
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      } catch (err) {
        done(err);
      }
    },
  ),
);

// JWT Strategy options
const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

passport.use(
  new JwtStrategy(
    opts,
    async (
      jwt_payload: { [key: string]: string },
      done: (error: never | null, user?: Partial<IUser> | boolean, options?: { message: string }) => void,
    ) => {
      try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    },
  ),
);

export default passport;
