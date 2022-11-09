import dotenv from 'dotenv';
import Config from '../classes/config';

dotenv.config();

const auth = {
  tokenExpired: Config.get('AUTH_TOKEN_EXPIRED', '15m'),
};

export default auth;