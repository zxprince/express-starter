export interface BaseInterface {
  id?: string;
  createdById?: number|null;
  updatedById?: number|null;
  deletedById?: number|null;
  createdAt?: Date|string|null;
  updatedAt?: Date|string|null;
  deletedAt?: Date|string|null;
}