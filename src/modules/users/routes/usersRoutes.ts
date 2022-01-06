import { Router } from 'express';
import UserController from '../controllers/UsersController';
import isAuthenticated from '../middlewares/isAuthenticated';
import { userCreateVefify } from '../middlewares/verifyUser';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.get('/', isAuthenticated, usersController.index);
usersRouter.post('/', userCreateVefify, usersController.create);

export default usersRouter;
