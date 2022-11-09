import dotenv from 'dotenv';
import Config from '../config';

dotenv.config();

const app = {
  name: Config.get('APP_NAME', 'Express Starter'),
  env: Config.get('APP_ENV', 'local'),
  key: Config.get('APP_KEY'),
  debug: Config.get('APP_DEBUG', true),
  timezone: Config.get('APP_TIMEZONE', 'Asia/Dhaka'),
  port: Config.get('APP_PORT', 4200),
};

export default app;