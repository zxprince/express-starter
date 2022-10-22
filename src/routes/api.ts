import { Router } from 'express';
import UserController from '../controllers/user-controller';

const router: Router = Router();
const userController = new UserController();

router.get('/users', (req, res) => userController.index(req, res));

export default router;