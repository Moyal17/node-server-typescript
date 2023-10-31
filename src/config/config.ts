import dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 8080,
  SESSION_SECRET: process.env.SESSION_SECRET || 'default_secret',
  MONGO_URI: process.env.MONGO_URI || '',
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || '',
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || '',
};

export default CONFIG;
