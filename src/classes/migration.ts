import DB from "./db";
import Log from "./log";
import { Pool } from "mysql2";

export class Migration {
  protected connection: Pool;

  constructor() {
    let db = new DB();
    this.connection = db.connection;
  }

  async run(): Promise<void> {
    Log.info('Running migrations...');
    await this.up();
    Log.info('Migrations completed.');
  }

  async up(): Promise<void> {
    // Override this method in your actual migration class
    throw new Error('Method not implemented.');
  }

  async down(): Promise<void> {
    // Override this method in your actual migration class
    throw new Error('Method not implemented.');
  }
}