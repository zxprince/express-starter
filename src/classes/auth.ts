import config from '../config';
import jwt from 'jsonwebtoken';

export default class Auth {

  constructor () {}

  public generateAccessToken(user: any) {
    return jwt.sign(user, config.app.key, {
      expiresIn: config.auth.tokenExpired
    });
  }
}