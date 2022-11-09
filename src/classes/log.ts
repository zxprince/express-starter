import Config from './config';
import moment from 'moment';

export default class Log {
  constructor () {}
  
  static info(message: string): void {
    this.log(message, 'info');
  }

  static log(message: string, type: string = 'info') {
    const content = this.formatMessage(message, type);
    console.log(content);
  }

  static getDateTime() {
    return moment().format(Config.get('log', 'dateTimeFormat'));
  }

  static formatMessage(message: string, type: string = 'info'): string {
    const dataTime = this.getDateTime();
    return `[${dataTime}] ${type.toUpperCase()}: ${message}`;
  }
}