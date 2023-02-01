import { Request, Response } from 'express';
import BaseController from '../classes/base-controller';
import { HTTPResponseStatus } from '../enums/http-response-status';

export default class UserController extends BaseController {
  public index (req: Request, res: Response) {
    return this.makeResponse(res, HTTPResponseStatus.Success, null, 'UserController: User list.', 200);
  }

  public new (req: Request, res: Response) {
    return this.makeResponse(res, HTTPResponseStatus.Faild, null, 'UserController: Add new user.', 200);
  }
}
