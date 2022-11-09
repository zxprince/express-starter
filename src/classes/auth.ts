import configApp from '../config/app';
import configAuth from '../config/auth';
import jwt from 'jsonwebtoken';

export default class Auth {

  constructor () {}

  public generateAccessToken(user: any) {
    return jwt.sign(user, configApp.key, {
      expiresIn: configAuth.tokenExpired
    });
  }
}