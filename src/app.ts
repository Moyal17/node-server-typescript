import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import CONFIG from './config';
import mainRoutes from './routes';  // Import the routes

const app: Application = express();

// Middleware setup
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(session({
  secret: CONFIG.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(compression());

// Here, you'd also define your routes, e.g., app.use('/users', usersRouter);
app.use(mainRoutes);  // Use the imported routes
export default app;
