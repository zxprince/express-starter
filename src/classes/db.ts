import mysql, { Connection, Pool } from 'mysql2';

import Log from './log';
import { QueryBuilder } from './query-builder';
import configDB from '../config/db';

export default class DB {
  private connection: Pool;

  constructor() {
    this.connection = mysql.createPool(configDB);

    this.connection.getConnection((err, conn) => {
      if (err) {
        Log.error(`Error connecting to database: ${err}`);
      } else {
        Log.info('Database Connected');
        conn.release();
      }
    });
  }

  table(table: string): QueryBuilder {
    return new QueryBuilder({ table, connection: this.connection });
  }

  async close(): Promise<void> {
    await this.connection.promise().end();
  }
}