import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import UserController from '../controllers/UsersController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import { userCreateVefify } from '../middlewares/verifyUser';
import UserAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const usersController = new UserController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

usersRouter.get('/', isAuthenticated, usersController.index);
usersRouter.post('/', userCreateVefify, usersController.create);
usersRouter.patch(
  '/avatar',
  isAuthenticated,
  upload.single('avatar'),
  userAvatarController.update
);

export default usersRouter;
