import dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 3000,
  SESSION_SECRET: process.env.SESSION_SECRET || 'default_secret',
};

export default CONFIG;