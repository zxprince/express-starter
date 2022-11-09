import { Response } from 'express';

export default class BaseController {

  constructor () {}

  protected makeResponse(res: Response, data: any, message: string, code: string|number) {
    return res.send({
      data, message, code
    });
  }
}