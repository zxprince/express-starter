import mysql, { Connection } from 'mysql';

import Log from './log';
import configDB from '../config/db';

export default class DB {
  private _connection: Connection;

  get connection(): Connection {
      return this._connection;
  }

  constructor () {
    this._connection = mysql.createConnection(configDB);

    this._connection.connect(err => {
      if (err) throw err;
      Log.info('Database Connected');
    });
  }
}