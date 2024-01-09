import BaseModel from '../classes/base-model';
import { User as IUser } from '../interfaces/user';

export default class UserModel extends BaseModel<IUser> {
  public documentName: string = 'User';
  public columns = {
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
  };

  constructor() {
    super();
  }
}