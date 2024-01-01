import { Connection, Pool } from 'mysql2';

export interface QueryBuilderOptions {
  table: string;
  connection: Connection|Pool;
}