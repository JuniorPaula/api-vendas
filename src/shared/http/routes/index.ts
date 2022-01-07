import customersRouter from '@modules/customers/routes/customersRoutes';
import orderRouter from '@modules/orders/routes/orderRoutes';
import productsRouter from '@modules/products/routes/products.routes';
import passwordRouter from '@modules/users/routes/passwordRoutes';
import profileRoutes from '@modules/users/routes/profileRoutes';
import sessionRouter from '@modules/users/routes/sessionsRoutes';
import usersRouter from '@modules/users/routes/usersRoutes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRoutes);
routes.use('/customers', customersRouter);
routes.use('/orders', orderRouter);

export default routes;
