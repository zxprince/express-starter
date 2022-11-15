import Config from './config';
import mysql, { Connection } from 'mysql';
import Log from './log';

export default class DB {
  protected connection: Connection;

  constructor () {
    this.connection = mysql.createConnection({
      host: Config.get('db', 'host'),
      port: Config.get('db', 'port'),
      database: Config.get('db', 'database'),
      user: Config.get('db', 'user'),
      password: Config.get('db', 'password'),
      charset: Config.get('db', 'charset'),
      timezone: Config.get('db', 'timezone'),
      connectTimeout: Config.get('db', 'connectTimeout'),
      debug: Config.get('db', 'debug')
    });

    this.connection.connect(err => {
      if (err) throw err;
      Log.info('Database Connected');
    });
  }
}