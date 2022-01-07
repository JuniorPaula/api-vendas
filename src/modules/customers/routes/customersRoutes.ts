import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import CustomersController from '../controllers/CustomersController';
import {
  createCustomerVefify,
  deleteCustomerVefify,
  showCustomerVefify,
  updateCustomerVefify,
} from '../middlewares/customerVerify';

const customersRouter = Router();
const customerController = new CustomersController();

customersRouter.use(isAuthenticated);

customersRouter.get('/', customerController.index);
customersRouter.get('/:id', showCustomerVefify, customerController.show);
customersRouter.post('/', createCustomerVefify, customerController.create);
customersRouter.put('/:id', updateCustomerVefify, customerController.update);
customersRouter.delete('/:id', deleteCustomerVefify, customerController.delete);

export default customersRouter;
