import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import AppError from './errors/AppError';

import './database';

const server = express();
server.use(express.json());

server.use(routes);

server.use(
  (err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

server.listen(3001, () => {
  console.log(`
  🍀️ Server is running on port 3001! Rock on! 🎸️
  💻️ This code is developed by lalves86
  if you want to know more, find me at:
  https://github.com/lalves86
  `);
});
