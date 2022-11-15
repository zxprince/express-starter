import Config from './config';
import moment from 'moment';

export default class Log {
  constructor () {}
  
  static info(message: any): void {
    this.log(message, 'info');
  }
  
  static error(message: any): void {
    this.log(message, 'error');
  }

  static log(message: any, type: string = 'info') {
    const content = this.formatMessage(message, type);
    console.log(content);
  }

  static getDateTime() {
    return moment().format(Config.get('log', 'dateTimeFormat'));
  }

  static formatMessage(message: any, type: string = 'info'): string {
    const dataTime = this.getDateTime();
    return `[${dataTime}] ${type.toUpperCase()}: ${message}`;
  }
}