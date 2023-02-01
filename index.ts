import express, { Express, Request, Response } from 'express';

import DB from './src/classes/db';
import Log from './src/classes/log';
import apiRoutes from './src/routes/api';
import configApp from './src/config/app';

const app: Express = express();
const name = configApp.name;
const port = configApp.port;

app.get('/', (req: Request, res: Response) => {
  res.send(name);
  Log.info('Hello world');
  const db = new DB();
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});