import { Response } from 'express';
import { HTTPResponseStatus } from '../enums/http-response-status';

export default class BaseController {

  constructor () {}

  protected makeResponse(res: Response, status: HTTPResponseStatus, data: any, message: string, code: number = 200) {
    return res.status(code).send({
      status, data, message, code
    });
  }
}