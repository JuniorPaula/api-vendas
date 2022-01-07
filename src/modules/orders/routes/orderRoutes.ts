import { Router } from 'express';
import OrderController from '../controllers/OrdersController';
import { verifyOrderCreate, verifyOrderShow } from '../middlewares/verifyOrder';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get('/:id', verifyOrderShow, orderController.show);
orderRouter.post('/', verifyOrderCreate, orderController.create);

export default orderRouter;
