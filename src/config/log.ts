import dotenv from 'dotenv';

dotenv.config();

const log = {
  dateTimeFormat: process.env.LOG_DATE_TIME_FORMAT,
};

export default log;