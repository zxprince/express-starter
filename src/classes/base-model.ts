import mongoose, { Document, Model, Schema } from 'mongoose';

import { BaseDocument } from "../interfaces/base-document";

export default class BaseModel<T extends BaseDocument> {
  public documentName: string = 'BaseModel';
  public columns: any;

  protected _schema!: Schema<T>;
  protected _model!: Model<T>;

  constructor() {
    this.init();
  }

  private init(): void {
    if (!this.documentName) {
      this.documentName = this.constructor.name;
    }

    this._schema = new Schema<T>(this.columns);

    this._model = mongoose.model<T>(this.documentName, this._schema);
  }

  create(data: T): T {
    return new this._model(data);
  }

  async findAll(): Promise<T[]> {
    return this._model.find();
  }
}