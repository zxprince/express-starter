import Config from '../classes/config';
import dotenv from 'dotenv';

dotenv.config();

const db = {
  host: Config.get('DB_HOST', 'localhost'),
  port: Config.get('DB_PORT', 3306),
  user: Config.get('DB_USER', 'root'),
  database: Config.get('DB_DATABASE', 'express'),
  password: Config.get('DB_PASSWORD', ''),
  charset: Config.get('DB_CHARSET', 'utf8_general_ci'),
  timezone: Config.get('DB_TIMEZONE', 'local'),
  connectTimeout: Config.get('DB_CONNECTTIMEOUT', 10000),
  debug: Config.get('DB_DEBUG', false),
  waitForConnections: Config.get('DB_WAIT_FOR_CONNECTIONS', true),
  connectionLimit: Config.get('DB_CONNECTION_LIMIT', 10),
  maxIdle: Config.get('DB_MAX_IDLE', 10),
  idleTimeout: Config.get('DB_IDLE_TIMEOUT', 60000),
  queueLimit: Config.get('DB_QUEUE_LIMIT', 0),
  enableKeepAlive: Config.get('DB_ENABLE_KEEP_ALIVE', true),
  keepAliveInitialDelay: Config.get('DB_KEEP_ALIVE_INITIAL_DELAY', 0)
};

export default db;