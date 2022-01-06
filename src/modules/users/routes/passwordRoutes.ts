import { Router } from 'express';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';
import {
  emailVefifyToForgotPassword,
  resetVefifyEmailToForgotPassword,
} from '../middlewares/verifyUser';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post(
  '/forgot',
  emailVefifyToForgotPassword,
  forgotPasswordController.create
);

passwordRouter.post(
  '/reset',
  resetVefifyEmailToForgotPassword,
  resetPasswordController.create
);

export default passwordRouter;
