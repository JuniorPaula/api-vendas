import { Router } from 'express';
import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';
import ProfileController from '../controllers/ProfileControler';
import { profileUpdateVefify } from '../middlewares/verifyProfile';

const profileRoutes = Router();
const profileController = new ProfileController();

profileRoutes.use(isAuthenticated);

profileRoutes.get('/', profileController.show);
profileRoutes.put('/', profileUpdateVefify, profileController.update);

export default profileRoutes;
