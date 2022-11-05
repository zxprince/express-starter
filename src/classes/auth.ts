import jwt from 'jsonwebtoken';
import config from '../config';

export default class Auth {

  constructor () {}

  public generateAccessToken(user: any) {
    return jwt.sign(user, config.app.key, {
      expiresIn: config.auth.tokenExpired
    });
  }
}