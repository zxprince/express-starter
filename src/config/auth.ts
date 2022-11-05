import dotenv from 'dotenv';

dotenv.config();

const auth = {
  tokenExpired: process.env.AUTH_TOKEN_EXPIRED,
};

export default auth;