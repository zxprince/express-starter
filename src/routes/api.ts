import { Router } from 'express';
import users from './api/users';

const router: Router = Router();

router.use('/users', users);

export default router;