import dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 3000,
  SESSION_SECRET: process.env.SESSION_SECRET || 'default_secret',
  MONGO_URI: process.env.MONGO_URI || '',
};

export default CONFIG;
