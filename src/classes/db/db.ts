import mysql, { Connection, Pool } from 'mysql2';

import Log from '../log';
import { QueryBuilder } from './query-builder';
import configDB from '../../config/db';
import mongoose from 'mongoose';

export default class DB {
  private _connection: mongoose.Connection | null = null;

  public get connection(): mongoose.Connection | null {
    return this._connection;
  }

  constructor() {
    this.connect();

    mongoose.connection.on('connected', () => {
      this._connection = mongoose.connection;
      console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });
  }

  private connect(): void {
    const uri = 'mongodb://localhost:27017/laraexpresso';
    mongoose.connect(uri);
  }

  public disconnect(): void {
    mongoose.disconnect();
  }
}