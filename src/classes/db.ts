import mysql, { Connection } from 'mysql';

import Log from './log';
import configDB from '../config/db';

export default class DB {
  protected connection: Connection;

  constructor () {
    console.log(configDB);
    // Log.info(config);

    this.connection = mysql.createConnection(configDB);

    this.connection.connect(err => {
      if (err) throw err;
      Log.info('Database Connected');
    });
  }
}