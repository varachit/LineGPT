import { Request, Response, Error, ErrorRequestHandler } from 'express';
import config from '../config';

export const errorHandler: ErrorRequestHandler = (err: Error, req, Request, res, Response) => {
  console.error(err);
  return res.status(500).json({
    message: (config.nodeEnv) === 'production' ? 'An error occurred' : err
  });
};
