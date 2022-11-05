import dotenv from 'dotenv';

dotenv.config();

const app = {
  name: process.env.APP_NAME,
  env: process.env.APP_ENV,
  key: process.env.APP_KEY,
  debug: process.env.APP_DEBUG,
  timezone: process.env.APP_TIMEZONE,
  port: process.env.APP_PORT,
};

export default app;