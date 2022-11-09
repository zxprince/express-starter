import dotenv from 'dotenv'; //hasOwnProperty

dotenv.config();
// export default config;

export default class Config {
  static get(key: string, defaultValue: any = null): any {
    const isExist = process.env.hasOwnProperty(key);

    return isExist ? process.env[key] : defaultValue;
  }
}