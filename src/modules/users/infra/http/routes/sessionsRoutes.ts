import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';
import { sessionCreateVefify } from '../../../middlewares/verifyUser';

const sessionRouter = Router();
const sessionController = new SessionsController();

sessionRouter.post('/', sessionCreateVefify, sessionController.create);

export default sessionRouter;
