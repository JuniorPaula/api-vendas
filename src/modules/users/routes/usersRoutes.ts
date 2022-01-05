import { Router } from 'express';
import UserController from '../controllers/UsersController';
import { userCreateVefify } from '../middlewares/verifyUser';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.get('/', usersController.index);
usersRouter.post('/', userCreateVefify, usersController.create);

export default usersRouter;
