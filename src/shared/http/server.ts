import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import AppError from '@shared/errors/AppError';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/** middleware para tratamento de erros */
app.use(
  (error: Error, requeste: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
);

const port = process.env.PORT;
app.listen(port, () => {
  console.log();
  console.log(`Server started on port ${port}`);
});
