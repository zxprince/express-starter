import dotenv from 'dotenv';
import Config from '../config';

dotenv.config();

const log = {
  dateTimeFormat: Config.get('LOG_DATE_TIME_FORMAT', 'YYYY-MM-DD'),
};

export default log;