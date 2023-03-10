import express, { Express, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { errorHandler } from './middleware/errorHandler';

import config from './config';

const app: Express = express();

app.use(helmet());
app.use(cors({ origin: config.cors_whitelist }));
app.use(compression());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(errorHandler);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ message: 'OK' });
});

app.listen(config.port, () => {
  console.log(`🚀 Express is listening on port ${config.port}`);
});
