import mysql, { Connection, Pool } from 'mysql2';

import Log from './log';
import { QueryBuilder } from './query-builder';
import configDB from '../config/db';

export default class DB {
  private _connection: Pool;

  get connection(): Pool {
      return this._connection;
  }

  constructor() {
    this._connection = mysql.createPool(configDB);

    this._connection.getConnection((err, conn) => {
      if (err) {
        Log.error(`Error connecting to database: ${err}`);
      } else {
        Log.info('Database Connected');
        conn.release();
      }
    });
  }

  table(table: string): QueryBuilder {
    return new QueryBuilder({ table, connection: this._connection });
  }

  async close(): Promise<void> {
    await this._connection.promise().end();
  }
}