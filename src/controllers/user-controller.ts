import { Request, Response } from 'express';
import BaseController from '../classes/base-controller';

export default class UserController extends BaseController {
  public index (req: Request, res: Response) {
    return this.makeResponse(res, null, 'UserController: User list.', 100);
  }

  public new (req: Request, res: Response) {
    return this.makeResponse(res, null, 'UserController: Add new user.', 100);
  }
}
