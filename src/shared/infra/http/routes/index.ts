import customersRouter from '@modules/customers/infra/http/routes/customersRoutes';
import orderRouter from '@modules/orders/infra/http/routes/orderRoutes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import passwordRouter from '@modules/users/infra/http/routes/passwordRoutes';
import profileRoutes from '@modules/users/infra/http/routes/profileRoutes';
import sessionRouter from '@modules/users/infra/http/routes/sessionsRoutes';
import usersRouter from '@modules/users/infra/http/routes/usersRoutes';
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
