import { Request, Response } from 'express';

export default class UserController {
  public index (req: Request, res: Response) {
    return res.send('UserController: User list.');
  }

  public new (req: Request, res: Response) {
    return res.send('UserController: Add new user.');
  }
}
