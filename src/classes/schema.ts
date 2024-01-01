import { Blueprint } from "../interfaces/blueprint";
import Log from "./log";

class Schema {
  static create(tableName: string, callback: (table: Blueprint) => void): void {
    Log.info(`Creating table '${tableName}'`);

    const table: Blueprint = {
      id: () => Log.info('Adding id column'),
      string: (column: string) => Log.info(`Adding string column: ${column}`),
      timestamps: () => Log.info('Adding timestamps columns'),
    };

    callback(table);
  }

  static drop(tableName: string): void {
    Log.info(`Dropping table '${tableName}'`);
  }
}