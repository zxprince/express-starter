import express, { Express, Request, Response } from 'express';

import Log from './src/classes/log';
import apiRoutes from './src/routes/api';
import config from './src/config';

const app: Express = express();
const name = config.app.name;
const port = config.app.port;

app.get('/', (req: Request, res: Response) => {
  res.send(name);
  Log.info('Hello world');
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});