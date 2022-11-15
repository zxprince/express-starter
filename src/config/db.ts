import dotenv from 'dotenv';
import Config from '../classes/config';

dotenv.config();

const db = {
  host: Config.get('DB_HOST', 'localhost'),
  port: Config.get('DB_PORT', 3306),
  database: Config.get('DB_DATABASE', 'express'),
  user: Config.get('DB_USER', 'root'),
  password: Config.get('DB_PASSWORD', ''),
  charset: Config.get('DB_CHARSET', 'utf8_general_ci'),
  timezone: Config.get('DB_TIMEZONE', 'local'),
  connectTimeout: Config.get('DB_CONNECTTIMEOUT', 10000),
  debug: Config.get('DB_DEBUG', false),
};

export default db;