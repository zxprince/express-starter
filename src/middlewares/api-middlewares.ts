import { Request, Response, NextFunction } from 'express';

const apiMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Called API middleware');
  next();
}

export default apiMiddleware;