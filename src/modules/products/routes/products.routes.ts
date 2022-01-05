import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

import {
  verifyMethosShow,
  verifyMethodCreate,
  verifyMethodUpdate,
  verifyMethosDelete,
} from '../middlewares/verifyMethods';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.index);
productsRouter.post('/', verifyMethodCreate, productsController.create);
productsRouter.get('/:id', verifyMethosShow, productsController.show);
productsRouter.put('/:id', verifyMethodUpdate, productsController.update);
productsRouter.delete('/:id', verifyMethosDelete, productsController.delete);

export default productsRouter;
