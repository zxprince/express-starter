import dotenv from 'dotenv';

dotenv.config();

export default class Config {
  static get(key: string, defaultValue: any = null): any {
    const isExist = process.env.hasOwnProperty(key);

    return isExist ? process.env[key] : defaultValue;
  }
}