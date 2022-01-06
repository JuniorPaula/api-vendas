import { Router } from 'express';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import { emailVefifyToForgotPassword } from '../middlewares/verifyUser';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();

passwordRouter.post(
  '/forgot',
  emailVefifyToForgotPassword,
  forgotPasswordController.create
);

export default passwordRouter;
