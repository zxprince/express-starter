import mysql, { Connection } from 'mysql';

import DB from './db';
import Log from './log';
import configDB from '../config/db';
import migration from 'mysql-migrations';

export default class Migration {
  constructor () {
    const db = new DB();
  }
}