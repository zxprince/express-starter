import Config from '../classes/config';
import dotenv from 'dotenv';

dotenv.config();

const log = {
  dateTimeFormat: Config.get('LOG_DATE_TIME_FORMAT', 'YYYY-MM-DD HH:mm:ss'),
};

export default log;