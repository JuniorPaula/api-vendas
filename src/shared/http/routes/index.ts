import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({ mensage: 'Hello Dev' });
});

export default routes;
