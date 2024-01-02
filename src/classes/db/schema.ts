import { Blueprint } from "../../interfaces/blueprint";
import DB from "./db";
import Log from "../log";

export class Schema {
  static create(tableName: string, callback: (table: Blueprint) => void): void {
    Log.info(`Creating table '${tableName}'`);
    const db = new DB();

    const table: Blueprint = {
      id: () => {
        Log.info('Adding id column');
        db.connection.promise().query(`ALTER TABLE ${tableName} ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY`);
      },
      string: (column: string, length: number = 255) => {
        Log.info(`Adding string column: ${column}`);
        db.connection.promise().query(`ALTER TABLE ${tableName} ADD COLUMN ${column} VARCHAR(${length})`);
      },
      bigInteger: (column: string) => {
        Log.info(`Adding bigInteger column: ${column}`);
        // Execute SQL query to add a bigInteger column
        db.connection.promise().query(`ALTER TABLE ${tableName} ADD COLUMN ${column} BIGINT`);
      },
      boolean: (column: string) => {
        Log.info(`Adding boolean column: ${column}`);
        // Execute SQL query to add a boolean column
        db.connection.promise().query(`ALTER TABLE ${tableName} ADD COLUMN ${column} BOOLEAN`);
      },
      dateTime: (column: string) => {
        Log.info(`Adding dateTime column: ${column}`);
        // Execute SQL query to add a dateTime column
        db.connection.promise().query(`ALTER TABLE ${tableName} ADD COLUMN ${column} DATETIME`);
      },
      date: (column: string) => {
        Log.info(`Adding date column: ${column}`);
        // Execute SQL query to add a date column
        db.connection.promise().query(`ALTER TABLE ${tableName} ADD COLUMN ${column} DATE`);
      },
      decimal: (column: string, precision: number = 10, scale: number = 2) => {
        Log.info(`Adding decimal column: ${column}`);
        // Execute SQL query to add a decimal column
        db.connection.promise().query(`ALTER TABLE ${tableName} ADD COLUMN ${column} DECIMAL(${precision}, ${scale})`);
      },
      json: (column: string) => {
        Log.info(`Adding json column: ${column}`);
        // Execute SQL query to add a json column
        db.connection.promise().query(`ALTER TABLE ${tableName} ADD COLUMN ${column} JSON`);
      },
      timestamps: () => {
        Log.info('Adding timestamps columns');
        db.connection.promise().query(`ALTER TABLE ${tableName} ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP`);
        db.connection.promise().query(`ALTER TABLE ${tableName} ADD COLUMN updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
      },
    };

    callback(table);
  }

  static drop(tableName: string): void {
    Log.info(`Dropping table '${tableName}'`);
  }
}